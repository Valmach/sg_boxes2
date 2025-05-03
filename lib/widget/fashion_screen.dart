import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class FashionScreen extends StatefulWidget {
  final String title;
  final String selectedShoe;

  const FashionScreen({super.key, required this.title, required this.selectedShoe});

  @override
  State<FashionScreen> createState() => _FashionScreenState();
}

class _FashionScreenState extends State<FashionScreen> {
  late final GenerativeModel _model;
  late final ChatSession _chat;
  final ScrollController _recommendationsScrollController = ScrollController();
  final ScrollController _chatScrollController = ScrollController();
  final TextEditingController _textController = TextEditingController();
  final FocusNode _textFieldFocus = FocusNode();
  bool _loading = false;
  final List<String> _recommendations = []; // Initialize with an empty list

  // Replace with your actual API key - Ensure this is secure in a production app
  static const _apiKey = 'AIzaSyAjj8ogxE8UBsnqdooDdIl-rw5anSstliE';

  @override
  void initState() {
    super.initState();
    if (_apiKey.isEmpty) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        _showError('Google Cloud API key is missing.');
      });
      return;
    }

    _model = GenerativeModel(
      model: 'gemini-pro', // Consider experimenting with newer models
      apiKey: _apiKey,
    );
    _chat = _model.startChat();
    _generateInitialRecommendations(); // Call the function to generate recommendations
    // Initialize the chat with the selected shoe
    _sendMessage('Suggest some initial outfit ideas based on my ${widget.selectedShoe}.');
  }

  Future<void> _generateInitialRecommendations() async {
    setState(() {
      _loading = true; // Show loading indicator while generating
    });
    try {
      final response = await _model.generateContent(
        [Content.text('Suggest 3 distinct outfit ideas that would go well with ${widget.selectedShoe}. Be concise.')],
      );
      final recommendationsText = response.text?.trim() ?? '';
      if (recommendationsText.isNotEmpty) {
        setState(() {
          _recommendations.addAll(recommendationsText.split('\n').map((r) => r.trim()).where((r) => r.isNotEmpty).toList());
        });
      } else {
        _showError('Failed to generate initial outfit recommendations.');
      }
    } catch (e) {
      _showError('Error generating initial recommendations: $e');
    } finally {
      setState(() {
        _loading = false;
      });
    }
  }
  void _scrollDown() {
    WidgetsBinding.instance.addPostFrameCallback(
      (_) => _chatScrollController.animateTo(
        _chatScrollController.position.maxScrollExtent,
        duration: const Duration(milliseconds: 300), // Reduced duration for smoother scroll
        curve: Curves.easeInOut, // Smoother scrolling curve
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    var textFieldDecoration = InputDecoration(
      contentPadding: const EdgeInsets.all(15),
      hintText: 'Ask for fashion advice...',
      hintStyle: TextStyle(color: Colors.grey.shade600),
      border: OutlineInputBorder(
        borderRadius: const BorderRadius.all(Radius.circular(14)),
        borderSide: BorderSide(color: Colors.grey.shade400),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: const BorderRadius.all(Radius.circular(14)),
        borderSide: BorderSide(color: Theme.of(context).colorScheme.secondary),
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        iconTheme: CommonTheme.appBarTheme.iconTheme,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        child: Padding(
          padding: const EdgeInsets.all(16.0), // Increased padding for better spacing
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Recommended Outfits',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22, // Slightly larger font size
                ),
              ),
              const SizedBox(height: 12),
              SizedBox(
                height: 120, // Slightly increased height
                child: _recommendations.isEmpty && _loading
                    ? const Center(child: CircularProgressIndicator())
                    : ListView.builder(
                        controller: _recommendationsScrollController,
                        scrollDirection: Axis.horizontal,
                        itemCount: _recommendations.length,
                        itemBuilder: (context, index) {
                          return Container(
                            width: 160, // Slightly wider recommendation cards
                            margin: const EdgeInsets.symmetric(horizontal: 8),
                            decoration: BoxDecoration(
                              color: Colors.white.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(color: Colors.white.withOpacity(0.2)), // Added a subtle border
                            ),
                            child: Center(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                  _recommendations[index],
                                  textAlign: TextAlign.center,
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w500, // Slightly lighter fontWeight
                                    fontSize: 16,
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      ),
              ),
              const SizedBox(height: 24),
              Text(
                'Chat with Stylist',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22, // Slightly larger font size
                ),
              ),
              const SizedBox(height: 12),
              Expanded(
                child: _chat.history.isEmpty && !_loading
                    ? const Center(
                        child: Text(
                          'Let\'s get you dressed!',
                          style: TextStyle(color: Colors.white, fontSize: 18),
                          textAlign: TextAlign.center,
                        ),
                      )
                    : ListView.builder(
                        controller: _chatScrollController,
                        itemCount: _chat.history.length,
                        itemBuilder: (context, idx) {
                          final content = _chat.history.toList()[idx];
                          final text = content.parts
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
                padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 10),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        autofocus: false, // Set to false, as the chat area might need initial focus
                        focusNode: _textFieldFocus,
                        decoration: textFieldDecoration.copyWith(
                          hintText: 'Ask for more fashion advice...',
                        ),
                        controller: _textController,
                        style: const TextStyle(color: Colors.white),
                        onSubmitted: (String value) {
                          _sendMessage(value);
                        },
                      ),
                    ),
                    const SizedBox(width: 12),
                    if (!_loading)
                      IconButton(
                        onPressed: () {
                          _sendMessage(_textController.text);
                        },
                        icon: const Icon(Icons.send, color: Colors.redAccent, size: 28), // Increased icon size
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

  Future<void> _sendMessage(String message) async {
    if (message.trim().isEmpty) {
      _showError('Message cannot be empty.');
      return;
    }

    setState(() {
      _loading = true;
    });

    try {
      final response = await _chat.sendMessage(Content.text(message));
      final text = response.text?.trim() ?? '';
      if (text.isNotEmpty && mounted) {
        setState(() {
          _loading = false;
          _scrollDown();
        });
      } else if (mounted) {
        _showError('No response from stylist.');
        setState(() {
          _loading = false;
        });
      }
    } catch (e) {
      if (mounted) {
        _showError('Error sending message: $e');
        setState(() {
          _loading = false;
        });
      }
    } finally {
      _textController.clear();
      if (mounted) {
        _textFieldFocus.requestFocus();
      }
    }
  }

  void _showError(String message) {
    if (!mounted) return;

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
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 12), // Added padding around messages
      child: Row(
        mainAxisAlignment:
            isFromUser ? MainAxisAlignment.end : MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start, // Align text to the start
        children: [
          if (!isFromUser)
            const Padding(
              padding: EdgeInsets.only(right: 8.0),
              child: CircleAvatar(
                backgroundColor: Colors.grey,
                radius: 14,
                child: Icon(Icons.android, color: Colors.white, size: 18), // Stylist icon
              ),
            ),
          Flexible(
            child: Container(
              constraints: const BoxConstraints(maxWidth: 600),
              decoration: BoxDecoration(
                color: isFromUser ? Colors.blue.shade100 : const Color(0xFF2C2C2C),
                borderRadius: BorderRadius.circular(18),
              ),
              padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16), // Adjusted padding
              margin: const EdgeInsets.only(bottom: 6), // Reduced bottom margin
              child: MarkdownBody(
                selectable: true,
                data: text,
                styleSheet: MarkdownStyleSheet(
                  p: TextStyle(
                    fontSize: 16,
                    color: isFromUser ? Colors.black87 : Colors.white, // Different text color
                  ),
                ),
              ),
            ),
          ),
          if (isFromUser)
            const Padding(
              padding: EdgeInsets.only(left: 8.0),
              child: CircleAvatar(
                backgroundColor: Colors.green,
                radius: 14,
                child: Icon(Icons.person, color: Colors.white, size: 18), // User icon
              ),
            ),
        ],
      ),
    );
  }
}