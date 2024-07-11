import 'package:flutter/material.dart';
import 'package:sg_boxes/widget/chat_widget.dart';

class ImageScreen extends StatelessWidget {
  final List<Map<String, String>> shoeboxes = [
    {
      'imagePath': 'assets/images/addidas_homme_blanc_hvite.274.jpg',
      'model': 'Adidas Homme Blanc',
      'description': 'White Adidas shoes for men.',
    },
    {
      'imagePath': 'assets/images/addidas_homme_violet.277.jpg',
      'model': 'Adidas Homme Violet',
      'description': 'Purple Adidas shoes for men.',
    },
    {
      'imagePath': 'assets/images/skoMiDora.io_terrazoblue.jpg',
      'model': 'SkoMiDora Terrazoblue',
      'description': 'Blue terrazzo pattern shoes.',
    },
    {
      'imagePath': 'assets/images/SkoMiDora_Jimmy_Choo.383.jpg',
      'model': 'SkoMiDora Jimmy Choo',
      'description': 'High fashion Jimmy Choo shoes.',
    },
    {
      'imagePath': 'assets/images/varnish_wood_box.jpg',
      'model': 'Varnish Wood Box',
      'description': 'Elegant varnished wood shoebox.',
    },
    {
      'imagePath': 'assets/images/dark_ocean.408.png',
      'model': 'Jessica Chaistain',
      'description': 'Jessica Chaistain shoes.',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your SkoDrobe Closet'),
      ),
      body: ListView.builder(
        itemCount: shoeboxes.length,
        itemBuilder: (BuildContext context, int index) {
          final shoebox = shoeboxes[index];
          return Card(
            color: Colors.black, // Set card color to black
            margin: const EdgeInsets.all(8.0),
            child: ListTile(
              contentPadding: const EdgeInsets.all(8.0),
              title: Image.asset(
                shoebox['imagePath']!,
                width: 300,
                height: 300,
                fit: BoxFit.cover,
              ),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    shoebox['model']!,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white, // Change text color to white
                    ),
                  ),
                  Text(
                    shoebox['description']!,
                    style: const TextStyle(
                      color: Colors.white, // Change text color to white
                    ),
                  ),
                ],
              ),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ChatScreen(
                      title: 'Fashion Chat',
                      selectedShoe: shoebox['model']!,
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}
