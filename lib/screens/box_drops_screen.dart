import 'dart:core';

import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/customization_paint_screen.dart';

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
      'imageUrl':
          'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox1.png?alt=media',
    },
    {
      'name': 'Classic Shoebox',
      'description': 'A timeless classic shoebox.',
      'imageUrl':
          'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox2.png?alt=media',
    },
    {
      'name': 'Sophisticated Shoebox',
      'description': 'A perfect sophisticated shoebox.',
      'imageUrl':
          'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox3.png?alt=media',
    },
    {
      'name': 'Bellucci Shoebox',
      'description': 'A Monica Bellucci shoebox.',
      'imageUrl':
          'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox4.png?alt=media',
    },
    {
      'name': 'Naomi Shoebox',
      'description': 'A Naomi Campbell shoebox.',
      'imageUrl':
          'https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/shoebox5.png?alt=media',
    },
    {
      'name': 'Naiomi Shoebox',
      'description': 'A Naomi Campbell shoebox.',
      'imagePath': 'assets/images/skoMiDora.io.terrazo.463.png',
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
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.grey[900]!, Colors.black],
          ),
        ),
        child: ListView.builder(
          itemCount: shoeboxes.length,
          itemBuilder: (BuildContext context, int index) {
            final shoebox = shoeboxes[index];
            return Card(
              color: Colors.black,
              margin: const EdgeInsets.all(8.0),
              child: ListTile(
                contentPadding: const EdgeInsets.all(8.0),
                title: Image.network(
                  shoebox['imageUrl'] ?? '',
                  width: 300,
                  height: 300,
                  fit: BoxFit.cover,
                ),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      shoebox['name'] ?? '',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: CommonTheme.primaryColor,
                      ),
                    ),
                    Text(
                      shoebox['description'] ?? '',
                      style: TextStyle(
                        fontSize: 14,
                        color: CommonTheme.primaryColor,
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
