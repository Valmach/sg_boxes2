import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class ShoeCategory extends StatelessWidget {
  final String title;

  const ShoeCategory({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CommonTheme.primaryColor,
      appBar: AppBar(
        title: Text(
          title,
          style: CommonTheme.appBarTitleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Stack(
        children: [
          Positioned.fill(
            child: Container(
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/images/background.png'),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          Center(
            child: Wrap(
              spacing: 30.0, // Increased space between buttons horizontally
              runSpacing: 30.0, // Increased space between buttons vertically
              alignment: WrapAlignment.center,
              children: [
                _buildCircularButton(
                  context,
                  'Sneakers',
                  '/sneakers_details',
                  'assets/images/sneakers.png',
                ),
                _buildCircularButton(
                  context,
                  'Boots',
                  '/boots_details',
                  'assets/images/boots.png',
                ),
                _buildCircularButton(
                  context,
                  'Heels',
                  '/heels_details',
                  'assets/images/heels.png',
                ),
                _buildCircularButton(
                  context,
                  'Sandals',
                  '/sandals_details',
                  'assets/images/sandals.png',
                ),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: CommonTheme.primaryColor,
        selectedItemColor: CommonTheme.secondaryColor,
        unselectedItemColor: CommonTheme.accentColor,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home, size: 28),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.bluetooth, size: 28),
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
              Navigator.pushNamed(context, '/home');
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
  Widget _buildCircularButton(BuildContext context, String text, String route, String imagePath) {
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, route);
      },
      child: Container(
        width: 120, // Increased width for larger circles
        height: 120, // Increased height for larger circles
        decoration: CommonTheme.buttonDecoration,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                imagePath,
                width: 60, // Adjusted image size to fit new circle size
                height: 60,
                fit: BoxFit.cover,
              ),
              const SizedBox(height: 5),
              Text(
                text,
                style: Theme.of(context).textTheme.labelLarge,
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}