/* import 'package:flutter/material.dart';
import 'package:smart_chatgpt_shoebox/services/chat_gpt_service.dart';  
// Ensure this path is correct

class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key, required String title, required String selectedShoe});

  @override
  // ignore: library_private_types_in_public_api
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final List<String> _messages = [];
  final TextEditingController _textController = TextEditingController();
  final ChatGPTService _chatGPTService = ChatGPTService();

  void _handleSubmitted(String text) async {
    if (text.isEmpty) return;
    _textController.clear();
    setState(() {
      _messages.add("User: $text");
    });

    try {
      final String response = await _chatGPTService.getResponse(text);
      setState(() {
        _messages.add("ChatGPT: $response");
      });
    } catch (e) {
      setState(() {
        _messages.add("Error: ${e.toString()}");
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Fashion Chat')),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (context, index) => ListTile(title: Text(_messages[index])),
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _textController,
                    decoration: const InputDecoration(hintText: 'Send a message'),
                  ),
                ),
                FloatingActionButton(
                  onPressed: () => _handleSubmitted(_textController.text),
                  child: const Icon(Icons.send),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
 */