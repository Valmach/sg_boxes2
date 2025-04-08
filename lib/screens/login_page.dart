import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:url_launcher/url_launcher.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  static const Color blackAccent = Colors.black;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Login',
          style: CommonTheme.appBarTitleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF1F1F1F), Color(0xFF121212)],
          ),
        ),
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Welcome Back!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white),
            ),
            const SizedBox(height: 20),
            const Text(
              'Please login with your preferred method',
              style: TextStyle(fontSize: 18, color: Colors.white),
            ),
            const SizedBox(height: 30),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildLoginIcon(
                  context,
                  Icons.account_circle,
                  Colors.blueAccent,
                  () {
                    // Handle SkoMiDora ID Login
                  },
                ),
                _buildLoginIconWithImage(
                  context,
                  'assets/images/email.png',
                  Colors.red,
                  () {
                    _launchURL('https://accounts.google.com/signup');
                  },
                ),
                _buildLoginIconWithImage(
                  context,
                  'assets/images/google.png',
                  Colors.white,
                  () {
                    _launchURL('https://accounts.google.com/signup');
                  },
                ),
              ],
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildLoginIconWithImage(
                  context,
                  'assets/images/meta.png',
                  Colors.blueAccent,
                  () {
                    _launchURL('https://www.facebook.com/r.php');
                  },
                ),
                _buildLoginIcon(
                  context,
                  Icons.fingerprint,
                  Colors.green,
                  () {
                    // Handle Biometric Login
                  },
                ),
                _buildLoginIcon(
                  context,
                  Icons.security,
                  Colors.orange,
                  () {
                    // Handle 2-Factor Authentication
                  },
                ),
              ],
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
  Widget _buildLoginIcon(BuildContext context, IconData icon, Color color, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 80,
        height: 80,
        decoration: BoxDecoration(
          color: Colors.black,
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: blackAccent.withOpacity(0.5), // Black accent color
              spreadRadius: 3,
              blurRadius: 8,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Center(
          child: Icon(icon, size: 40, color: color),
        ),
      ),
    );
  }

  Widget _buildLoginIconWithImage(BuildContext context, String imagePath, Color color, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 80,
        height: 80,
        decoration: BoxDecoration(
          color: Colors.black,
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: blackAccent.withOpacity(0.5), // Black accent color
              spreadRadius: 3,
              blurRadius: 8,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Center(
          child: Image.asset(imagePath, width: 40, height: 40, color: color),
        ),
      ),
    );
  }

  void _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}
