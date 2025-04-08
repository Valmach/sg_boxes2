// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWfR06xxmcyX0XMCECd_XK3ofrVwhYR_M",
  authDomain: "esp32boxies.firebaseapp.com",
  databaseURL: "https://esp32boxies.firebaseio.com",
  projectId: "esp32boxies",
  storageBucket: "esp32boxies.appspot.com",
  messagingSenderId: "877109947249",
  appId: "1:877109947249:web:4358efb39304e10be924d0",
  measurementId: "G-G956ZKHGQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

console.log('Firebase Initialized');
