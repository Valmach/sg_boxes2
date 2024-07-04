/* import 'package:flutter/material.dart';

// Update the import paths to match your project structure for boxes
import 'package:sg_boxes/data/dummy_data.dart';
import 'package:sg_boxes/widget/snack_bar.dart';

import '../models/box_model.dart';

class AppMethods {
  AppMethods._();

  // Change the parameter type from ShoeModel to BoxModel
  static void addToCart(BoxModel data, BuildContext context) {
    // Check if the item is already in the cart
    bool contains = itemsOnBag.contains(data);

    if (contains == true) {
      // Show a failure message if the item is already in the cart
      ScaffoldMessenger.of(context).hideCurrentSnackBar();
      ScaffoldMessenger.of(context).showSnackBar(failedSnackBar());
    } else {
      // Add the item to the cart and show a success message
      itemsOnBag.add(data);
      ScaffoldMessenger.of(context).hideCurrentSnackBar();
      ScaffoldMessenger.of(context).showSnackBar(successSnackBar());
    }
  }

  static double sumOfItemsOnBag() {
    double sumPrice = 0.0;
    // Sum the prices of items in the cart
    for (BoxModel bagModel in itemsOnBag) {
      sumPrice = sumPrice + bagModel.price;
    }
    return sumPrice;
  }
}
 */