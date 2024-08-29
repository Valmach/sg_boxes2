import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/360_viewer_screen.dart';
import 'package:sg_boxes/screens/customization_screen.dart';
import 'package:sg_boxes/screens/uiux_enhancements.dart';
import 'package:sg_boxes/screens/box_model.dart';

class ProductDetailScreen extends StatelessWidget {
  final BoxModel box;

  const ProductDetailScreen({super.key, required this.box});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(box.name, style: CommonTheme.appBarTheme.titleTextStyle),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              UIUXEnhancements.fadeTransition(
                context,
                _buildProductImage(context),
              ),
              const SizedBox(height: 20),
              Text(
                box.name,
                style: const TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              Text(
                '\$${box.price.toStringAsFixed(2)}',
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              Text(
                box.model,
                style: const TextStyle(
                  fontSize: 16,
                  color: Colors.white,
                ),
              ),
              if (box.description.isNotEmpty) ...[
                const SizedBox(height: 20),
                Text(
                  box.description,
                  style: const TextStyle(
                    fontSize: 14,
                    color: Colors.white70,
                  ),
                ),
              ],
              const SizedBox(height: 20),
              _buildColorOptions(context),
              const SizedBox(height: 20),
              _buildCustomizationButton(context),
              const SizedBox(height: 20),
              _buildAIRecommendations(context),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildProductImage(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => Viewer360Screen(imagePath: box.imgAddress),
          ),
        );
      },
      child: Hero(
        tag: box.imgAddress,
        child: ClipRRect(
          borderRadius: BorderRadius.circular(15.0),
          child: Image.asset(
            box.imgAddress,
            height: 300,
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }

  Widget _buildColorOptions(BuildContext context) {
    if (box.availableColors == null || box.availableColors!.isEmpty) {
      return const SizedBox.shrink();
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: box.availableColors!.map((colorCode) {
        Color color = Color(int.parse(colorCode.replaceFirst('#', '0xff')));
        return GestureDetector(
          onTap: () {
            // Handle color selection
          },
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0),
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: color,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
          ),
        );
      }).toList(),
    );
  }

  Widget _buildCustomizationButton(BuildContext context) {
    return UIUXEnhancements.animatedButton(
      label: 'Customize Now',
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => CustomizationScreen(title: 'Customize Your Box', box: box),
          ),
        );
      },
      color: Colors.red,
      textColor: Colors.white,
      backgroundColor: Colors.red,
    );
  }
  Widget _buildAIRecommendations(BuildContext context) {
    return AIRecommendationsWidget(
      productName: box.name,
      imagePath: box.imgAddress,
    );
  }
}

class AIRecommendationsWidget extends StatelessWidget {
  final String productName;
  final String imagePath;

  const AIRecommendationsWidget({
    super.key,
    required this.productName,
    required this.imagePath,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Recommended for You:',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 10),
        // Replace this with your AI recommendation logic and UI
        // For now, it's just a placeholder
        Container(
          padding: const EdgeInsets.all(16.0),
          decoration: BoxDecoration(
            color: Colors.grey.shade800,
            borderRadius: BorderRadius.circular(10),
          ),
          child: Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.asset(
                  imagePath,
                  width: 70,
                  height: 70,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 10),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '$productName - Recommended',
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 5),
                  const Text(
                    'Price: \$199.99',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.white70,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}
