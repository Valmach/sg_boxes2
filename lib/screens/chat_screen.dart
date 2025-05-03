import 'package:flutter/material.dart';
import 'package:sg_boxes/services/chat_gpt_service.dart';

class ChatScreen extends StatefulWidget {
  final String title;
  final String selectedShoe;

  const ChatScreen({
    super.key,
    required this.title,
    required this.selectedShoe,
  });

  @override
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
      appBar: AppBar(title: Text(widget.title)),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (context, index) =>
                  ListTile(title: Text(_messages[index])),
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _textController,
                    decoration:
                        const InputDecoration(hintText: 'Send a message'),
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
