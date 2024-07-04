import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

import 'box_model.dart'; // Import the BoxModel

class BoxDetailScreen extends StatelessWidget {
  final BoxModel box;

  const BoxDetailScreen({super.key, required this.box});

  @override
  Widget build(BuildContext context) {
    // Sample images for the carousel, replace these with your own assets
    final List<String> boxImages = [
      box.imgAddress,
      'assets/images/shoebox1.png',
      'assets/images/shoebox2.png',
      'assets/images/shoebox3.png',
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(
          box.name,
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Color.fromARGB(255, 176, 219, 47), // Gold color
          ),
        ),
        backgroundColor: const Color.fromARGB(232, 114, 107, 122),
        elevation: 0,
        iconTheme: const IconThemeData(
          color: Color.fromARGB(255, 176, 219, 47), // Bright gold color for back button
        ),
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF1f4037), Color(0xFF99f2c8)], // Dark green to light green gradient matching HomeScreen
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CarouselSlider(
              items: boxImages.map((imagePath) {
                return Builder(
                  builder: (BuildContext context) {
                    return ClipRRect(
                      borderRadius: BorderRadius.circular(15.0),
                      child: Image.asset(
                        imagePath,
                        fit: BoxFit.cover,
                        width: double.infinity,
                        errorBuilder: (context, error, stackTrace) {
                          return const Icon(Icons.error, color: Colors.red);
                        },
                      ),
                    );
                  },
                );
              }).toList(),
              options: CarouselOptions(
                height: 400.0,
                enlargeCenterPage: true,
                autoPlay: true,
                aspectRatio: 16 / 9,
                autoPlayCurve: Curves.fastOutSlowIn,
                enableInfiniteScroll: true,
                autoPlayAnimationDuration: const Duration(milliseconds: 800),
                viewportFraction: 0.8,
              ),
            ),
            const SizedBox(height: 20),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(
                box.name,
                style: const TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 176, 219, 47), // Matching title color to HomeScreen
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(
                box.model,
                style: const TextStyle(
                  fontSize: 20,
                  color: Color.fromARGB(255, 141, 100, 100), // Subtle color for model text
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Text(
                '\$${box.price.toStringAsFixed(2)}',
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 176, 219, 47), // Matching price color to HomeScreen
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
