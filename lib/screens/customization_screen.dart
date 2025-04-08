import 'package:flutter/material.dart';
import 'package:panorama_viewer/panorama_viewer.dart'; // Panorama viewer for 360 views
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/box_model.dart';
import 'package:sg_boxes/screens/customization_paint_screen.dart';

class CustomizationScreen extends StatelessWidget {
  final String title;

  const CustomizationScreen({super.key, required this.title, required BoxModel box});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          title,
          style: CommonTheme.appBarTheme.titleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Stack(
        children: [
          Positioned.fill(
            child: Container(
              decoration: CommonTheme.backgroundDecoration,
            ),
          ),
          SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const SizedBox(height: 20),
                const Text(
                  'Customize Your Boxie',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFFFFFFFF),
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                _build360Viewer(context),
                const SizedBox(height: 20),
                _buildColorCustomizationSection(context),
                const SizedBox(height: 20),
                _buildPatternCustomizationSection(context),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _build360Viewer(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Container(
        height: 300,
        decoration: BoxDecoration(
          color: Colors.black,
          borderRadius: BorderRadius.circular(15.0),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.5),
              spreadRadius: 2,
              blurRadius: 5,
              offset: const Offset(2, 3),
            ),
          ],
        ),
        child: PanoramaViewer(
          child: Image.asset('assets/images/shoebox360.png'),
        ),
      ),
    );
  }

  Widget _buildColorCustomizationSection(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Choose Exterior Color:',
          style: TextStyle(
            fontSize: 20,
            color: Colors.white,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 10),
        ColorSwatchGrid(
          colors: exteriorColors,
          onSelectColor: (Color color) {
            // Handle color selection
          },
          metadata: exteriorColorMetadata,
        ),
      ],
    );
  }

  Widget _buildPatternCustomizationSection(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Choose Patterns:',
          style: TextStyle(
            fontSize: 20,
            color: Colors.white,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 10),
        ColorSwatchGrid(
          colors: patternColors,
          onSelectColor: (Color color) {
            // Handle pattern selection
          },
          metadata: patternMetadata,
        ),
      ],
    );
  }
}

List<Color> patternColors = [
  const Color(0xFF1F1B24), // Dark Black
  const Color(0xFF8B0000), // Blood Red
  const Color(0xFF2F4F4F), // Dark Slate Grey
  const Color(0xFF696969), // Dim Grey
  const Color(0xFF32CD32), // Lime Green
  const Color(0xFFFF4500), // Orange Red
];

List<String> patternMetadata = [
  'Dark Black: Sleek and modern.',
  'Blood Red: Bold and striking.',
  'Dark Slate Grey: Subtle and sophisticated.',
  'Dim Grey: Neutral and versatile.',
  'Lime Green: Bright and energetic.',
  'Orange Red: Bold and dynamic.',
];

class ColorSwatchGrid extends StatelessWidget {
  final List<Color> colors;
  final List<String> metadata;
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
      children: List.generate(colors.length, (index) {
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
