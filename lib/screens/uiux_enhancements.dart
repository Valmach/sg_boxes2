import 'package:flutter/material.dart';
import 'package:animations/animations.dart';

class UIUXEnhancements {
  // Method for fade transition
  static Widget fadeTransition(BuildContext context, Widget child) {
    return PageTransitionSwitcher(
      duration: const Duration(milliseconds: 300),
      transitionBuilder: (
        Widget child,
        Animation<double> animation,
        Animation<double> secondaryAnimation,
      ) {
        return FadeTransition(
          opacity: animation,
          child: child,
        );
      },
      child: child,
    );
  }

  // Method for animated button
  static Widget animatedButton({
    required String label,
    required VoidCallback onPressed,
    Color? color,
    Color textColor = Colors.white,
    double borderRadius = 8.0, required MaterialColor backgroundColor,
  }) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: color ?? Colors.blue,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(borderRadius),
        ),
      ),
      child: Text(
        label,
        style: TextStyle(color: textColor),
      ),
    );
  }
}
