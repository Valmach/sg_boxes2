import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/bluetooth_connection_screen.dart';
import 'package:sg_boxes/screens/boxie_details_screen.dart';
import 'package:sg_boxes/widget/boxie_details_screen.dart';

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
      {'name': 'Bluetooth', 'image': 'assets/images/bluetooth.png'},
      {'name': 'Your SkoBoxes', 'image': 'assets/images/manolo_sangue.png'},
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
            colors: [
              Color(0xFF000000),
              Color(0xFF8B0000)
            ], // Black to blood-red gradient
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
                    fontWeight: FontWeight.normal,
                    color: Color(0xFF000000),
                  ),
                ),
                onTap: () {
                  if (item['name'] == 'Bluetooth') {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const BluetoothConnectionScreen(),
                      ),
                    );
                  } else if (item['name'] == 'Your SkoBoxes') {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => YourSkoBoxesScreen(),
                      ),
                    );
                  }
                },
              ),
            );
          },
        ),
      ),
    );
  }
}

class YourSkoBoxesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Your SkoBoxes',
          style: CommonTheme.appBarTitleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            buildBoxieCard(context, 'Nite Furoi',
                'assets/images/nite_furoi.png', 'Connected'),
            buildBoxieCard(context, 'Hot Lips', 'assets/images/hot_lips.png',
                'Not Connected'),
            buildBoxieCard(context, 'Sugar Candy',
                'assets/images/sugar_candy.png', 'Connected'),
            const SizedBox(height: 20),
            Center(
              child: GestureDetector(
                onTap: () {
                  // Handle Add Boxie action
                },
                child: Container(
                  width: 100,
                  height: 100,
                  decoration: CommonTheme.buttonDecoration,
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.add,
                            size: 30, color: CommonTheme.secondaryColor),
                        const SizedBox(height: 5),
                        Text(
                          'Add Boxie',
                          style: CommonTheme.buttonTextStyle,
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildBoxieCard(BuildContext context, String boxieName,
      String imagePath, String connectionStatus) {
    return Card(
      margin: const EdgeInsets.all(8.0),
      child: ListTile(
        contentPadding: const EdgeInsets.all(16.0),
        leading: Image.asset(
          imagePath,
          width: 50,
          height: 50,
          fit: BoxFit.cover,
        ),
        title: Text(
          boxieName,
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.normal,
            color: Color(0xFF000000),
          ),
        ),
        subtitle: Row(
          children: [
            Icon(Icons.wifi,
                color: connectionStatus == 'Connected'
                    ? Colors.green
                    : Colors.red),
            const SizedBox(width: 5),
            Text(
              connectionStatus,
              style: const TextStyle(
                fontSize: 14,
                color: Colors.black54,
              ),
            ),
          ],
        ),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => BoxieDetailsScreen(boxieName: boxieName),
            ),
          );
        },
      ),
    );
  }
}
