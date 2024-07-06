import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';

class BoxListScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Available Boxes'),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
      ),
      body: ListView.builder(
        itemCount: availableBoxes.length,
        itemBuilder: (context, index) {
          final box = availableBoxes[index];
          return ListTile(
            leading: Image.asset(
              box.imgAddress,
              width: 50,  // Smaller width
              height: 50, // Smaller height
              fit: BoxFit.cover,
            ),
            title: Text(
              box.name,
              style: const TextStyle(color: CommonTheme.secondaryColor),
            ),
            subtitle: Text(
              box.model,
              style: const TextStyle(color: CommonTheme.accentColor),
            ),
            trailing: Text(
              '\$${box.price.toStringAsFixed(2)}',
              style: const TextStyle(color: CommonTheme.secondaryColor),
            ),
          );
        },
      ),
    );
  }
}
