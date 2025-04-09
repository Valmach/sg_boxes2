import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';
<<<<<<< HEAD
import 'package:sg_boxes/screens/box_details_screen.dart';
=======
import 'package:sg_boxes/screens/box_detail_screen.dart';
import 'package:sg_boxes/screens/webview_page.dart';
>>>>>>> feature-BLE

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
<<<<<<< HEAD
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
=======
      body: Column(
        children: [
          ElevatedButton(
            onPressed: () async {
              try {
                final baseUrl = await _fetchBaseUrl(); // Fetch the URL dynamically
                final url = '$baseUrl/index.html';

                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => WebViewPage(url: url),
                  ),
                );
              } catch (e) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Failed to load the page: $e')),
                );
              }
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color.fromARGB(255, 109, 103, 103), // Button color
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
>>>>>>> feature-BLE
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8.0),
              ),
<<<<<<< HEAD
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
                      builder: (context) => BoxieDetailsScreen(boxieName: box.name), // Corrected line.
=======
            ),
            child: const Text(
              'Shop Your Boxies',
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            child: Container(
              decoration: CommonTheme.backgroundDecoration,
              child: ListView.builder(
                itemCount: availableBoxes.length,
                itemBuilder: (context, index) {
                  final box = availableBoxes[index];
                  return Card(
                    color: Colors.black,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0),
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
                          color: Colors.white,
                        ),
                      ),
                      subtitle: Text(
                        box.model,
                        style: const TextStyle(
                          fontSize: 16,
                          color: Colors.white,
                        ),
                      ),
                      trailing: Text(
                        '\$${box.price.toStringAsFixed(2)}',
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => BoxDetailScreen(box: box),
                          ),
                        );
                      },
>>>>>>> feature-BLE
                    ),
                  );
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}