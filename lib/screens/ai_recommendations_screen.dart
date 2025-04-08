import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/box_model.dart';

class AIRecommendationsScreen extends StatelessWidget {
  final BoxModel box;

  const AIRecommendationsScreen({super.key, required this.box});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Recommendations for ${box.name}'),
        backgroundColor: const Color(0xFF1F1B24),
      ),
      body: Center(
        child: Text(
          'AI Recommendations for ${box.model} will be displayed here.',
          style: const TextStyle(
            fontSize: 18,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
