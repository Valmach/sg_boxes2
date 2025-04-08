import 'package:flutter/material.dart';
import 'package:sg_boxes/common%20theme/common_theme.dart';

class BluetoothConnectionScreen extends StatefulWidget {
  const BluetoothConnectionScreen({super.key});

  @override
  _BluetoothConnectionScreenState createState() => _BluetoothConnectionScreenState();
}

class _BluetoothConnectionScreenState extends State<BluetoothConnectionScreen> {
  bool isConnecting = false;
  bool isConnected = false;
  String connectionStatus = "Not Connected";

  void autoConfigAndConnect() {
    setState(() {
      isConnecting = true;
      connectionStatus = "Connecting...";
    });

    // Simulate the Bluetooth connection process
    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        isConnecting = false;
        isConnected = true;
        connectionStatus = "Connected";
      });
    });
  }

  void disconnect() {
    setState(() {
      isConnected = false;
      connectionStatus = "Not Connected";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Bluetooth Connection',
          style: CommonTheme.appBarTitleTextStyle,
        ),
        backgroundColor: CommonTheme.appBarTheme.backgroundColor,
        elevation: 0,
      ),
      body: Stack(
        children: [
          Positioned.fill(
            child: Container(
              decoration: CommonTheme.backgroundDecoration,
            ),
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'Bluetooth Configuration',
                  style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
                ),
                const SizedBox(height: 20),
                Text(
                  connectionStatus,
                  style: TextStyle(
                    fontSize: 18,
                    color: isConnected ? Colors.green : Colors.red,
                  ),
                ),
                const SizedBox(height: 20),
                Wrap(
                  spacing: 20.0, // Space between buttons horizontally
                  runSpacing: 20.0, // Space between buttons vertically
                  alignment: WrapAlignment.center,
                  children: [
                    _buildCircularButton(
                      context,
                      'Auto Config & Connect',
                      isConnecting ? null : autoConfigAndConnect,
                      isConnecting ? Colors.grey : Colors.blue,
                      Icons.bluetooth,
                    ),
                    _buildCircularButton(
                      context,
                      'Disconnect',
                      isConnected ? disconnect : null,
                      isConnected ? Colors.red : Colors.grey,
                      Icons.bluetooth_disabled,
                    ),
                  ],
                ),
                const SizedBox(height: 40),
                Text(
                  'Charging Rack Docking Status',
                  style: CommonTheme.headingTextStyle.copyWith(fontSize: 22),
                ),
              ],
            ),
          ),
        ],
      ),
    );

  }  Widget _buildCircularButton(BuildContext context, String text, VoidCallback? onTap, Color color, IconData icon) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 140,
        height: 140,
        decoration: BoxDecoration(
          color: color,
          shape: BoxShape.circle,
          border: Border.all(
            color: const Color(0xFF8B0000),
            width: 4,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.5),
              spreadRadius: 2,
              blurRadius: 5,
              offset: const Offset(2, 3),
            ),
          ],
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 40, color: Colors.white),
              const SizedBox(height: 10),
              Text(
                text,
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
