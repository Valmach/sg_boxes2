import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';
import 'package:sg_boxes/screens/box_details_screen.dart';

class TrendingPage extends StatelessWidget {
  final String title;

  const TrendingPage({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    final trendingBoxes = availableBoxes.take(8).toList(); // Adjust as needed

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
            colors: [Color(0xFF2C3E50), Color(0xFF000000)],
          ),
        ),
        child: ListView.builder(
          itemCount: trendingBoxes.length,
          itemBuilder: (context, index) {
            final box = trendingBoxes[index];
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
                      builder: (context) => BoxieDetailsScreen(boxieName: box.name), // Corrected Line.
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