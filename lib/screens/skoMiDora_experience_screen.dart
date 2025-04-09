import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/uiux_enhancements.dart';
// Import the UI/UX enhancements

class SkoMiDoraExperienceScreen extends StatelessWidget {
  const SkoMiDoraExperienceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SkoMiDora Experience'),
        backgroundColor: const Color(0xFF1F1B24),
      ),
      body: Center(
        child: UIUXEnhancements.fadeTransition(
          context,
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Welcome to the SkoMiDora Experience',
                style: TextStyle(
                  fontSize: 24,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 30),
              UIUXEnhancements.animatedButton(
                label: 'Click Me',
                onPressed: () {
                  // Handle button press
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Button Clicked!'),
                    ),
                  );
                },
                backgroundColor: Colors.blue,
                textColor: Colors.white,
              ),
            ],
          ),
        ),
      ),
      backgroundColor: const Color(0xFF000000), // Black background to match theme
    );
  }
}
