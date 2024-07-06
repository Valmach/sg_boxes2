/* import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/box_detail_screen.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';
import 'package:sg_boxes/models/box_model.dart';

class OMGPage extends StatelessWidget {
  const OMGPage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    // Assuming the first few items are the custom-made options
    final customMadeBoxes = availableBoxes.take(5).toList();

    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        backgroundColor: const Color.fromARGB(232, 114, 107, 122),
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
          itemCount: customMadeBoxes.length,
          itemBuilder: (context, index) {
            final box = customMadeBoxes[index];
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
                  style: const TextStyle(fontSize: 16, color: Color.fromARGB(255, 119, 5, 11)),
                ),
                trailing: Text(
                  '\$${box.price.toStringAsFixed(2)}',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.normal),
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => BoxDetailScreen(box: box),
                    ),
                  );
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