// Import necessary modules for Firebase, Sentry, and other services
import firebase from "firebase/app";
import "firebase/firestore";
import * as Sentry from "@sentry/browser";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCWfR06xxmcyX0XMCECd_XK3ofrVwhYR_M",
    authDomain: "esp32boxies.firebaseapp.com",
    databaseURL: "https://esp32boxies-default-rtdb.firebaseio.com",
    projectId: "esp32boxies",
    storageBucket: "esp32boxies.appspot.com",
    messagingSenderId: "877109947249",
    appId: "1:877109947249:web:4358efb39304e10be924d0",
    measurementId: "G-G956ZKHGQ4"
  };
// Initialize Firebase app
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore database
const db = firebase.firestore();

// Initialize Sentry for error tracking
Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    tracesSampleRate: 1.0,
});

// General error handling utility
const handleError = (error, context = {}) => {
    console.error("Error:", error);
    Sentry.captureException(error, {
        extra: context,
    });
};

// Fetch products from Firestore based on collection name
export const fetchProducts = async (collectionName) => {
    try {
        const snapshot = await db.collection(collectionName).get();
        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        handleError(error, { collectionName });
        return [];
    }
};

// Fetch a single product by ID
export const fetchProductById = async (productId) => {
    try {
        const productDoc = await db.collection("products").doc(productId).get();
        if (productDoc.exists) {
            return { id: productDoc.id, ...productDoc.data() };
        } else {
            throw new Error(`Product with ID ${productId} not found.`);
        }
    } catch (error) {
        handleError(error, { productId });
        return null;
    }
};

// Add product to cart
export const addToCart = async (productId, userId) => {
    try {
        const cartRef = db.collection("carts").doc(userId);
        const cartDoc = await cartRef.get();

        if (cartDoc.exists) {
            // Add product to existing cart
            await cartRef.update({
                products: firebase.firestore.FieldValue.arrayUnion(productId),
            });
        } else {
            // Create a new cart with the product
            await cartRef.set({
                products: [productId],
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }

        return { success: true, message: "Product added to cart" };
    } catch (error) {
        handleError(error, { productId, userId });
        return { success: false, message: "Failed to add product to cart" };
    }
};

// Remove product from cart
export const removeFromCart = async (productId, userId) => {
    try {
        const cartRef = db.collection("carts").doc(userId);

        await cartRef.update({
            products: firebase.firestore.FieldValue.arrayRemove(productId),
        });

        return { success: true, message: "Product removed from cart" };
    } catch (error) {
        handleError(error, { productId, userId });
        return { success: false, message: "Failed to remove product from cart" };
    }
};

// Fetch cart contents for a specific user
export const fetchCart = async (userId) => {
    try {
        const cartDoc = await db.collection("carts").doc(userId).get();

        if (cartDoc.exists) {
            return { id: cartDoc.id, ...cartDoc.data() };
        } else {
            return { products: [] };
        }
    } catch (error) {
        handleError(error, { userId });
        return { products: [] };
    }
};

// Log customizations or 360-degree viewer interactions to Firestore
export const logCustomizationInteraction = async (userId, customizationData) => {
    try {
        await db.collection("customizations").add({
            userId,
            customizationData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        return { success: true, message: "Customization logged" };
    } catch (error) {
        handleError(error, { userId, customizationData });
        return { success: false, message: "Failed to log customization" };
    }
};

// Fetch customization options (e.g., colors, patterns) for specific products
export const fetchCustomizationOptions = async (productId) => {
    try {
        const customizationDoc = await db.collection("customizationOptions").doc(productId).get();
        if (customizationDoc.exists) {
            return { id: customizationDoc.id, ...customizationDoc.data() };
        } else {
            throw new Error(`Customization options for product ID ${productId} not found.`);
        }
    } catch (error) {
        handleError(error, { productId });
        return null;
    }
};

// Checkout functionality (e.g., finalize cart and proceed with order)
export const checkout = async (userId, paymentDetails) => {
    try {
        const cartDoc = await db.collection("carts").doc(userId).get();

        if (!cartDoc.exists || cartDoc.data().products.length === 0) {
            throw new Error("Cart is empty or does not exist.");
        }

        // Assume paymentDetails are processed via an external service
        // If successful, clear the cart
        await db.collection("carts").doc(userId).delete();

        return { success: true, message: "Checkout completed successfully" };
    } catch (error) {
        handleError(error, { userId, paymentDetails });
        return { success: false, message: "Failed to complete checkout" };
    }
};

// General API utility for fetching external data (if needed for AI recommendations, etc.)
export const fetchExternalData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error, { url });
        return null;
    }
};
// api.js

// Base URL for your API requests
const BASE_URL = 'https://api.example.com/v1';

/**
 * Generic function to handle GET requests
 * @param {string} endpoint - The endpoint to send the request to
 * @returns {Promise} - The response data from the API
 */
export async function getRequest(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
}

/**
 * Generic function to handle POST requests
 * @param {string} endpoint - The endpoint to send the request to
 * @param {Object} data - The data to send in the request body
 * @returns {Promise} - The response data from the API
 */
export async function postRequest(endpoint, data) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
}

/**
 * Example function to fetch user data
 * @returns {Promise} - User data
 */
export async function fetchUserData() {
    return await getRequest('users');
}

/**
 * Example function to create a new user
 * @param {Object} userData - The user data to create
 * @returns {Promise} - The response from the API
 */
export async function createUser(userData) {
    return await postRequest('users', userData);
}
