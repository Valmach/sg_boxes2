import 'package:flutter/material.dart';

class NeedfulThingsScreen extends StatelessWidget {
  final String title;

  const NeedfulThingsScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    final List<Map<String, String>> items = [
      {'name': 'Box Accessories', 'image': 'assets/images/accessories.png'},
      {'name': 'Bits and Bobs', 'image': 'assets/images/bits_bobs.png'},
      {'name': 'Tools', 'image': 'assets/images/tools.png'},
      {'name': 'Network', 'image': 'assets/images/espressif_logo.png'},
      

    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(
          title,
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.normal,
            color: Color(0xFFFFFFFF), // White color
          ),
        ),
        backgroundColor: const Color(0xFF000000), // Black color
        elevation: 0,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF000000), Color(0xFF8B0000)], // Black to blood-red gradient
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            final item = items[index];
            return Card(
              margin: const EdgeInsets.all(8.0),
              child: ListTile(
                contentPadding: const EdgeInsets.all(16.0),
                leading: Image.asset(
                  item['image']!,
                  width: 50,
                  height: 50,
                  fit: BoxFit.cover,
                ),
                title: Text(
                  item['name']!,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF000000),
                  ),
                ),
                onTap: () {
                  // Handle the onTap action if needed
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
