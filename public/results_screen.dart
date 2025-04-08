import 'package:flutter/material.dart';

class ResultsScreen extends StatelessWidget {
  final String? clothingMetadata;
  final String? geminiResponse;

  const ResultsScreen({
    super.key,
    required this.clothingMetadata,
    required this.geminiResponse,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Recommendation Results'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: SingleChildScrollView(

        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'AI Recommendation:',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.blue,
              ),
            ),
            const SizedBox(height: 15),
            Container(

              padding: EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(8),
              ),
              child: Text(
                geminiResponse ?? 'No recommendation available',
                style: const TextStyle(fontSize: 16),
              ),
            ),
            const SizedBox(height: 25),
            const Text(
              'Clothing Metadata:',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.blue,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              clothingMetadata ?? 'No metadata available',
              style: const TextStyle(fontSize: 14, color: Colors.grey),
            ),
            const SizedBox(height: 20),
            _buildWeatherInfo(),
          ],
        ),
      ),
    );


  }  
  Widget _buildWeatherInfo() {    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Weather Considered:',
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w500,
            color: Colors.blue,
          ),
        ),
        SizedBox(height: 8),
        Text(
          'Weather data was factored into this recommendation',
          style: TextStyle(fontSize: 14, color: Colors.grey),
        ),
      ],
    );
  }
}