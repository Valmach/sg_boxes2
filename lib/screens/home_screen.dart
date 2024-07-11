import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

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
          style: CommonTheme.appBarTheme.titleTextStyle,
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
                  'Shoe Categories',
                  '/shoe_category',
                  Icons.category,
                ),
                _buildCircularButton(
                  context,
                  'SkoDrobe',
                  '/image',
                  Icons.image,
                ),
                _buildCircularButton(
                  context,
                  'Fash Advisor',
                  '/chat',
                  Icons.chat,
                ),
                _buildCircularButton(
                  context,
                  'Custom Paint',
                  '/customize_paint',
                  Icons.brush,
                ),
                _buildCircularButton(
                  context,
                  'Shop',
                  '/shopping',
                  Icons.shopping_bag,
                ),
                _buildCircularButton(
                  context,
                  'Trending',
                  '/trending',
                  Icons.trending_up,
                ),
                _buildCircularButton(
                  context,
                  'OMG!',
                  '/omg',
                  Icons.star,
                ),
                _buildCircularButton(
                  context,
                  'AIoT Things',
                  '/needful_things',
                  Icons.build,
                ),
                _buildCircularButton(
                  context,
                  'Earth',
                  '/earth',
                  Icons.public,
                  textStyle: const TextStyle(
                    fontSize: 12,
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
        selectedLabelStyle: CommonTheme.bottomNavBarTheme.selectedLabelStyle,
        unselectedLabelStyle: CommonTheme.bottomNavBarTheme.unselectedLabelStyle,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.inventory, size: 28), // Changed to shoebox icon
            label: 'Boxies',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.bluetooth, size: 28, color: Colors.blue),
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
              Navigator.pushNamed(context, '/welcome'); // Changed to navigate to WelcomeScreen
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

  Widget _buildCircularButton(BuildContext context, String text, String route, IconData icon, {TextStyle? textStyle}) {
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
              Icon(icon, size: 30, color: CommonTheme.secondaryColor),
              const SizedBox(height: 5),
              Text(
                text,
                style: textStyle ?? CommonTheme.buttonTextStyle,
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
