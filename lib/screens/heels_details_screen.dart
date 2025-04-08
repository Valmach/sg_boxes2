import 'package:flutter/material.dart';

class HeelsDetailsScreen extends StatelessWidget {
  final String title;

  const HeelsDetailsScreen({super.key, required this.title});

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
      body: const HeelsBody(),
      endDrawer: HeelsDrawer(), // Add the end drawer
    );
  }
}
class HeelsBody extends StatelessWidget {
  const HeelsBody({super.key});

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
              'Heels Drobe',
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

class HeelsDrawer extends StatelessWidget {
  HeelsDrawer({super.key});
  final List<Heel> heels = [
    Heel(
      name: 'Stiletto Heels',
      imagePath: 'assets/images/stiletto_heels.png',
      lastWorn: '2024-05-18',
      wornWith: 'Dress, Skirt',
      season: 'Summer',
      purchaseDate: '2023-07-10',
      occasion: 'Clubbing',
    ),
    Heel(
      name: 'Block Heels',
      imagePath: 'assets/images/block_heels.png',
      lastWorn: '2024-04-22',
      wornWith: 'Jeans, Blouse',
      season: 'Spring',
      purchaseDate: '2023-04-15',
      occasion: 'Wedding',
    ),
    // Add more heels as needed

  ];  @override  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        color: const Color(0xFF000000), // Black background for Drawer
        child: ListView.builder(
          itemCount: heels.length,
          itemBuilder: (context, index) {
            final heel = heels[index];
            return ListTile(
              contentPadding: const EdgeInsets.all(16.0),
              title: Text(
                heel.name,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFFFFFFFF), // White color
                ),
              ),
              leading: Image.asset(
                heel.imagePath,
                width: 50,
                height: 50,
              ),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Last Worn: ${heel.lastWorn}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Worn With: ${heel.wornWith}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Season: ${heel.season}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Purchase Date: ${heel.purchaseDate}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                  Text(
                    'Occasion: ${heel.occasion}',
                    style: const TextStyle(color: Colors.white70),
                  ),
                ],
              ),
              trailing: const Icon(Icons.arrow_forward_ios, color: Color(0xFFFFFFFF)), // White color for icon
              onTap: () {
                // Handle tap on heel item
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Selected: ${heel.name}')),
                );
              },
            );
          },
        ),
      ),
    );
  }
}

class Heel {
  final String name;
  final String imagePath;
  final String lastWorn;
  final String wornWith;
  final String season;
  final String purchaseDate;
  final String occasion;

  const Heel({
    required this.name,
    required this.imagePath,
    required this.lastWorn,
    required this.wornWith,
    required this.season,
    required this.purchaseDate,
    required this.occasion,
  });
}
