import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';
import 'package:sg_boxes/screens/box_details_screen.dart';

class ShoppingPage extends StatelessWidget {
  final String title;

  const ShoppingPage({super.key, required this.title});

  Future<String> _fetchBaseUrl() async {
    try {
      final jsonString = await rootBundle.loadString('assets/config.json');
      final data = jsonDecode(jsonString);
      return data['baseUrl'] ?? '';
    } catch (e) {
      throw Exception('Error loading base URL: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(title, style: CommonTheme.appBarTheme.titleTextStyle),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [CommonTheme.primaryColor, CommonTheme.secondaryColor],
          ),
        ),
        child: ListView.builder(
          itemCount: availableBoxes.length,
          itemBuilder: (context, index) {
            final box = availableBoxes[index];
            return Card(
              color: Colors.black,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8.0),
              ),
              margin: const EdgeInsets.all(10.0),
              elevation: 5.0,
              child: ListTile(
                contentPadding: const EdgeInsets.all(16.0),
                leading: ClipRRect(
                  borderRadius: BorderRadius.circular(10.0),
                  child: Image.asset(
                    box.imgAddress,
                    width: 70,
                    height: 70,
                    fit: BoxFit.cover,
                  ),
                ),
                title: Text(
                  box.name,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: CommonTheme.secondaryColor,
                  ),
                ),
                subtitle: Text(
                  box.model,
                  style: const TextStyle(
                    fontSize: 16,
                    color: Color.fromARGB(255, 119, 5, 11),
                  ),
                ),
                trailing: Text(
                  '\$${box.price.toStringAsFixed(2)}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: CommonTheme.secondaryColor,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) =>
                          BoxieDetailsScreen(boxieName: box.name),
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
