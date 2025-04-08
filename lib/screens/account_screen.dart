import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/screens/welcome_screen.dart';
import 'package:url_launcher/url_launcher.dart';

class AccountScreen extends StatelessWidget {
  const AccountScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Account',
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
            colors: [Color(0xFFFFFFFF), Color(0xFFF0F0F0)],
          ),
        ),
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            _buildAccountCard(
              context,
              'My Draft Box',
              Icons.inbox,
              Colors.blue,
              () {
                // Handle My Draft Box navigation
              },
            ),
            const SizedBox(height: 10),
            _buildAccountCard(
              context,
              'My Orders',
              Icons.receipt_long,
              Colors.green,
              () {
                // Handle My Orders navigation
              },
            ),
            const SizedBox(height: 10),
            _buildAccountCard(
              context,
              'Send Feedback',
              Icons.feedback,
              Colors.orange,
              () {
                // Handle Send Feedback navigation
              },
            ),
            const SizedBox(height: 10),
            _buildAccountCard(
              context,
              'Settings',
              Icons.settings,
              Colors.grey,
              () {
                // Handle Settings navigation
              },
            ),
            const SizedBox(height: 10),
            _buildAccountCard(
              context,
              'Login',
              Icons.login,
              Colors.purple,
              () {
                Navigator.pushNamed(context, '/welcome');
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showModalBottomSheet(
            context: context,
            builder: (context) {
              return _buildSocialMediaDrawer(context);
            },
          );
        },
        backgroundColor: CommonTheme.primaryColor,
        child: const Icon(Icons.add, color: Colors.white),
      ),
      bottomNavigationBar: BottomAppBar(
        color: CommonTheme.bottomNavBarBackgroundColor,
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
  }  Widget _buildAccountCard(BuildContext context, String title, IconData icon, Color iconColor, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        color: CommonTheme.primaryColor,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            children: [
              Icon(icon, color: iconColor, size: 40),
              const SizedBox(width: 20),
              Text(
                title,
                style: CommonTheme.headingTextStyle.copyWith(fontSize: 16, fontWeight: FontWeight.normal),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSocialMediaDrawer(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      color: CommonTheme.primaryColor,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            'Follow Us',
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 10),
          _buildSocialMediaButton(
            context,
            'Meta',
            'assets/images/meta.png',
            'https://www.facebook.com',
          ),
          _buildSocialMediaButton(
            context,
            'TikTok',
            'assets/images/tiktok.png',
            'https://www.tiktok.com',
          ),
          _buildSocialMediaButton(
            context,
            'Instagram',
            'assets/images/instagram.png',
            'https://www.instagram.com',
          ),
          _buildSocialMediaButton(
            context,
            'LinkedIn',
            'assets/images/linkedin.png',
            'https://www.linkedin.com',
          ),
          _buildSocialMediaButton(
            context,
            'Twitter',
            'assets/images/twitter.png',
            'https://www.twitter.com',
          ),
          _buildSocialMediaButton(
            context,
            'YouTube',
            'assets/images/youtube.png',
            'https://www.youtube.com',
          ),
        ],
      ),
    );
  }

  Widget _buildSocialMediaButton(BuildContext context, String name, String assetPath, String url) {
    return GestureDetector(
      onTap: () async {
        if (await canLaunch(url)) {
          await launch(url);
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Could not launch $url')),
          );
        }
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8.0),
        child: Row(
          children: [
            Image.asset(assetPath, width: 40, height: 40),
            const SizedBox(width: 10),
            Text(
              name,
              style: const TextStyle(color: Colors.white, fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
