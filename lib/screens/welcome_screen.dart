import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Welcome',
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
            const Text(
              'Welcome',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white),
            ),
            const SizedBox(height: 10),
            const Text(
              'Please login with your SkoMiDora ID',
              style: TextStyle(fontSize: 18, color: Colors.white),
            ),
            const SizedBox(height: 20),
            Center(
              child: GestureDetector(
                onTap: () {
                  Navigator.pushNamed(context, '/login'); // Navigate to LoginPage
                },
                child: Container(
                  width: 200,
                  height: 60,
                  decoration: CommonTheme.buttonDecoration,
                  child: const Center(
                    child: Text(
                      'Login',
                      style: CommonTheme.buttonTextStyle,
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 30),
            const Text(
              'Contact and help',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
            const SizedBox(height: 10),
            const Row(
              children: [
                Icon(Icons.help, color: Colors.white),
                SizedBox(width: 5),
                Text(
                  'Privacy notice',
                  style: TextStyle(fontSize: 16, color: Colors.white),
                ),
              ],
            ),
            const SizedBox(height: 20),
            GestureDetector(
              onTap: () {
                // Handle link tap
              },
              child: const Text(
                'Do not sell or share my personal information',
                style: TextStyle(fontSize: 16, color: Colors.blue),
              ),
            ),
            const SizedBox(height: 20),
            const Text(
              'California Privacy',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
            const SizedBox(height: 20),
            const Text(
              'Legal',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
            const SizedBox(height: 20),
            const Text(
              'License rights',
              style: TextStyle(fontSize: 16, color: Colors.white),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        color: CommonTheme.bottomNavBarTheme.backgroundColor,
        shape: const CircularNotchedRectangle(),
        notchMargin: 8.0,
        child: Container(
          height: 60.0,
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                icon: const Icon(Icons.home),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/home');
                },
              ),
              IconButton(
                icon: const Icon(Icons.local_shipping),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/box_drops');
                },
              ),
              IconButton(
                icon: const Icon(Icons.shopping_bag),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/shopping');
                },
              ),
              IconButton(
                icon: const Icon(Icons.account_circle),
                color: CommonTheme.secondaryColor,
                onPressed: () {
                  Navigator.pushNamed(context, '/account');
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
