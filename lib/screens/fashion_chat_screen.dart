import 'dart:async';
import 'dart:core';
// REMOVE THIS LINE: import 'dart:nativewrappers/_internal/vm_shared/lib/map_patch.dart' show Map;
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:sg_boxes/common%20theme/common_theme.dart'; // Import CommonTheme
import 'package:googleapis/calendar/v3.dart' as calendar; // For Google Calendar
import 'package:intl/intl.dart'; // For date/time formatting
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:googleapis/calendar/v3.dart'
    as calendar; // Duplicate, can be removed
import 'package:firebase_database/firebase_database.dart'
    as firebase_db; // Duplicate, can be removed
import 'package:flutter_markdown/flutter_markdown.dart'
    as markdown; // Add 'as markdown'

const String accuWeatherApiKey = 'dE5pUmfUeAzQUNKGXVUlI63cjlobZl9s';

class ChatMessage {
  final String text;
  final bool isFromUser;

  ChatMessage({required this.text, required this.isFromUser});
}

class FashionChatScreen extends StatefulWidget {
  const FashionChatScreen({super.key, required this.title});
  final String title;

  @override
  State<FashionChatScreen> createState() => _FashionChatScreenState();
}

class _FashionChatScreenState extends State<FashionChatScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(),
    );
  }

  late final GenerativeModel _model;
  late final ChatSession _chat;
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _textController = TextEditingController();
  final FocusNode _textFieldFocus = FocusNode();
  bool _loading = false;
  final List<ChatMessage> _messages = [];
  String? _locationKey;
  String? _currentWeatherDescription;
  double? _currentTemperatureFahrenheit;
  String?
      _googleCalendarAccessToken; // Store the user's Google Calendar access token
  List<calendar.Event> _calendarEvents = [];
  final _database = FirebaseDatabase.instance;
  User? _currentUser = FirebaseAuth.instance.currentUser;
  String? _storedShoeboxPreference;

  static const _apiKeyGemini =
      'AIzaSyCNPXTgr6aDQyy2GJgunSUdaLJ7gF1rwpg'; // Replace with your actual Gemini API key

  @override
  void initState() {
    super.initState();
    _model = GenerativeModel(
      model: 'gemini-pro',
      apiKey: _apiKeyGemini,
    );
    _chat = _model.startChat();
    _messages.add(ChatMessage(
        text: 'Enter details about your shoeboxes or ask for fashion advice!',
        isFromUser: false));
    _fetchInitialData();
    _fetchCalendarEvents(); // Fetch calendar events on init (if token is available)
    _fetchUserWardrobeData().then((data) => print('Wardrobe Data: $data'));
    _fetchUserShoeboxData().then((data) => print('Shoebox Data: $data'));
  }

  Future<void> _fetchInitialData() async {
    _locationKey = await _getAccuWeatherLocationKey('West Memphis', 'AR');
    if (_locationKey != null) {
      await _fetchCurrentWeather(_locationKey!);
    }
    // In a real app, you would have a proper way to get the Google Calendar access token
    // For now, we'll simulate having one
    setState(() {
      _googleCalendarAccessToken =
          'YOUR_GOOGLE_CALENDAR_ACCESS_TOKEN'; // Replace with a valid token
    });
  }

  Future<String?> _getAccuWeatherLocationKey(
      String city, String stateCode) async {
    final String baseUrl = 'http://dataservice.accuweather.com';
    final String locationEndpoint = '/locations/v1/cities/search';
    final String queryParams = '?apikey=$accuWeatherApiKey&q=$city,$stateCode';

    final Uri uri = Uri.parse('$baseUrl$locationEndpoint$queryParams');

    try {
      final response = await http.get(uri);
      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        if (data.isNotEmpty) {
          return data[0]['Key'] as String?;
        } else {
          print('AccuWeather: No location found for $city, $stateCode');
          return null;
        }
      } else {
        print(
            'AccuWeather: Error fetching location - Status Code: ${response.statusCode}, Body: ${response.body}');
        return null;
      }
    } catch (e) {
      print('AccuWeather: Error communicating with location API: $e');
      return null;
    }
  }

  Future<void> _fetchCurrentWeather(String locationKey) async {
    final String baseUrl = 'http://dataservice.accuweather.com';
    final String currentConditionsEndpoint =
        '/currentconditions/v1/$locationKey';
    final String queryParams = '?apikey=$accuWeatherApiKey';

    final Uri uri = Uri.parse('$baseUrl$currentConditionsEndpoint$queryParams');

    try {
      final response = await http.get(uri);
      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        if (data.isNotEmpty) {
          setState(() {
            _currentWeatherDescription = data[0]['WeatherText'] as String?;
            _currentTemperatureFahrenheit =
                data[0]['Temperature']['Imperial']['Value'] as double?;
          });
        } else {
          print(
              'AccuWeather: No current conditions found for location key: $locationKey');
        }
      } else {
        print(
            'AccuWeather: Error fetching current conditions - Status Code: ${response.statusCode}, Body: ${response.body}');
      }
    } catch (e) {
      print('AccuWeather: Error communicating with current conditions API: $e');
    }
  }

  Future<void> _fetchCalendarEvents() async {
    if (_googleCalendarAccessToken == null) {
      print('Google Calendar: Access token not available.');
      return;
    }

    final cal = calendar.CalendarApi(http.Client());
    try {
      final eventsResponse = await cal.events.list('primary',
          maxResults: 5, // Fetch a limited number of events
          singleEvents: true,
          orderBy: 'startTime',
          timeMin: DateTime.now().toUtc());

      setState(() {
        _calendarEvents = eventsResponse.items ?? [];
        print('Google Calendar: Fetched ${_calendarEvents.length} events.');
        for (var event in _calendarEvents) {
          print(
              'Event: ${event.summary}, Start: ${event.start?.dateTime ?? event.start?.date}');
        }
      });
    } catch (e) {
      print('Google Calendar: Error fetching events - $e');
    }
  }

  Future<Map<String, dynamic>?> _fetchUserWardrobeData() async {
    if (_currentUser != null) {
      DatabaseReference wardrobeRef =
          _database.ref('users/${_currentUser!.uid}/wardrobe');
      try {
        DatabaseEvent event = await wardrobeRef.once();
        return event.snapshot.value as Map<String, dynamic>?;
      } catch (error) {
        print('Error fetching wardrobe data: $error');
        return null;
      }
    } else {
      print('User not logged in.');
      return null;
    }
  }

  Future<Map<String, dynamic>?> _fetchUserShoeboxData() async {
    if (_currentUser != null) {
      DatabaseReference shoeboxRef =
          _database.ref('users/${_currentUser!.uid}/shoeboxes');
      try {
        DatabaseEvent event = await shoeboxRef.once();
        return event.snapshot.value as Map<String, dynamic>?;
      } catch (error) {
        print('Error fetching shoebox data: $error');
        return null;
      }
    } else {
      print('User not logged in.');
      return null;
    }
  }

  Future<Map<String, dynamic>?> _fetchUserOutfitData() async {
    if (_currentUser != null) {
      DatabaseReference outfitRef =
          _database.ref('users/${_currentUser!.uid}/outfits');
      try {
        DatabaseEvent event = await outfitRef.once();
        return event.snapshot.value as Map<String, dynamic>?;
      } catch (error) {
        print('Error fetching outfit data: $error');
        return null;
      }
    } else {
      print('User not logged in.');
      return null;
    }
  }
}
