import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/360_viewer_screen.dart';
import 'package:sg_boxes/screens/ai_recommendations_screen.dart';
import 'package:sg_boxes/screens/customization_screen.dart'; // Import for customization options
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/data/dummy_data.dart';

class EnhancedShoppingScreen extends StatelessWidget {
  final String title;

  const EnhancedShoppingScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(title, style: CommonTheme.appBarTheme.titleTextStyle),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Column(
        children: [
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
                      trailing: Column(
                        children: [
                          Text(
                            '\$${box.price.toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          IconButton(
                            icon: const Icon(Icons.auto_fix_high),
                            color: Colors.white,
                            onPressed: () {
                              // Navigate to the Customization screen
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => CustomizationScreen(box: box, title: '',),
                                ),
                              );
                            },
                          ),
                        ],
                      ),
                      onTap: () {
                        // Navigate to the 360 Viewer screen when the item is tapped
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => Viewer360Screen(imagePath: box.imgAddress),
                          ),
                        );
                      },
                      onLongPress: () {
                        // Show AI Recommendations on long press
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => AIRecommendationsScreen(box: box),
                          ),
                        );
                      },
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
