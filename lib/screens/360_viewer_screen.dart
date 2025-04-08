import 'package:flutter/material.dart';
import 'package:panorama_viewer/panorama_viewer.dart';

class Viewer360Screen extends StatelessWidget {
  final String imagePath;

  const Viewer360Screen({super.key, required this.imagePath});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('360 Viewer'),
        backgroundColor: const Color(0xFF1F1B24),
      ),
      
      body: PanoramaViewer(
        child: Image.asset('assets/images'), // Load the image using Image.asset
      ),
    );
  }
}
