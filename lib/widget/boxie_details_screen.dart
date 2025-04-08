import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class BoxieDetailsScreen extends StatelessWidget {
  final String boxieName;

  const BoxieDetailsScreen({super.key, required this.boxieName});

  @override
  Widget build(BuildContext context) {
    String historyDetails;
    String dateOfPurchase;
    String designer;
    String chargingStatus;
    String maintenanceDetails;

    switch (boxieName) {
      case 'Nite Furoi':
        historyDetails = 'This boxie has been designed by Manolo Blahnik.';
        dateOfPurchase = 'Date of Purchase: 2023-01-15';
        designer = 'Designer: Manolo Blahnik';
        chargingStatus = 'Charging Status: Fully charged.';
        maintenanceDetails = 'Maintenance: Regular cleaning required.';
        break;
      case 'Hot Lips':
        historyDetails = 'This boxie has been designed by Jimmy Choo.';
        dateOfPurchase = 'Date of Purchase: 2023-05-22';
        designer = 'Designer: Jimmy Choo';
        chargingStatus = 'Charging Status: Charging needed.';
        maintenanceDetails = 'Maintenance: Battery replacement required.';
        break;
      case 'Sugar Candy':
        historyDetails = 'This boxie has been designed by Prada.';
        dateOfPurchase = 'Date of Purchase: 2023-09-10';
        designer = 'Designer: Prada';
        chargingStatus = 'Charging Status: Partially charged.';
        maintenanceDetails = 'Maintenance: Clean and update firmware.';
        break;
      default:
        historyDetails = 'No details available.';
        dateOfPurchase = '';
        designer = '';
        chargingStatus = 'No charging status available.';
        maintenanceDetails = 'No maintenance details available.';
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(
          '$boxieName Details',
          style: CommonTheme.appBarTitleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF1F1F1F), Color(0xFF3A3A3A)],
          ),
        ),
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Text(
              'History of $boxieName',
              style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
            ),
            const SizedBox(height: 10),
            Text(
              historyDetails,
              style: const TextStyle(fontSize: 17, color: Colors.white),
            ),
            const SizedBox(height: 10),
            Text(
              dateOfPurchase,
              style: const TextStyle(fontSize: 17, color: Colors.white),
            ),
            const SizedBox(height: 10),
            Text(
              designer,
              style: const TextStyle(fontSize: 17, color: Colors.white),
            ),
            const SizedBox(height: 20),
            Text(
              'Battery Status',
              style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
            ),
            const SizedBox(height: 10),
            BatteryStatusIndicator(boxieName: boxieName),
            const SizedBox(height: 20),
            Text(
              'Charging Status',
              style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
            ),
            const SizedBox(height: 10),
            Text(
              chargingStatus,
              style: const TextStyle(fontSize: 17, color: Colors.white),
            ),
            const SizedBox(height: 20),
            Text(
              'Maintenance',
              style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
            ),
            const SizedBox(height: 10),
            Text(
              maintenanceDetails,
              style: const TextStyle(fontSize: 17, color: Colors.white),
            ),
            const SizedBox(height: 10),
            MaintenanceStatusIndicator(boxieName: boxieName),
          ],
        ),
      ),
    );
  }

}class BatteryStatusIndicator extends StatelessWidget {
  final String boxieName;

  const BatteryStatusIndicator({super.key, required this.boxieName});

  @override
  Widget build(BuildContext context) {
    double batteryLevel;

    switch (boxieName) {
      case 'Nite Furoi':
        batteryLevel = 0.75; // 75%
        break;
      case 'Hot Lips':
        batteryLevel = 0.50; // 50%
        break;
      case 'Sugar Candy':
        batteryLevel = 0.25; // 25%
        break;
      default:
        batteryLevel = 0.0; // 0%
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        LinearProgressIndicator(
          value: batteryLevel,
          backgroundColor: Colors.grey,
          color: batteryLevel > 0.5 ? Colors.green : (batteryLevel > 0.2 ? Colors.orange : Colors.red),
        ),
        const SizedBox(height: 10),
        Text(
          'Battery Level: ${(batteryLevel * 100).toInt()}%',
          style: const TextStyle(fontSize: 17, color: Colors.white),
        ),
      ],
    );
  }
}

class MaintenanceStatusIndicator extends StatelessWidget {
  final String boxieName;

  const MaintenanceStatusIndicator({super.key, required this.boxieName});

  @override
  Widget build(BuildContext context) {
    String maintenanceStatus;

    switch (boxieName) {
      case 'Nite Furoi':
        maintenanceStatus = 'Good';
        break;
      case 'Hot Lips':
        maintenanceStatus = 'Requires Attention';
        break;
      case 'Sugar Candy':
        maintenanceStatus = 'Critical';
        break;
      default:
        maintenanceStatus = 'Unknown';
    }

    Color statusColor;
    if (maintenanceStatus == 'Good') {
      statusColor = Colors.green;
    } else if (maintenanceStatus == 'Requires Attention') {
      statusColor = Colors.orange;
    } else {
      statusColor = Colors.red;
    }

    return Row(
      children: [
        const Text(
          'Maintenance Status: ',
          style: TextStyle(fontSize: 17, color: Colors.white),
        ),
        Text(
          maintenanceStatus,
          style: TextStyle(fontSize: 17, color: statusColor),
        ),
      ],
    );
  }
}
