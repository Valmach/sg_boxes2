import 'dart:ui';

class BoxModel {
  final String name;
  final String model;
  final double price;
  final String imgAddress;
  final String description; // Add this field
  final List<String>? availableColors; // Optional field for color options

  BoxModel({
    required this.name,
    required this.model,
    required this.price,
    required this.imgAddress,
    required this.description, // Ensure this field is added
    this.availableColors, required Color modelColor, required String url, // Optional field for color options
  });
}
