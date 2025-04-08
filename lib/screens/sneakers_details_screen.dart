import 'package:flutter/material.dart';

class SneakersDetailsScreen extends StatelessWidget {
  final String title;

  const SneakersDetailsScreen({super.key, required this.title});

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
      body: const SneakersBody(),
      endDrawer: SneakersDrawer(), // Add the end drawer
    );
  }
}
class SneakersBody extends StatelessWidget {
  const SneakersBody({super.key});

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
              'Sneakers Drobe',
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
                Scaffold.of(context).openEndDrawer();
              },
              const Color(0xFF000000), // Black
              Icons.access_time,
            ),
            const SizedBox(height: 20),
            _buildCircularButton(
              context,
              'Return to Categories',
              () {
                Navigator.pushNamed(context, '/shoe_category'); // Corrected route name
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

class SneakersDrawer extends StatelessWidget {
  SneakersDrawer({super.key});
  final List<Sneaker> sneakers = [
    Sneaker(
      name: 'Air Jordan 1',
      imagePath: 'assets/images/air_jordan_1.png',
      lastWorn: '2024-05-18',
      wornWith: 'Jeans, Jacket',
      season: 'Spring',
      purchaseDate: '2023-03-10',
      occasion: 'Casual',
    ),
    Sneaker(
      name: 'Nike Air Max',
      imagePath: 'assets/images/nike_air_max.png',
      lastWorn: '2024-04-22',
      wornWith: 'Shorts, T-shirt',
      season: 'Summer',
      purchaseDate: '2022-07-15',
      occasion: 'Workout',
    ),
    // Add more sneakers as needed
  ];
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        color: const Color(0xFF000000), // Black background for Drawer
        child: ListView.builder(
          itemCount: sneakers.length,
          itemBuilder: (context, index) {
            final sneaker = sneakers[index];
            return ListTile(
              contentPadding: const EdgeInsets.all(16.0),
              title: Text(
                sneaker.name,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFFFFFFFF), // White color
                ),
              ),
              leading: Image.asset(
                sneaker.imagePath,
                width: 50,
                height: 50,
              ),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Last Worn: ${sneaker.lastWorn}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Worn With: ${sneaker.wornWith}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Season: ${sneaker.season}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Purchase Date: ${sneaker.purchaseDate}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Occasion: ${sneaker.occasion}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                ],
              ),
              trailing: const Icon(Icons.arrow_forward_ios, color: Color(0xFFFFFFFF)), // White color for icon
              onTap: () {
                // Handle tap on sneaker item
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Selected: ${sneaker.name}')),
                );
              },
            );
          },
        ),
      ),
    );

  }}class Sneaker {
  final String name;  final String imagePath;
  final String lastWorn;
  final String wornWith;
  final String season;
  final String purchaseDate;
  final String occasion;

  const Sneaker({
    required this.name,
    required this.imagePath,
    required this.lastWorn,
    required this.wornWith,
    required this.season,
    required this.purchaseDate,
    required this.occasion,
  });
}
