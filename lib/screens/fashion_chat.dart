/* import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class FashionScreen extends StatefulWidget {
  const FashionScreen({super.key, required this.item, required String title});

  final String item;

  @override
  // ignore: library_private_types_in_public_api
  _FashionScreenState createState() => _FashionScreenState();
}

class _FashionScreenState extends State<FashionScreen> {
  final TextEditingController _shoeboxController = TextEditingController();
  String _suggestions = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Fashion Suggestions'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Enter details about the shoeboxes in your closet:',
              style: TextStyle(fontSize: 18),
            ),
            TextField(
              controller: _shoeboxController,
              decoration: const InputDecoration(labelText: 'Shoebox Details'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                await _generateFashionSuggestions();
              },
              child: const Text('Get Fashion Suggestions'),
            ),
            const SizedBox(height: 20),
            _suggestions.isNotEmpty
                ? Text(
                    _suggestions,
                    style: const TextStyle(fontSize: 16),
                  )
                : Container(),
          ],
        ),
      ),
    );
  }

  Future<void> _generateFashionSuggestions() async {
    String shoeboxDetails = _shoeboxController.text;

    String suggestions = await generateFashionSuggestions(shoeboxDetails);
    setState(() {
      _suggestions = suggestions;
    });
  }

  Future<String> generateFashionSuggestions(String shoeboxDetails) async {
    String prompt =
        'Based on my shoeboxes, suggest fashion clothing for today: $shoeboxDetails';

    try {
      final response = await http.post(
        Uri.parse('https://api.openai.com/v1/chat/completions'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization':
              "Bearer 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",
        },
        body: jsonEncode({
          'prompt': prompt,
          'max_tokens': 50,
          'model': 'gpt-3.5-turbo',
        }),
      );

      if (response.statusCode == 200) {
        Map<String, dynamic> data = jsonDecode(response.body);
        return data['choices'][0]['text'];
      } else if (response.statusCode == 401) {
        print('Unauthorized error: Check your API key');
        throw Exception('Unauthorized error: Check your API key');
      } else {
        print('Failed to generate fashion suggestions: ${response.statusCode}');
        print('Response body: ${response.body}');
        throw Exception(
            'Failed to generate fashion suggestions: ${response.statusCode}');
      }
    } catch (e) {
      print('Exception occurred: $e');
      throw Exception('Failed to generate fashion suggestions: $e');
    }
  }
}
  */