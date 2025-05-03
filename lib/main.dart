import 'package:sg_boxes/screens/fashion_chat_screen.dart';
import 'package:flutter/material.dart';
import 'package:sg_boxes/screens/sandals_details_screen.dart';
import 'package:sg_boxes/screens/boots_details_screen.dart';
import 'package:sg_boxes/screens/box_drops_screen.dart';
import 'package:sg_boxes/screens/customization_paint_screen.dart';
import 'package:sg_boxes/screens/image_screen.dart';
import 'package:sg_boxes/screens/omg_page.dart';
import 'package:sg_boxes/screens/shoe_category.dart';
import 'package:sg_boxes/screens/shopping/shopping_page.dart';
import 'package:sg_boxes/screens/skoMiDora_experience_screen.dart';
import 'package:sg_boxes/screens/sneakers_details_screen.dart';
import 'package:sg_boxes/screens/splash/splash_screen.dart';
import 'package:sg_boxes/screens/heels_details_screen.dart';
import 'package:sg_boxes/screens/trending_page.dart';
import 'package:sg_boxes/screens/home_screen.dart' as home;
import 'package:sg_boxes/screens/welcome_screen.dart'; // Correct import
import 'package:sg_boxes/screens/login_page.dart';
import 'package:sg_boxes/screens/needful_things_screen.dart';
import 'package:sg_boxes/screens/earth_screen.dart';
import 'package:sg_boxes/screens/bluetooth_connection_screen.dart';
import 'package:sg_boxes/screens/account_screen.dart';

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
          backgroundColor: Color(0xFF1F1B24),
          titleTextStyle: TextStyle(
            color: Color(0xFFFFD700),
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
          iconTheme: IconThemeData(
            color: Color(0xFFFFD700),
          ),
        ),
      ),
      initialRoute: '/splash',
      routes: {
        '/splash': (context) => const SplashScreen(title: 'Splash Screen'),
        '/chat': (context) => const FashionChatScreen(
            title: 'Fashion Chat'), // Define the /chat route here
        '/home': (context) => const home.HomeScreen(title: 'Home Screen'),
        '/shoe_category': (context) =>
            const ShoeCategory(title: 'Shoe Categories'),
        '/sneakers_details': (context) =>
            const SneakersDetailsScreen(title: 'Sneakers Details'),
        '/boots_details': (context) =>
            const BootsDetailsScreen(title: 'Boots Details'),
        '/heels_details': (context) =>
            const HeelsDetailsScreen(title: 'Heels Details'),
        '/sandals_details': (context) =>
            const SandalsDetailsScreen(title: 'Sandals Details'),
        '/image': (context) => ImageScreen(),
        '/customize_paint': (context) =>
            const CustomizablePaintScreen(title: 'Customize Paint'),
        '/shopping': (context) => const ShoppingPage(title: 'Shopping Page'),
        '/box_drops': (context) => const BoxDropsScreen(),
        '/omg': (context) => const OMGPage(title: 'OMG Page'),
        '/trending': (context) => const TrendingPage(title: 'Trending Page'),
        '/fashion_chat': (context) =>
            const FashionChatScreen(title: 'Fashion Advisor'),
        '/needful_things': (context) =>
            const NeedfulThingsScreen(title: 'Needful Things'),
        '/earth': (context) => const EarthScreen(title: 'Earth Screen'),
        '/bluetooth_connection': (context) => const BluetoothConnectionScreen(),
        '/account': (context) => const AccountScreen(),
        '/welcome': (context) => const WelcomeScreen(),
        '/login': (context) => const LoginPage(),
        '/skomidora_experience': (context) =>
            const SkoMiDoraExperienceScreen(), // Correct route
      },
    );
  }
}
