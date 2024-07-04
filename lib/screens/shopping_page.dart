/* // lib/screens/shopping_page.dart
import 'package:flutter/material.dart';
import 'package:sg_boxes/data/dummy_data.dart';

import 'data/dummy_data.dart'; // Import the dummy data

class ShoppingPage extends StatelessWidget {
  const ShoppingPage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          title,
          style: const TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Color.fromARGB(255, 185, 98, 26), // Gold color
          ),
        ),
        backgroundColor: const Color(0xFF1F1B24),
        elevation: 0,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF1f4037), Color(0xFF99f2c8)], // Dark green to light green gradient
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: ListView.builder(
          itemCount: availableBoxes.length,
          itemBuilder: (context, index) {
            final box = availableBoxes[index];
            return Card(
              margin: const EdgeInsets.all(8.0),
              child: ListTile(
                contentPadding: const EdgeInsets.all(16.0),
                leading: Image.asset(
                  box.imgAddress,
                  width: 50,
                  height: 50,
                  fit: BoxFit.cover,
                ),
                title: Text(
                  box.name,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                subtitle: Text(
                  box.model,
                  style: const TextStyle(fontSize: 16, color: Colors.grey),
                ),
                trailing: Text(
                  '\$${box.price.toStringAsFixed(2)}',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                onTap: () {
                  // Handle on-tap event if needed
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
 */