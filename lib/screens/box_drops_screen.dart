import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/webview_page.dart'; // Import the WebViewPage

class BoxDropsScreen extends StatefulWidget {
  const BoxDropsScreen({super.key});

  @override
  _BoxDropsScreenState createState() => _BoxDropsScreenState();
}

class _BoxDropsScreenState extends State<BoxDropsScreen> {
  final List<Map<String, String>> shoeboxes = [
    {
      'name': 'Elegant Shoebox',
      'description': 'A beautifully crafted shoebox.',
      'imagePath': 'assets/images/shoebox1.png',
      'url': 'https://your-gemini-api-url.com/elegant',
    },
    {
      'name': 'Classic Shoebox',
      'description': 'A timeless classic shoebox.',
      'imagePath': 'assets/images/shoebox2.png',
      'url': 'https://your-gemini-api-url.com/classic',
    },
    {
      'name': 'Sophisticated Shoebox',
      'description': 'A perfect sophisticated shoebox.',
      'imagePath': 'assets/images/lilac_posh.391.png',
      'url': 'https://your-gemini-api-url.com/sophisticated',
    },
    {
      'name': 'Bellucci Shoebox',
      'description': 'A Monica Bellucci shoebox.',
      'imagePath': 'assets/images/skoMiDora.io.treasure.446.png',
      'url': 'https://your-gemini-api-url.com/bellucci',
    },
    {
      'name': 'Naiomi Shoebox',
      'description': 'A Naomi Campbell shoebox.',
      'imagePath': 'assets/images/skoMiDora.io.terrazo.463.png',
      'url': 'https://your-gemini-api-url.com/naiomi',
    },
    // Add more shoeboxes as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Box Drops'),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        titleTextStyle: CommonTheme.appBarTheme.titleTextStyle,
        iconTheme: CommonTheme.appBarTheme.iconTheme,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        child: ListView.builder(
          itemCount: shoeboxes.length,
          itemBuilder: (BuildContext context, int index) {
            final shoebox = shoeboxes[index];
            return Card(
              color: Colors.black, // Set card color to black
              margin: const EdgeInsets.all(8.0),
              child: ListTile(
                contentPadding: const EdgeInsets.all(8.0),
                title: Image.asset(
                  shoebox['imagePath']!,
                  width: 300,
                  height: 300,
                  fit: BoxFit.cover,
                ),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      shoebox['name']!,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.white, // Change text color to white
                      ),
                    ),
                    Text(
                      shoebox['description']!,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Colors.white, // Change text color to white
                      ),
                    ),
                  ],
                ),
                onTap: () {
                  // Navigate to the WebView page with the appropriate URL
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => WebViewPage(
                        url: shoebox['url']!, // Pass the URL to the WebViewPage
                      ),
                    ),
                  );
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
