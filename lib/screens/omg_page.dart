import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';
import 'package:sg_boxes/screens/box_detail_screen.dart';
import 'common_theme.dart';

class OMGPage extends StatelessWidget {
  final String title;

  const OMGPage({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    final customMadeBoxes = availableBoxes.take(8).toList(); // Increase the number to show more boxes

    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(title, style: CommonTheme.appBarTheme.titleTextStyle),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
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
