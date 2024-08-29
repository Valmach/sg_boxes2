// script.js

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});
// Initialize Firebase (make sure firebaseConfig is defined in your HTML file)
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Example: Initialize Firestore if needed

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;

            // Example: Log the thumbnail click event to Firestore
            logThumbnailClick(this.src);
        });
    });

    // Example: Handle Add to Cart button click
    const addToCartButton = document.querySelector('.btn');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // Perform Add to Cart logic
            addToCart();
        });
    }
});

// Function to log thumbnail clicks to Firestore
function logThumbnailClick(imageSrc) {
    db.collection('thumbnailClicks').add({
        imageUrl: imageSrc,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log('Thumbnail click logged to Firestore');
    }).catch(error => {
        console.error('Error logging thumbnail click:', error);
    });
}

// Example function to handle Add to Cart logic
function addToCart() {
    const productName = document.querySelector('.product-details h1').innerText;
    const productPrice = document.querySelector('.product-details .price').innerText;

    db.collection('cart').add({
        product: productName,
        price: productPrice,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log('Product added to cart');
        alert(`${productName} has been added to your cart.`);
    }).catch(error => {
        console.error('Error adding product to cart:', error);
    });
}
