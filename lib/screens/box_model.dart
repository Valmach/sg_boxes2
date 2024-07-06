import 'package:flutter/material.dart';

class BoxModel {
  final String name;
  final String model;
  final double price;
  final String imgAddress;
  final Color modelColor;

  BoxModel({
    required this.name,
    required this.model,
    required this.price,
    required this.imgAddress,
    required this.modelColor,
  });
}
