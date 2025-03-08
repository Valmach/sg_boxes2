import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:geolocator/geolocator.dart';
import 'results_screen.dart'; // Import the ResultsScreen
import 'package:googleapis_auth/googleapis_auth.dart' as auth;

// Replace with your Firebase and Gemini API keys
const String firebaseDatabaseUrl ='https://esp32boxies-default-rtdb.firebaseio.com/';
const String geminiApiKey = 'AIzaSyAXPOVrC2RqJ_O8_Oraz8UBGEFcXA8EqIg';
const String accuWeatherApiKey = 'dE5pUmfUeAzQUNKGXVUlI63cjlobZl9s';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fashion Companion',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: FashionCompanionPage(),
    );
  }
}

class FashionCompanionPage extends StatefulWidget {
  const FashionCompanionPage({super.key});

  @override
  _FashionCompanionPageState createState() => _FashionCompanionPageState();
}

class _FashionCompanionPageState extends State<FashionCompanionPage> {
  final ImagePicker _picker = ImagePicker();
  final DatabaseReference _database =
      FirebaseDatabase.instance.refFromURL(firebaseDatabaseUrl);
  final GenerativeModel _model =
      GenerativeModel(model: 'gemini-pro-vision', apiKey: geminiApiKey);

  File? _image;
  bool _isLoading = false;
  String _userInput = '';
  String? _geminiResponse;
  Map<String, dynamic>? _weatherData;

  static const String noImageSelectedMessage = 'No image selected.';

  get prompt => null;

  @override
  void initState() {
    super.initState();
    _loadWeatherData();
  }

  Future<void> _loadWeatherData() async {
    try {
      Position position = await _determinePosition();
      Map<String, dynamic> weatherData =
          await _getWeather(position.latitude, position.longitude);
      setState(() {
        _weatherData = weatherData;
      });
    } catch (e) {
      _showError('Error loading weather data: $e');
    }
  }

  Future<Position> _determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;

    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      return Future.error('Location services are disabled.');
    }

    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        return Future.error('Location permissions are denied');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      return Future.error(
          'Location permissions are permanently denied, we cannot request permissions.');
    }
    return await Geolocator.getCurrentPosition();
  }

  Future<Map<String, dynamic>> _getWeather(
      double latitude, double longitude) async {
    final locationUrl = Uri.parse(
        'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=$accuWeatherApiKey&q=$latitude,$longitude');
    final locationResponse = await http.get(locationUrl);

    if (locationResponse.statusCode == 200) {
      final locationData = json.decode(locationResponse.body);
      final locationKey = locationData['Key'];

      final weatherUrl = Uri.parse(
          'http://dataservice.accuweather.com/currentconditions/v1/$locationKey?apikey=$accuWeatherApiKey');
      final weatherResponse = await http.get(weatherUrl);

      if (weatherResponse.statusCode == 200) {
        final weatherData = json.decode(weatherResponse.body)[0];
        return weatherData;
      } else {
        throw Exception('Failed to load weather data');
      }
    } else {
      throw Exception('Failed to load location data');
    }
  }

  Future<void> _scanClothing() async {
    try {
      final XFile? image = await _picker.pickImage(source: ImageSource.camera);

      if (image != null) {
        setState(() {
          _image = File(image.path);
          _geminiResponse = null;
          _isLoading = true;
        });

        await _processImage(await _image!.readAsBytes());
      }
    } catch (e) {
      _showError('Error selecting image: $e');
    }
  }

  Future<void> _processImage(List<int> imageBytes) async {
    try {
      if (imageBytes.isEmpty) {
        throw Exception('Image bytes are empty.');
      }

      final shoeboxData = await _fetchShoeboxData();
      if (shoeboxData == null) {
        throw Exception('No shoebox data found.');
      }

      if (_userInput.isEmpty) {
        throw Exception('User input is empty.');
      }

      if (_weatherData == null) {
        throw Exception('Weather data is not available.');
      }

      final parts = <Part>[];
      // ... (other code)

      parts.add(TextPart(
          'Your text content here')); // Correct way to create text Part

      // ... (other code)

      // Text Part
      parts.add(TextPart(
          'Shoebox Metadata: ${shoeboxData.toString()}. User input: $_userInput. Weather: ${_weatherData.toString()}. What shoes match this clothing and the user\'s request?'));

      // Content add user
      final content = Content("user", parts);

      final response = await _model.generateContent([content]);
      final text = response.text;

      setState(() {
        _geminiResponse = text;
      });
    } catch (e) {
      _showError('Error processing image: $e');
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<Map<dynamic, dynamic>?> _fetchShoeboxData() async {
    try {
      DatabaseEvent shoeboxEvent =
          await _database.child('shoeboxes/shoe1').once();
      return shoeboxEvent.snapshot.value as Map<dynamic, dynamic>?;
    } catch (e) {
      _showError('Error fetching shoebox data: $e');
      return null;
    }
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.red,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Fashion Companion')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            TextField(
              decoration: const InputDecoration(
                  labelText: 'Ask your fashion companion'),
              onChanged: (value) => _userInput = value,
            ),
            const SizedBox(height: 20),
            _image == null
                ? const Text(noImageSelectedMessage)
                : Image.file(_image!, height: 200),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _scanClothing,
              child: const Text('Scan Clothing'),
            ),
            Visibility(
              visible: _isLoading,
              child: const CircularProgressIndicator(),
            ),
            if (_geminiResponse != null)
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(_geminiResponse!, textAlign: TextAlign.center),
              ),
            if (_weatherData != null)
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text('Weather: ${_weatherData.toString()}'),
              ),
          ],
        ),
      ),
    );
  }
}
