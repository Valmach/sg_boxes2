import 'dart:core';

import 'package:flutter/material.dart';
import 'package:sg_boxes/detailed_paint_screen.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

  class CustomizablePaintScreen extends StatelessWidget {
    final String title;

    const CustomizablePaintScreen({super.key, required this.title});

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: Text(
            title,
            style: const TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Color(0xFFFFFFFF), // White color
            ),
          ),
          backgroundColor: const Color(0xFF000000), // Black color
          elevation: 0,
        ),
        body: Stack(
          children: [
            Positioned.fill(
              child: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF000000), Color(0xFF8B0000)], // Black to blood-red gradient
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                ),
              ),
            ),
            SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 20),
                  const Text(
                    'Customize Your Shoebox',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.normal,
                      color: Color(0xFF8A2BE2), // Rich violet color
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  const Text(
                    'Choose Exterior Color:',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.normal,
                      color: Colors.white,
                      shadows: [
                        Shadow(
                          blurRadius: 10.0,
                          color: Colors.black45,
                          offset: Offset(2.0, 2.0),
                        ),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 18),
                  ColorSwatchGrid(
                    colors: exteriorColors,
                    onSelectColor: (Color color) {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => DetailedPaintScreen(
                            baseColor: color,
                            title: 'Exterior Colour Details',
                          ),
                        ),
                      );
                    },
                    metadata: exteriorColorMetadata,
                  ),
                  const SizedBox(height: 20),
                  const Text(
                    'Choose Interior Color:',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.normal,
                      color: Color.fromARGB(255, 255, 255, 255),
                      shadows: [
                        Shadow(
                          blurRadius: 10.0,
                          color: Colors.black45,
                          offset: Offset(2.0, 2.0),
                        ),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 18),
                  ColorSwatchGrid(
                    colors: interiorColors,
                    onSelectColor: (Color color) {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => DetailedPaintScreen(
                            baseColor: color,
                            title: 'Interior Colour Details',
                          ),
                        ),
                      );
                    },
                    metadata: interiorColorMetadata,
                  ),
                ],
              ),
            ),
          ],
        ),
      );
    }
  }

class ColorSwatchGrid extends StatelessWidget {

  final List<Color> colors;  final List<String> metadata;
  final Function(Color) onSelectColor;

    const ColorSwatchGrid({
      super.key,
      required this.colors,
      required this.metadata,
      required this.onSelectColor,
    });

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 4,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      padding: const EdgeInsets.all(16),

      children: List<Widget>.generate(colors.length, (index) {
        final color = colors[index];
        final data = metadata[index];
        return GestureDetector(
          onTap: () => onSelectColor(color),
          child: Tooltip(
            message: data,
            child: Container(
              decoration: BoxDecoration(
                color: color,
                borderRadius: BorderRadius.circular(8),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.5),
                    spreadRadius: 2,
                    blurRadius: 5,
                    offset: const Offset(2, 3),
                  ),
                ],
              ),
              margin: const EdgeInsets.all(8),
            ),
          ),
        );
      }),
    );
  }

}
List<Color> exteriorColors = [
  const Color(0xFFFF0000), // Vibrant Red
  const Color(0xFF00FF00), // Bright Green
  const Color(0xFF0000FF), // Electric Blue
  const Color(0xFFFFFF00), // Bright Yellow
  const Color(0xFFFFA500), // Bold Orange
  const Color(0xFF8A2BE2), // Vivid Purple
  const Color(0xFF00FFFF), // Cyan
  const Color(0xFFFF1493), // Deep Pink
  const Color(0xFFFA8072), // Salmon
  const Color(0xFF4682B4), // Steel Blue
  const Color(0xFF32CD32), // Lime Green
  const Color(0xFFDAA520), // Goldenrod
];

  List<String> exteriorColorMetadata = [
    'Vibrant Red: Bold and intense.',
    'Bright Green: Fresh and lively.',
    'Electric Blue: Dynamic and modern.',
    'Bright Yellow: Energetic and cheerful.',
    'Bold Orange: Fun and vibrant.',
    'Vivid Purple: Rich and luxurious.',
    'Cyan: Cool and refreshing.',
    'Deep Pink: Bold and striking.',
    'Salmon: Soft and inviting.',
    'Steel Blue: Strong and reliable.',
    'Lime Green: Bright and energetic.',
    'Goldenrod: Warm and traditional.',
  ];

  List<Color> interiorColors = [
    const Color(0xFF1F1B24), // Dark Black
    const Color(0xFF8B0000), // Blood Red
    const Color(0xFF2F4F4F), // Dark Slate Grey
    const Color(0xFF696969), // Dim Grey
    const Color(0xFF32CD32), // Lime Green
    const Color(0xFFFF4500), // Orange Red
    const Color(0xFF6A5ACD), // Slate Blue
    const Color(0xFFDA70D6), // Orchid
    const Color(0xFFFF6347), // Tomato
    const Color(0xFF4682B4), // Steel Blue
    const Color(0xFFADFF2F), // Green Yellow
    const Color(0xFFFF69B4), // Hot Pink
  ];

  List<String> interiorColorMetadata = [
    'Dark Black: Sleek and modern.',
    'Blood Red: Bold and striking.',
    'Dark Slate Grey: Subtle and sophisticated.',
    'Dim Grey: Neutral and versatile.',
    'Lime Green: Bright and energetic.',
    'Orange Red: Bold and dynamic.',
    'Slate Blue: Modern and fresh.',
    'Orchid: Soft and inviting.',
    'Tomato: Warm and appetizing.',
    'Steel Blue: Strong and reliable.',
    'Green Yellow: Fresh and lively.',
    'Hot Pink: Vibrant and fun.',
  ];
