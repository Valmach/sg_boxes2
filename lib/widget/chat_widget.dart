import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class ChatScreen extends StatefulWidget {
  final String title;
  final String selectedShoe;

  const ChatScreen({super.key, required this.title, required this.selectedShoe});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  late final GenerativeModel _model;
  late final ChatSession _chat;
  final ScrollController _recommendationsScrollController = ScrollController();
  final ScrollController _chatScrollController = ScrollController();
  final TextEditingController _textController = TextEditingController();
  final FocusNode _textFieldFocus = FocusNode();
  bool _loading = false;
  late final List<String> _recommendations;

  static const _apiKey = 'AIzaSyB7HamoRE3W_LWelZGIMtCtQebOFwdMCZE'; // Replace with your actual API key

  @override
  void initState() {
    super.initState();
    if (_apiKey.isEmpty) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        _showError('API key is missing.');
      });
      return;
    }

    _model = GenerativeModel(
      model: 'gemini-pro',
      apiKey: _apiKey,
    );
    _chat = _model.startChat();
    _generateRecommendations();
  }

  void _generateRecommendations() {
    _recommendations = [
      'Outfit 1 with ${widget.selectedShoe}',
      'Outfit 2 with ${widget.selectedShoe}',
      'Outfit 3 with ${widget.selectedShoe}',
    ];
  }

  void _scrollDown() {
    WidgetsBinding.instance.addPostFrameCallback(
      (_) => _chatScrollController.animateTo(
        _chatScrollController.position.maxScrollExtent,
        duration: const Duration(milliseconds: 750),
        curve: Curves.easeOutCirc,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    var textFieldDecoration = InputDecoration(
      contentPadding: const EdgeInsets.all(15),
      hintText: 'Enter a prompt...',
      hintStyle: TextStyle(color: Colors.grey.shade600),
      border: OutlineInputBorder(
        borderRadius: const BorderRadius.all(Radius.circular(14)),
        borderSide: BorderSide(
          color: Colors.grey.shade400,
        ),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: const BorderRadius.all(Radius.circular(14)),
        borderSide: BorderSide(
          color: Theme.of(context).colorScheme.secondary,
        ),
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor, // Match the app's color scheme
        iconTheme: CommonTheme.appBarTheme.iconTheme, // Bright color for the back button
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: ListView.builder(
                  controller: _recommendationsScrollController,
                  itemCount: _recommendations.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(
                        _recommendations[index],
                        style: const TextStyle(
                          color: Color(0xFFFFFFFF), // White color
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                        ),
                      ),
                    );
                  },
                ),
              ),
              if (_apiKey.isNotEmpty)
                Expanded(
                  child: _chat.history.isEmpty
                      ? const Center(
                          child: Text(
                            'Lets get you dressed!',
                            style: TextStyle(
                              color: Color(0xFFFFFFFF),
                              fontSize: 20,
                            ),
                          ),
                        )
                      : ListView.builder(
                          controller: _chatScrollController,
                          itemCount: _chat.history.length,
                          itemBuilder: (context, idx) {
                            var content = _chat.history.toList()[idx];
                            var text = content.parts
                                .whereType<TextPart>()
                                .map<String>((e) => e.text?.trim() ?? '')
                                .join('');
                            return MessageWidget(
                              text: text,
                              isFromUser: content.role == 'user',
                            );
                          },
                        ),
                ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 25, horizontal: 15),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        autofocus: true,
                        focusNode: _textFieldFocus,
                        decoration: textFieldDecoration.copyWith(
                          hintText: 'Enter a prompt...',
                        ),
                        controller: _textController,
                        style: const TextStyle(color: Colors.white),
                        onSubmitted: (String value) {
                          _sendChatMessage(value);
                        },
                      ),
                    ),
                    const SizedBox.square(dimension: 15),
                    if (!_loading)
                      IconButton(
                        onPressed: () async {
                          _sendChatMessage(_textController.text);
                        },
                        icon: const Icon(
                          Icons.send,
                          color: Color(0xFF8B0000), // Accent color for send icon
                        ),
                      )
                    else
                      const CircularProgressIndicator(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _sendChatMessage(String message) async {
    if (message.isEmpty) {
      _showError('Message cannot be empty.');
      return;
    }

    setState(() {
      _loading = true;
    });

    try {
      var response = await _chat.sendMessage(Content.text(message));
      var text = response.text ?? ''; // Ensure text is not null
      if (text.isEmpty) {
        _showError('No response from API.');
      } else {
        if (mounted) {
          setState(() {
            _loading = false;
            _scrollDown();
          });
        }
      }
    } catch (e) {
      if (mounted) {
        _showError(e.toString());
        setState(() {
          _loading = false;
        });
      }
    } finally {
      _textController.clear();
      if (mounted) {
        setState(() {
          _loading = false;
        });
        _textFieldFocus.requestFocus();
      }
    }
  }

  void _showError(String message) {
    if (!mounted) return; // Check if the widget is still mounted

    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Something went wrong'),
          content: SingleChildScrollView(
            child: SelectableText(message),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
  }
}

class MessageWidget extends StatelessWidget {
  final String text;
  final bool isFromUser;

  const MessageWidget({
    super.key,
    required this.text,
    required this.isFromUser,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment:
          isFromUser ? MainAxisAlignment.end : MainAxisAlignment.start,
      children: [
        Flexible(
          child: Container(
            constraints: const BoxConstraints(maxWidth: 600),
            decoration: BoxDecoration(
              color: isFromUser
                  ? Colors.blue.shade100
                  : const Color(0xFF2C2C2C), // Chat bubble color
              borderRadius: BorderRadius.circular(18),
            ),
            padding: const EdgeInsets.symmetric(
              vertical: 15,
              horizontal: 20,
            ),
            margin: const EdgeInsets.only(bottom: 8),
            child: MarkdownBody(
              selectable: true,
              data: text,
              styleSheet: MarkdownStyleSheet(
                p: const TextStyle(
                  fontSize: 16,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
