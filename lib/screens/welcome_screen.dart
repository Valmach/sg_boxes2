import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
// Replace with the correct path

class HomeScreen extends StatelessWidget {
  final String title;

  const HomeScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(
          title,
          style: CommonTheme.appBarTheme.titleTextStyle?.copyWith(
            fontWeight: FontWeight.normal,
            fontSize: 28, // Sharper text by increasing the font size
          ),
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Stack(
        children: [
          Positioned.fill(
            child: Container(
              decoration: CommonTheme.backgroundDecoration,
            ),
          ),
          Center(
            child: Wrap(
              spacing: 20.0, // Space between buttons horizontally
              runSpacing: 20.0, // Space between buttons vertically
              alignment: WrapAlignment.center,
              children: [
                _buildCircularButton(
                  context,
                  'Shoe\nCategory',
                  '/shoe_category',
                  Icons.category,
                  Colors.teal, // New color for Shoe Category icon
                ),
                _buildCircularButton(
                  context,
                  'SkoDrobe',
                  '/image',
                  Icons.image,
                  Colors.green, // Green icon color
                ),
                _buildCircularButton(
                  context,
                  'Fash\nAdvisor',
                  '/chat',
                  Icons.chat,
                  Colors.blue, // Blue icon color
                ),
                _buildCircularButton(
                  context,
                  'Custom\nPaint',
                  '/customize_paint',
                  Icons.brush,
                  Colors.orange, // Orange icon color
                ),
                _buildCircularButton(
                  context,
                  'Shop',
                  '/shopping',
                  Icons.shopping_bag,
                  Colors.purple, // Purple icon color
                ),
                _buildCircularButton(
                  context,
                  'Trending',
                  '/trending',
                  Icons.trending_up,
                  Colors.cyan, // Cyan icon color
                ),
                _buildCircularButton(
                  context,
                  'OMG!',
                  '/omg',
                  Icons.star,
                  Colors.pink, // Pink icon color
                ),
                _buildCircularButton(
                  context,
                  'AIoT\nThings',
                  '/needful_things',
                  Icons.build,
                  Colors.yellow, // Yellow icon color
                ),
                _buildCircularButton(
                  context,
                  'Earth',
                  '/earth',
                  Icons.public,
                  Colors.lime, // Lime icon color
                  textStyle: const TextStyle(
                    fontSize: 16, // Increased font size
                    color: Color(0xFF32CD32), // Vibrant earth green color
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.black, // Set the bottom navigation bar color to black
        selectedItemColor: CommonTheme.bottomNavBarTheme.selectedItemColor,
        unselectedItemColor: CommonTheme.bottomNavBarTheme.unselectedItemColor,
        selectedLabelStyle: CommonTheme.bottomNavBarTheme.selectedLabelStyle?.copyWith(
          fontWeight: FontWeight.bold,
          fontSize: 14,
        ),
        unselectedLabelStyle: CommonTheme.bottomNavBarTheme.unselectedLabelStyle?.copyWith(
          fontWeight: FontWeight.normal,
          fontSize: 12,
        ),
        showSelectedLabels: true,
        showUnselectedLabels: true,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.inventory, size: 28), // Changed to shoebox icon
            label: 'Boxies',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.bluetooth, size: 28, color: Color.fromARGB(255, 29, 152, 253)),
            label: 'Bluetooth',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.local_shipping, size: 28),
            label: 'Box Drops',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_bag, size: 28),
            label: 'Shop',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle, size: 28),
            label: 'Account',
          ),
        ],
        onTap: (index) {
          switch (index) {
            case 0:
              Navigator.pushNamed(context, '/welcome');
              break;
            case 1:
              Navigator.pushNamed(context, '/bluetooth_connection');
              break;
            case 2:
              Navigator.pushNamed(context, '/box_drops');
              break;
            case 3:
              Navigator.pushNamed(context, '/shopping');
              break;
            case 4:
              Navigator.pushNamed(context, '/account');
              break;
          }
        },
      ),
    );
  }

  Widget _buildCircularButton(BuildContext context, String text, String route, IconData icon, Color iconColor, {TextStyle? textStyle}) {
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, route);
      },
      child: Container(
        width: 100,
        height: 100,
        decoration: CommonTheme.buttonDecoration,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 30, color: iconColor),
              const SizedBox(height: 5),
              Text(
                text,
                style: textStyle ?? CommonTheme.buttonTextStyle.copyWith(
                  fontWeight: FontWeight.bold,
                  fontSize: 14,
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}