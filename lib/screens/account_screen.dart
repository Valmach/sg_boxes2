import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:google_sign_in/google_sign_in.dart'; // Import for Google Sign-In

class AccountScreen extends StatefulWidget {
  const AccountScreen({super.key});

  @override
  State<AccountScreen> createState() => _AccountScreenState();
}

class _AccountScreenState extends State<AccountScreen> {
  bool _isCalendarConnected = false; // Example state

  Future<void> _connectGoogleCalendar(BuildContext context) async {
    try {
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
      if (googleUser != null) {
        final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
        final String? accessToken = googleAuth.accessToken;
        // Send this accessToken to your backend to exchange for Google Calendar API tokens
        print('Google Access Token: $accessToken');
        // Update UI to reflect connection
        setState(() {
          _isCalendarConnected = true;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Google Calendar connected!')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to connect to Google Calendar.')),
        );
      }
    } catch (error) {
      print('Error connecting to Google Calendar: $error');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error connecting: $error')),
      );
    }
  }

  Future<void> _disconnectGoogleCalendar(BuildContext context) async {
    // Implement your backend logic to revoke tokens and disconnect
    setState(() {
      _isCalendarConnected = false;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Google Calendar disconnected.')),
    );
  }

  Widget _buildCalendarConnectionCard(BuildContext context) {
    return Card(
      color: CommonTheme.primaryColor,
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          children: [
            const Icon(Icons.calendar_today, color: Colors.redAccent, size: 40),
            const SizedBox(width: 20),
            Expanded(
              child: Text(
                'Events Calendar',
                style: CommonTheme.headingTextStyle.copyWith(fontSize: 16, fontWeight: FontWeight.normal),
              ),
            ),
            if (_isCalendarConnected)
              ElevatedButton(
                onPressed: () => _disconnectGoogleCalendar(context),
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                child: const Text('Disconnect'),
              )
            else
              ElevatedButton(
                onPressed: () => _connectGoogleCalendar(context),
                style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
                child: const Text('Connect'),
              ),
          ],
        ),
      ),
    );
  }

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
              'Community',
              Icons.group,
              Colors.orange,
              () {
                _launchCommunityPage(context);
              },
            ),
            const SizedBox(height: 10),
            _buildAccountCard(
              context,
              'Settings',
              Icons.settings,
              Colors.grey,
              () {
                // Handle Settings navigation (if you have other settings here)
                // For now, we'll keep the Calendar option on this screen
                // If you plan more settings, you might navigate to a new screen later
                print('Navigating to Settings (if any)');
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
            const SizedBox(height: 20), // Add some spacing
            _buildCalendarConnectionCard(context), // Add the calendar card here
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
  }

  Widget _buildAccountCard(BuildContext context, String title, IconData icon, Color iconColor, VoidCallback onTap) {
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
            'Pinterest',
            'assets/images/pinterest.png', // Make sure you have the Pinterest image
            'https://www.pinterest.com',
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

  void _launchCommunityPage(BuildContext context) async {
    const url = 'https://www.skomidora.com/community'; // Replace with actual community URL
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Could not launch $url')),
      );
    }
  }
}