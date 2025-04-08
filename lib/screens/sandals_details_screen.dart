import 'package:flutter/material.dart';

class SandalsDetailsScreen extends StatelessWidget {
  final String title;

  const SandalsDetailsScreen({super.key, required this.title});

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
      body: const SandalsBody(),
      endDrawer: SandalsDrawer(), // Add the end drawer
    );
  }
}
class SandalsBody extends StatelessWidget {
  const SandalsBody({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFF000000), Color(0xFF8B0000)], // Black to blood-red gradient
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Sandals Drobe',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Color(0xFFFFFFFF), // White color
                shadows: [
                  Shadow(
                    blurRadius: 10.0,
                    color: Colors.black45,
                    offset: Offset(2.0, 2.0),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            _buildCircularButton(
              context,
              'Recently Worn',
              () {
                Scaffold.of(context).openEndDrawer(); // Use ScaffoldMessenger if needed
              },
              const Color(0xFF8B0000), // Blood red
              Icons.access_time,
            ),
            _buildCircularButton(
              context,
              'Return to Categories',
              () {
                Navigator.pushNamed(context, '/shoe_category');
              },
              const Color(0xFF000000), // Black
              Icons.arrow_back,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCircularButton(BuildContext context, String text, VoidCallback onTap, Color color, IconData icon) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 100,
        height: 100,
        decoration: BoxDecoration(
          color: color,
          shape: BoxShape.circle,
          border: Border.all(
            color: const Color(0xFF8B0000), // Blood-red outline
            width: 4,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.5),
              spreadRadius: 2,
              blurRadius: 5,
              offset: const Offset(2, 3),
            ),
          ],
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 30, color: Colors.white),
              const SizedBox(height: 5),
              Text(
                text,
                style: const TextStyle(
                  fontSize: 12,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class Sandal {
  final String name;
  final String imagePath;
  final String lastWorn;
  final String wornWith;
  final String season;
  final String purchaseDate;
  final String occasion;

  const Sandal({
    required this.name,
    required this.imagePath,
    required this.lastWorn,
    required this.wornWith,
    required this.season,
    required this.purchaseDate,
    required this.occasion,
  });
}

class SandalsDrawer extends StatelessWidget {
  SandalsDrawer({super.key});
  final List<Sandal> sandals = [
    const Sandal(
      name: 'Birkenstock Arizona',
      imagePath: 'assets/images/birkenstock_arizona.png',
      lastWorn: '2024-05-18',
      wornWith: 'Shorts, T-shirt',
      season: 'Summer',
      purchaseDate: '2023-06-10',
      occasion: 'Beach',
    ),
    const Sandal(
      name: 'Teva Original Universal',
      imagePath: 'assets/images/teva_original_universal.png',
      lastWorn: '2024-04-22',
      wornWith: 'Jeans, Blouse',
      season: 'Spring',
      purchaseDate: '2022-04-15',
      occasion: 'Casual',
    ),
    // Add more sandals as needed
  ];
  @override
  Widget build(BuildContext context) {
    return Container(); // Implement your drawer UI here
  }
}