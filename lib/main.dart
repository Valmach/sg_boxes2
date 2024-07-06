import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/sandals_details_screen.dart';
import 'package:sg_boxes/screens/boots_details_screen.dart';
import 'package:sg_boxes/screens/box_drops_screen.dart';
import 'package:sg_boxes/screens/customization_paint_screen.dart';
import 'package:sg_boxes/screens/image_screen.dart';
import 'package:sg_boxes/screens/omg_page.dart';
import 'package:sg_boxes/screens/shoe_type_categories.dart';
import 'package:sg_boxes/screens/shopping/shopping_page.dart';
import 'package:sg_boxes/screens/sneakers_details_screen.dart';
import 'package:sg_boxes/screens/splash/splash_screen.dart';
import 'package:sg_boxes/screens/heels_details_screen.dart';
import 'package:sg_boxes/screens/trending_page.dart';
import 'package:sg_boxes/screens/home_screen.dart'; // Correct import for HomeScreen
import 'package:sg_boxes/widget/chat_widget.dart';
import 'package:sg_boxes/screens/needful_things_screen.dart';
import 'package:sg_boxes/screens/earth_screen.dart'; // Import for EarthScreen

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SkoMiDora App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF1F1B24), // Background color of the AppBar
          titleTextStyle: TextStyle(
            color: Color(0xFFFFD700), // Bright gold color for title
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
          iconTheme: IconThemeData(
            color: Color(0xFFFFD700), // Bright gold color for back button
          ),
        ),
      ),
      initialRoute: '/splash',
      routes: {
        '/splash': (context) => const SplashScreen(title: 'Splash Screen'),
        '/home': (context) => const HomeScreen(title: 'Home Screen'),
        '/shoe_type_categories': (context) => const ShoeTypeCategories(title: 'Shoe Type Categories'),
        '/sneakers_details': (context) => const SneakersDetailsScreen(title: 'Sneakers Details'),
        '/boots_details': (context) => const BootsDetailsScreen(title: 'Boots Details'),
        '/heels_details': (context) => const HeelsDetailsScreen(title: 'Heels Details'),
        '/sandals_details': (context) => const SandalsDetailsScreen(title: 'Sandals Details'),
        '/image': (context) => ImageScreen(),
        '/chat': (context) => const ChatScreen(title: 'Fashion Chat', selectedShoe: 'defaultShoe'),
        '/customize_paint': (context) => const CustomizablePaintScreen(title: 'Customize Paint'),
        '/shopping': (context) => const ShoppingPage(title: 'Shopping Page'),
        '/box_drops': (context) => const BoxDropsScreen(),
        '/omg': (context) => const OMGPage(title: 'OMG Page'),
        '/trending': (context) => const TrendingPage(title: 'Trending Page'),
        '/needful_things': (context) => const NeedfulThingsScreen(title: 'Needful Things'),
        '/earth': (context) => const EarthScreen(title: 'Earth Screen'), // Define route for EarthScreen
      },
    );
  }
}
