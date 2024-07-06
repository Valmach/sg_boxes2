// lib/screens/data/dummy_data.dart

import 'package:sg_boxes/common%20theme/common_theme.dart';
import 'package:sg_boxes/models/user_status.dart';
import 'package:sg_boxes/screens/box_model.dart';

// List of available boxes
final List<BoxModel> availableBoxes = [
  BoxModel(
    name: "NIKE KIDS",
    model: "AIR-MAX",
    price: 130.00,
    imgAddress: "assets/images/nike_kids_multcolour-120_box1.png",
    modelColor: CommonTheme.accentColor,
  ),
  BoxModel(
    name: "ADIDAS",
    model: "SAMBA",
    price: 190.00,
    imgAddress: "assets/images/adidas_box1.jpg",
    modelColor: CommonTheme.secondaryColor,
  ),
  // Add more box models here
];

// List of user statuses
final List<UserStatus> userStatus = [
  UserStatus(
    emoji: '😴',
    txt: "Away",
    selectColor: CommonTheme.primaryColor,
    unSelectColor: CommonTheme.accentColor.withOpacity(0.6),
  ),
  // Add more user statuses here
];

// Other lists such as categories, featured, and sizes
final List<String> categories = ['Nike', 'Adidas', 'Jordan', 'Puma', 'Gucci', 'Tom Ford', 'Koio'];
final List<String> featured = ['New', 'Featured', 'Upcoming'];
final List<double> sizes = [6, 7.5, 8, 9.5];
