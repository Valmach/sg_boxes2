// lib/screens/data/dummy_data.dart
import 'package:flutter/material.dart';
import 'package:sg_boxes/models/box_model.dart';
import 'package:sg_boxes/models/user_status.dart';
import 'package:sg_boxes/screens/box_model.dart';

// List of available boxes
final List<BoxModel> availableBoxes = [
  BoxModel(
    name: "NIKE KIDS",
    model: "AIR-MAX",
    price: 130.00,
    imgAddress: "assets/images/nike_kids_multcolour-120_box1.png",
    modelColor: const Color(0xffDE0106),
  ),
  BoxModel(
    name: "ADIDAS",
    model: "SAMBA",
    price: 190.00,
    imgAddress: "assets/images/adidas_box1.jpg",
    modelColor: const Color(0xff3F7943),
  ),
  // Add more box models here
];

// List of user statuses
final List<UserStatus> userStatus = [
  UserStatus(
    emoji: '😴',
    txt: "Away",
    selectColor: const Color(0xff121212),
    unSelectColor: const Color(0xffbfbfbf),
  ),
  // Add more user statuses here
];

// Other lists such as categories, featured, and sizes
final List<String> categories = ['Nike', 'Adidas', 'Jordan', 'Puma', 'Gucci', 'Tom Ford', 'Koio'];
final List<String> featured = ['New', 'Featured', 'Upcoming'];
final List<double> sizes = [6, 7.5, 8, 9.5];
