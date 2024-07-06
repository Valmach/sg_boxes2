import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
// Import the BoxModel
import 'package:sg_boxes/screens/box_model.dart'; // Import the common theme

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
          style: CommonTheme.appBarTheme.titleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
        iconTheme: CommonTheme.appBarTheme.iconTheme,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
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
                        height: 200.0, // Reduced height for smaller images
                        errorBuilder: (context, error, stackTrace) {
                          return const Icon(Icons.error, color: Colors.red);
                        },
                      ),
                    );
                  },
                );
              }).toList(),
              options: CarouselOptions(
                height: 200.0, // Reduced height for smaller images
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
                style: CommonTheme.headingTextStyle,
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
