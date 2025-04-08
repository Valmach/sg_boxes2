import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart'; // Import the WebView package

class WebViewPage extends StatefulWidget {
  final String url;

  const WebViewPage({super.key, required this.url});

  @override
  // ignore: library_private_types_in_public_api
  _WebViewPageState createState() => _WebViewPageState();
}

class _WebViewPageState extends State<WebViewPage> {
  bool _isLoading = true;
  String _errorMessage = '';

  @override
  void initState() {
    super.initState();
    // Initialize the WebViewController here if necessary
  }

  @override
  void dispose() {
    // Clean up any resources used by the WebViewController
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Shop Online'),
        backgroundColor: const Color(0xFF1F1B24),
      ),
      body: Stack(
        children: [
          WebViewWidget(
            controller: WebViewController()
              ..setJavaScriptMode(JavaScriptMode.unrestricted)
              ..setNavigationDelegate(
                NavigationDelegate(
                  onNavigationRequest: (NavigationRequest request) {
                    if (_isBlockedUrl(request.url)) {
                      return NavigationDecision.prevent;
                    }
                    return NavigationDecision.navigate;
                  },
                  onPageStarted: (String url) {
                    if (mounted) {
                      setState(() {
                        _isLoading = true;
                        _errorMessage = '';
                      });
                    }
                  },
                  onPageFinished: (String url) {
                    if (mounted) {
                      setState(() {
                        _isLoading = false;
                      });
                    }
                  },
                  onWebResourceError: (WebResourceError error) {
                    if (mounted) {
                      setState(() {
                        _isLoading = false;
                        _errorMessage = "Failed to load page: ${error.description}";
                      });
                    }
                  },
                ),
              )
              ..loadRequest(Uri.parse(widget.url)),
          ),
          if (_isLoading)
            const Center(
              child: CircularProgressIndicator(),
            ),
          if (_errorMessage.isNotEmpty)
            Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  _errorMessage,
                  style: const TextStyle(color: Colors.red, fontSize: 18),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
        ],
      ),
    );
  }
  bool _isBlockedUrl(String url) {
    // Add any logic here to block certain URLs if needed
    // For example, block URLs that navigate away from your app
    return false; // By default, allow all URLs
  }
}
