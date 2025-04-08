import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:url_launcher/url_launcher.dart';

class EarthScreen extends StatefulWidget {
  final String title;

  const EarthScreen({super.key, required this.title});

  @override
  _EarthScreenState createState() => _EarthScreenState();
}

class _EarthScreenState extends State<EarthScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
          style: CommonTheme.appBarTheme.titleTextStyle
              ?.copyWith(fontSize: 28), // Larger font size
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Our Commitment to the Planet',
                style: CommonTheme.headingTextStyle
                    ?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 20),
              const Text(
                'At SkoMiDora, we are committed to creating products and services that help save the planet. '
                'Our efforts include using sustainable materials, reducing waste, and minimizing our carbon footprint. '
                'We believe that every step counts, and we strive to make a positive impact on the environment through our actions.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
              const SizedBox(height: 20),
              Text(
                'Philanthropic Endeavors',
                style: CommonTheme.headingTextStyle
                    ?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 17),
              const Text(
                'We are deeply committed to helping the poor, displaced, and homeless people around the world. '
                'Our philanthropic efforts include providing financial support, resources, and opportunities to those in need. '
                'We partner with various organizations to ensure that our contributions make a meaningful difference.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
              const SizedBox(height: 20),
              Text(
                'Join Us in Making a Difference',
                style: CommonTheme.headingTextStyle
                    ?.copyWith(fontSize: 22), // Larger font size
              ),
              const SizedBox(height: 20),
              const Text(
                'We invite you to join us in our mission to make the world a better place. '
                'Whether through supporting our products, participating in our initiatives, or spreading awareness, '
                'your involvement can help create a positive impact on the planet and those in need.',
                style: TextStyle(
                  fontSize: 17, // Larger font size
                  color: CommonTheme.secondaryColor,
                ),
              ),
              const SizedBox(height: 20),
              const Text(
                'Designed, Developed & Built, by Valentino Massimo, Muse, B.J. Holmes',
                style: TextStyle(
                  fontSize: 16,
                  color: Color(0xFFB0B0B0), // Silver-grey color
                  fontStyle: FontStyle.italic, // Cursive font style
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              _buildSocialMediaSection(context),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        color: CommonTheme.bottomNavBarTheme.backgroundColor,
        shape: const CircularNotchedRectangle(),
        notchMargin: 8.0,
        child: Container(
          height: 60.0, // Adjusted height
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

  Widget _buildSocialMediaSection(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
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
        Wrap(
          spacing: 20.0,
          runSpacing: 20.0,
          alignment: WrapAlignment.center,
          children: [
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
            _buildSocialMediaButton(
              context,
              'Pinterest',
              'assets/images/pinterest.png', // Make sure you have the Pinterest image in your assets
              'https://www.pinterest.com',
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildSocialMediaButton(
      BuildContext context, String name, String assetPath, String url) {
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
      child: Column(
        children: [
          Image.asset(assetPath, width: 40, height: 40),
          const SizedBox(height: 5),
          Text(
            name,
            style: const TextStyle(color: Colors.white),
          ),
        ],
      ),
    );
  }
}
