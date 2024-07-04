/* import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class ChatGPTService {
  final _apiUrl = 'https://api.openai.com/v1/chat/completions';
  final _secureStorage = FlutterSecureStorage();

  Future<String> getApiKey() async {
    return await _secureStorage.read(key: 'api_key') ?? '';
  }

  Future<String> sendRequest(String prompt, {int maxTokens = 60, String model = 'gpt-3.5-turbo'}) async {
    final apiKey = await getApiKey();
    if (apiKey.isEmpty) {
      throw Exception('API key not found');
    }

    final response = await http.post(
      Uri.parse(_apiUrl),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $apiKey',
      },
      body: jsonEncode({
        'prompt': prompt,
        'max_tokens': maxTokens,
        'model': model,
      }),
    );

    if (response.statusCode == 200) {
      Map<String, dynamic> data = jsonDecode(response.body);
      return data['choices'][0]['text'];
    } else {
      print('Error ${response.statusCode}: ${response.body}');
      throw Exception('Failed to load response: ${response.statusCode}');
    }
  }

  getResponse(String text) {}
}
 */