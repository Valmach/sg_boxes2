import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/uiux_enhancements.dart';


class SkoMiDoraStyleScreen extends StatelessWidget {
  const SkoMiDoraStyleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SkoMiDora Style Enhancements'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            UIUXEnhancements.fadeTransition(
              context,
              UIUXEnhancements.animatedButton(
                label: 'Click Me',
                onPressed: () {
                  // Handle button press
                },
                color: Colors.red,
                textColor: Colors.white,
                backgroundColor: Colors.red,
              ),
            ),
            const SizedBox(height: 20),
            UIUXEnhancements.animatedButton(
              label: 'Next',
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const NextScreen(),
                  ),
                );
              },
              color: Colors.green,
              textColor: Colors.white,
              backgroundColor: Colors.green,
            ),
          ],
        ),
      ),
    );
  }
}
class NextScreen extends StatelessWidget {
  const NextScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Next Screen'),
      ),
      body: const Center(
        child: Text(
          'This is the next screen',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
