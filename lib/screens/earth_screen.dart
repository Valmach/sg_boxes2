import 'package:flutter/material.dart';
import '../common theme/common_theme.dart';

class EarthScreen extends StatefulWidget {
  final String title;

  const EarthScreen({super.key, required this.title});

  @override
  _EarthScreenState createState() => _EarthScreenState();
}

class _EarthScreenState extends State<EarthScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
          style: CommonTheme.appBarTheme.titleTextStyle?.copyWith(fontSize: 28), // Larger font size
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Our Commitment to the Planet',
                style: CommonTheme.headingTextStyle?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 20),
              const Text(
                'At SkoMiDora, we are committed to creating products and services that help save the planet. '
                    'Our efforts include using sustainable materials, reducing waste, and minimizing our carbon footprint. '
                    'We believe that every step counts, and we strive to make a positive impact on the environment through our actions.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
              const SizedBox(height: 20),
              Text(
                'Philanthropic Endeavors',
                style: CommonTheme.headingTextStyle?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 17),
              const Text(
                'We are deeply committed to helping the poor, displaced, and homeless people around the world. '
                    'Our philanthropic efforts include providing financial support, resources, and opportunities to those in need. '
                    'We partner with various organizations to ensure that our contributions make a meaningful difference.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
              const SizedBox(height: 20),
              Text(
                'Join Us in Making a Difference',
                style: CommonTheme.headingTextStyle?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 20),
              const Text(
                'We invite you to join us in our mission to make the world a better place. '
                    'Whether through supporting our products, participating in our initiatives, or spreading awareness, '
                    'your involvement can help create a positive impact on the planet and those in need.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        color: CommonTheme.bottomNavBarTheme.backgroundColor,
        shape: const CircularNotchedRectangle(),
        notchMargin: 8.0,
        child: Container(
          height: 60.0, // Adjusted height
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                icon: const Icon(Icons.home),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/home');
                },
              ),
              IconButton(
                icon: const Icon(Icons.local_shipping),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/box_drops');
                },
              ),
              IconButton(
                icon: const Icon(Icons.shopping_bag),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/shopping');
                },
              ),
              IconButton(
                icon: const Icon(Icons.account_circle),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  // Handle Account navigation
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
