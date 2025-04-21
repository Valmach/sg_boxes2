import 'dart:io' show File;
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:geolocator/geolocator.dart';

// Replace with your Firebase and AccuWeather API keys
const String firebaseDatabaseUrl = 'https://esp32boxies-default-rtdb.firebaseio.com/';
const String accuWeatherApiKey = 'dE5pUmfUeAzQUNKGXVUlI63cjlobZl9s'; // Add AccuWeather API key

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
  @override
  _FashionCompanionPageState createState() => _FashionCompanionPageState();
}

class _FashionCompanionPageState extends State<FashionCompanionPage> {
  final ImagePicker _picker = ImagePicker();
  final DatabaseReference _database =
      FirebaseDatabase.instance.refFromURL(firebaseDatabaseUrl);

  File? _image;
  String? _clothingMetadata;
  bool _isLoading = false;
  String _userInput = '';
  String? _recommendation;
  Map<String, dynamic>? _weatherData;

  static const String noImageSelectedMessage = 'No image selected.';
  static const String errorMessagePrefix = 'Error: ';

  @override
  void initState() {
    super.initState();
    _loadWeatherData(); // Load weather data on initialization
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
          _clothingMetadata = null;
          _isLoading = true;
        });

        await _processImage();
      }
    } catch (e) {
      _showError('Error selecting image: $e');
    }
  }

  Future<void> _processImage() async {
    try {
      // Fetch shoebox data
      final shoeboxData = await _fetchShoeboxData();
      if (shoeboxData == null) {
        throw Exception('No shoebox data found.');
      }

      // Validate user input
      if (_userInput.isEmpty) {
        throw Exception('User input is empty.');
      }

      // Validate weather data
      if (_weatherData == null) {
        throw Exception('Weather data is not available.');
      }

      // Generate recommendation based on rules
      final recommendation = _generateRecommendation(shoeboxData, _userInput, _weatherData!);

      setState(() {
        _clothingMetadata = recommendation;
        _recommendation = recommendation;
      });
    } catch (e) {
      _showError('Error processing image: $e');
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  String _generateRecommendation(
      Map<dynamic, dynamic> shoeboxData, String userInput, Map<String, dynamic> weatherData) {
    // Example rule-based recommendation logic
    final temperature = weatherData['Temperature']?['Metric']?['Value'] ?? 20.0; // Default to 20°C
    final weatherText = weatherData['WeatherText'] ?? 'Clear';

    String recommendation = '';

    if (temperature < 10) {
      recommendation = 'It\'s cold! Wear warm shoes like boots.';
    } else if (temperature >= 10 && temperature < 20) {
      recommendation = 'It\'s cool. Sneakers or casual shoes would be great.';
    } else {
      recommendation = 'It\'s warm. Sandals or light shoes are perfect.';
    }

    // Add user input to the recommendation
    recommendation += '\n\nUser request: $userInput';

    return recommendation;
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
              decoration:
                  const InputDecoration(labelText: 'Ask your fashion companion'),
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
            if (_recommendation != null)
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(_recommendation!, textAlign: TextAlign.center),
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