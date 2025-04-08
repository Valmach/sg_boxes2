import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
// Import the WebViewPage

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
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox1.png?alt=media',
    },
    {
      'name': 'Classic Shoebox',
      'description': 'A timeless classic shoebox.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox2.png?alt=media',
    },
    {
      'name': 'Sophisticated Shoebox',
      'description': 'A perfect sophisticated shoebox.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox3.png?alt=media',
    },
    {
      'name': 'Bellucci Shoebox',
      'description': 'A Monica Bellucci shoebox.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox4.png?alt=media',
    },
    {
      'name': 'Naomi Shoebox',
      'description': 'A Naomi Campbell shoebox.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox5.png?alt=media',
    },
     {
      'name': 'Simone Biles Shoebox',
      'description': 'A Simone Biles shoebox.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox6.png?alt=media',
    },
     {
      'name': 'Katie Ledecky Shoebox',
      'description': 'A Katie Ledecky.',
      'imageUrl': 'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox7.png?alt=media',
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
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // Number of boxes per row
            childAspectRatio: 0.7, // Aspect ratio to make the boxes smaller
            crossAxisSpacing: 8.0,
            mainAxisSpacing: 8.0,
          ),
          itemCount: shoeboxes.length,
          itemBuilder: (BuildContext context, int index) {
            final shoebox = shoeboxes[index];
            return Card(
              color: Colors.black, // Set card color to black
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15.0),
                side: const BorderSide(
                  color: CommonTheme.accentColor,
                  width: 2, // Increase border weight
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(15.0),
                      child: Image.network(
                        shoebox['imageUrl']!,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
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
                        const SizedBox(height: 4), // Spacing between name and description
                        Text(
                          shoebox['description']!,
                          style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: Colors.white70, // Slightly lighter color for the description
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
