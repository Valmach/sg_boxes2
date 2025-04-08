import 'dart:core';

import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/customization_paint_screen.dart';
import '../common_theme/common_theme.dart';

import '../common theme/common_theme.dart';

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
    },
    {
      'name': 'Classic Shoebox',
      'description': 'A timeless classic shoebox.',
      'imagePath': 'assets/images/shoebox2.png',
    },
    {
      'name': 'Sophisticated Shoebox',
      'description': 'A perfect sophisticated shoebox.',
      'imagePath': 'assets/images/lilac_posh.391.png',
    },
    {
      'name': 'Bellucci Shoebox',
      'description': 'A Monica Bellucci shoebox.',
      'imagePath': 'assets/images/skoMiDora.io.treasure.446.png',
    },
    {
      'name': 'Naiomi Shoebox',
      'description': 'A Naomi Campbell shoebox.',
      'imagePath': 'assets/images/skoMiDora.io.terrazo.463.png',
    },
    // Add more shoeboxes as needed
  ];

  @override  Widget build(BuildContext context) {
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
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: CommonTheme.primaryColor,
                      ),
                    ),
                    Text(
                      shoebox['description']!,
                      style: TextStyle(
                        fontSize: 14,
                        color: CommonTheme.primaryColor,
                      ),
                    ),
                  ],
                ),
                onTap: () {
                  // Handle navigation to purchase options
                },
              ),
            );
          },
        ),
      ),
    );
  }}