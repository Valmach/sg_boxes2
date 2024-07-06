import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class DetailedPaintScreen extends StatefulWidget {
  final String title;
  final Color baseColor;

  const DetailedPaintScreen({super.key, required this.title, required this.baseColor});

  @override
  _DetailedPaintScreenState createState() => _DetailedPaintScreenState();
}

class _DetailedPaintScreenState extends State<DetailedPaintScreen> {
  List<Color> recommendedColors = [];

  @override
  void initState() {
    super.initState();
    recommendedColors = _getRecommendedColors(); // Initialize with recommended colors
  }

  List<Color> _getRecommendedColors() {
    // Simulating AI-based recommendations. This should be replaced with actual AI logic.
    return [
      Colors.blue,
      Colors.green,
      Colors.purple,
      const Color(0xFF8B0000), // Blood Red
      const Color(0xFFC8A2C8), // Lilac
    ];
  }

  @override
  Widget build(BuildContext context) {
    final List<String> shoeboxImages = [
      'assets/images/shoebox1.png',
      'assets/images/shoebox2.png',
      'assets/images/shoebox3.png',
      'assets/images/shoebox4.png',
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
          style: CommonTheme.appBarTheme.titleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: CommonTheme.backgroundDecoration,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Customize Your Shoebox',
              style: CommonTheme.headingTextStyle,
            ),
            const SizedBox(height: 10), // Reduced height for smaller spacing
            CarouselSlider(
              options: CarouselOptions(
                height: 150.0, // Reduced height for smaller images
                enlargeCenterPage: true,
                autoPlay: true,
                autoPlayInterval: const Duration(seconds: 3),
              ),
              items: shoeboxImages.map((imagePath) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                      width: MediaQuery.of(context).size.width,
                      margin: const EdgeInsets.symmetric(horizontal: 5.0),
                      decoration: const BoxDecoration(
                        color: Colors.black26,
                      ),
                      child: Image.asset(
                        imagePath,
                        fit: BoxFit.cover,
                      ),
                    );
                  },
                );
              }).toList(),
            ),
            const SizedBox(height: 10), // Reduced height for smaller spacing
            const Text(
              'Recommended Colors and Patterns',
              style: CommonTheme.headingTextStyle,
            ),
            const SizedBox(height: 10), // Reduced height for smaller spacing
            Expanded(
              child: GridView.count(
                crossAxisCount: 6, // Increased number of columns for smaller swatches
                children: recommendedColors.map((color) {
                  return _buildColorPatternBox(context, color, 'Recommended Pattern', 'Use: AI Recommendation');
                }).toList(),
              ),
            ),
            const SizedBox(height: 10), // Reduced height for smaller spacing
            const Text(
              'Available Colors and Patterns',
              style: CommonTheme.headingTextStyle,
            ),
            const SizedBox(height: 10), // Reduced height for smaller spacing
            Expanded(
              child: GridView.count(
                crossAxisCount: 6, // Increased number of columns for smaller swatches
                children: [
                  _buildColorPatternBox(context, Colors.red, 'Red Pattern', 'Hex: #FF0000\nUse: Passion, Energy'),
                  _buildColorPatternBox(context, Colors.blue, 'Blue Pattern', 'Hex: #0000FF\nUse: Calm, Stability'),
                  _buildColorPatternBox(context, Colors.green, 'Green Pattern', 'Hex: #00FF00\nUse: Growth, Harmony'),
                  _buildColorPatternBox(context, Colors.yellow, 'Yellow Pattern', 'Hex: #FFFF00\nUse: Happiness, Energy'),
                  _buildColorPatternBox(context, Colors.orange, 'Orange Pattern', 'Hex: #FFA500\nUse: Enthusiasm, Creativity'),
                  _buildColorPatternBox(context, Colors.purple, 'Purple Pattern', 'Hex: #800080\nUse: Royalty, Luxury'),
                  _buildColorPatternBox(context, Colors.brown, 'Brown Pattern', 'Hex: #A52A2A\nUse: Stability, Reliability'),
                  _buildColorPatternBox(context, Colors.grey, 'Grey Pattern', 'Hex: #808080\nUse: Neutrality, Balance'),
                  _buildColorPatternBox(context, Colors.pink, 'Pink Pattern', 'Hex: #FFC0CB\nUse: Love, Kindness'),
                  _buildColorPatternBox(context, Colors.cyan, 'Cyan Pattern', 'Hex: #00FFFF\nUse: Fresh, Energetic'),
                  _buildColorPatternBox(context, Colors.lime, 'Lime Pattern', 'Hex: #00FF00\nUse: Lively, Dynamic'),
                  _buildColorPatternBox(context, Colors.teal, 'Teal Pattern', 'Hex: #008080\nUse: Sophisticated, Modern'),
                  _buildColorPatternBox(context, Colors.indigo, 'Indigo Pattern', 'Hex: #4B0082\nUse: Deep Thought, Wisdom'),
                  _buildColorPatternBox(context, Colors.amber, 'Amber Pattern', 'Hex: #FFBF00\nUse: Bright, Cheerful'),
                  _buildColorPatternBox(context, const Color(0xFFFF7F50), 'Coral Pattern', 'Hex: #FF7F50\nUse: Warm, Inviting'), // Manually defined coral color
                  _buildColorPatternBox(context, Colors.black, 'Deep Black', 'Hex: #000000\nUse: Elegant, Formal'),
                  _buildColorPatternBox(context, const Color(0xFF8B0000), 'Blood Red', 'Hex: #8B0000\nUse: Intense, Passionate'),
                  _buildColorPatternBox(context, const Color(0xFFC8A2C8), 'Lilac', 'Hex: #C8A2C8\nUse: Youthful, Soft'),
                  _buildColorPatternBox(context, const Color(0xFF006400), 'Dark Green', 'Hex: #006400\nUse: Rich, Natural'),
                  _buildColorPatternBox(context, const Color(0xFFFFE135), 'Banana', 'Hex: #FFE135\nUse: Fun, Energetic'),
                  _buildColorPatternBox(context, const Color(0xFFDF73FF), 'Candy Stripe', 'Hex: #DF73FF\nUse: Playful, Sweet'),
                  _buildColorPatternBox(context, const Color(0xFF1A1A1A), 'Licorice', 'Hex: #1A1A1A\nUse: Bold, Intense'),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: CommonTheme.bottomNavBarTheme.backgroundColor,
        selectedItemColor: CommonTheme.bottomNavBarTheme.selectedItemColor,
        unselectedItemColor: CommonTheme.bottomNavBarTheme.unselectedItemColor,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.arrow_back),
            label: 'Return',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.color_lens),
            label: 'Customize',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Shop',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Account',
          ),
        ],
        onTap: (index) {
          switch (index) {
            case 0:
              Navigator.pop(context);
              break;
            case 1:
            // Handle Customize navigation
              break;
            case 2:
            // Handle Shop navigation
              break;
            case 3:
            // Handle Search navigation
              break;
            case 4:
            // Handle Account navigation
              break;
          }
        },
      ),
    );
  }

  Widget _buildColorPatternBox(BuildContext context, Color color, String description, String metaData) {
    return Tooltip(
      message: description,
      child: GestureDetector(
        onTap: () {
          _showColorVariations(context, color, description, metaData);
        },
        child: Container(
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(8),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.5),
                spreadRadius: 2,
                blurRadius: 5,
                offset: const Offset(2, 3),
              ),
            ],
          ),
          margin: const EdgeInsets.all(4.0), // Reduced margin for smaller swatches
          width: 40,
          height: 40,
        ),
      ),
    );
  }

  void _showColorVariations(BuildContext context, Color color, String description, String metaData) {
    List<Color> colorVariations = _getColorVariations(color);

    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return Container(
          padding: const EdgeInsets.all(8.0), // Reduced padding
          color: const Color(0xFF1F1B24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                description,
                style: const TextStyle(
                  fontSize: 18, // Reduced font size
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 5), // Reduced height for smaller spacing
              Text(
                metaData,
                style: const TextStyle(
                  fontSize: 14, // Reduced font size
                  color: Colors.white70,
                ),
              ),
              const SizedBox(height: 5), // Reduced height for smaller spacing
              Wrap(
                spacing: 5.0,
                runSpacing: 5.0,
                children: colorVariations.map((color) => _buildVariationBox(color)).toList(),
              ),
            ],
          ),
        );
      },
    );
  }

  List<Color> _getColorVariations(Color color) {
    if (color == Colors.red) {
      return [Colors.red.shade300, Colors.red.shade500, Colors.red.shade700, Colors.red.shade900];
    } else if (color == Colors.blue) {
      return [Colors.blue.shade300, Colors.blue.shade500, Colors.blue.shade700, Colors.blue.shade900];
    } else if (color == Colors.green) {
      return [Colors.green.shade300, Colors.green.shade500, Colors.green.shade700, Colors.green.shade900];
    } else if (color == Colors.yellow) {
      return [Colors.yellow.shade300, Colors.yellow.shade500, Colors.yellow.shade700, Colors.yellow.shade900];
    } else if (color == Colors.orange) {
      return [Colors.orange.shade300, Colors.orange.shade500, Colors.orange.shade700, Colors.orange.shade900];
    } else if (color == Colors.purple) {
      return [Colors.purple.shade300, Colors.purple.shade500, Colors.purple.shade700, Colors.purple.shade900];
    } else if (color == Colors.brown) {
      return [Colors.brown.shade300, Colors.brown.shade500, Colors.brown.shade700, Colors.brown.shade900];
    } else if (color == Colors.grey) {
      return [Colors.grey.shade300, Colors.grey.shade500, Colors.grey.shade700, Colors.grey.shade900];
    } else if (color == Colors.pink) {
      return [Colors.pink.shade300, Colors.pink.shade500, Colors.pink.shade700, Colors.pink.shade900];
    } else if (color == Colors.cyan) {
      return [Colors.cyan.shade300, Colors.cyan.shade500, Colors.cyan.shade700, Colors.cyan.shade900];
    } else if (color == Colors.lime) {
      return [Colors.lime.shade300, Colors.lime.shade500, Colors.lime.shade700, Colors.lime.shade900];
    } else if (color == Colors.teal) {
      return [Colors.teal.shade300, Colors.teal.shade500, Colors.teal.shade700, Colors.teal.shade900];
    } else if (color == Colors.indigo) {
      return [Colors.indigo.shade300, Colors.indigo.shade500, Colors.indigo.shade700, Colors.indigo.shade900];
    } else if (color == Colors.amber) {
      return [Colors.amber.shade300, Colors.amber.shade500, Colors.amber.shade700, Colors.amber.shade900];
    } else if (color == const Color(0xFFFF7F50)) {
      return [
        const Color(0xFFFF7F50).withOpacity(0.8),
        const Color(0xFFFF7F50).withOpacity(0.6),
        const Color(0xFFFF7F50).withOpacity(0.4),
        const Color(0xFFFF7F50).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFF8B0000)) {
      return [
        const Color(0xFF8B0000).withOpacity(0.8),
        const Color(0xFF8B0000).withOpacity(0.6),
        const Color(0xFF8B0000).withOpacity(0.4),
        const Color(0xFF8B0000).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFFC8A2C8)) {
      return [
        const Color(0xFFC8A2C8).withOpacity(0.8),
        const Color(0xFFC8A2C8).withOpacity(0.6),
        const Color(0xFFC8A2C8).withOpacity(0.4),
        const Color(0xFFC8A2C8).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFF006400)) {
      return [
        const Color(0xFF006400).withOpacity(0.8),
        const Color(0xFF006400).withOpacity(0.6),
        const Color(0xFF006400).withOpacity(0.4),
        const Color(0xFF006400).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFFFFE135)) {
      return [
        const Color(0xFFFFE135).withOpacity(0.8),
        const Color(0xFFFFE135).withOpacity(0.6),
        const Color(0xFFFFE135).withOpacity(0.4),
        const Color(0xFFFFE135).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFFDF73FF)) {
      return [
        const Color(0xFFDF73FF).withOpacity(0.8),
        const Color(0xFFDF73FF).withOpacity(0.6),
        const Color(0xFFDF73FF).withOpacity(0.4),
        const Color(0xFFDF73FF).withOpacity(0.2),
      ];
    } else if (color == const Color(0xFF1A1A1A)) {
      return [
        const Color(0xFF1A1A1A).withOpacity(0.8),
        const Color(0xFF1A1A1A).withOpacity(0.6),
        const Color(0xFF1A1A1A).withOpacity(0.4),
        const Color(0xFF1A1A1A).withOpacity(0.2),
      ];
    } else {
      return [color]; // Default to the same color if not matched
    }
  }

  Widget _buildVariationBox(Color color) {
    return Container(
      width: 30, // Reduced width for smaller swatches
      height: 30, // Reduced height for smaller swatches
      color: color,
    );
  }
}
