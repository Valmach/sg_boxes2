import 'package:flutter/material.dart';

class CommonTheme {
  static const Color primaryColor = Color(0xFF000000);
  static const Color secondaryColor = Color(0xFFFFFFFF);
  static const Color accentColor = Color(0xFF8B0000);
  static const Color bottomNavBarBackgroundColor = Color(0xFF1F1B24);
  static const Color bottomNavBarSelectedColor =
      Color(0xFF5A0202); // Bright gold color
  static const Color bottomNavBarUnselectedColor =
      Color(0xFFA41919); // Grey color

  static const BoxDecoration backgroundDecoration = BoxDecoration(
    gradient: LinearGradient(
      colors: [primaryColor, accentColor],
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
    ),
  );

  static const AppBarTheme appBarTheme = AppBarTheme(
    backgroundColor: primaryColor,
    titleTextStyle: TextStyle(
      color: secondaryColor,
      fontSize: 24,
      fontWeight: FontWeight.normal,
    ),
    iconTheme: IconThemeData(
      color: secondaryColor,
    ),
  );

  static final BoxDecoration buttonDecoration = BoxDecoration(
    color: primaryColor,
    shape: BoxShape.circle,
    border: Border.all(
      color: accentColor,
      width: 4,
    ),
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(0.5),
        spreadRadius: 2,
        blurRadius: 5,
        offset: Offset(2, 3),
      ),
    ],
  );

  static const TextStyle buttonTextStyle = TextStyle(
    fontSize: 12,
    color: secondaryColor,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle headingTextStyle = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: secondaryColor,
  );

  static const BottomNavigationBarThemeData bottomNavBarTheme =
      BottomNavigationBarThemeData(
    backgroundColor: bottomNavBarBackgroundColor,
    selectedItemColor: bottomNavBarSelectedColor,
    unselectedItemColor: bottomNavBarUnselectedColor,
    selectedLabelStyle: TextStyle(
        color: bottomNavBarSelectedColor), // Matching selected label color
    unselectedLabelStyle: TextStyle(
        color: bottomNavBarUnselectedColor), // Matching unselected label color
  );
}
