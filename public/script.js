// script.js

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});const { stringify } = require('flatted');
const safeJson = stringify(object);



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
document.getElementById('skobox-viewer').addEventListener('wheel', function(event) {
    event.preventDefault();
    let scale = 1;

    if (event.deltaY < 0) {
        scale += 0.1; // Zoom in
    } else {
        scale -= 0.1; // Zoom out
    }

    document.querySelector('#skobox-viewer img').style.transform = `scale(${scale})`;
});
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', function(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        alert('Clicked on part: ' + intersects[0].object.name);
    }
});
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const viewer = document.getElementById('skobox-viewer');
    if (viewer.requestFullscreen) {
        viewer.requestFullscreen();
    }
});
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const canvas = document.getElementById('skobox-3d-viewer');
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    }
});
// Initialize 360 Viewer (Using ThreeSixty.js or your preferred library)
const skoboxViewer = new ThreeSixty(document.getElementById('skobox-viewer'), {
    imagePath: '/images/shoebox/',
    filePrefix: 'box-frame-',
    ext: '.jpg',
    amount: 36,
    width: 600,
    height: 400,
    autoplay: false,
    drag: true,
    speed: 0.4,
    responsive: true
});
function handleColorChange(event) {
    const selectedColor = event.currentTarget.getAttribute('data-color');
    document.getElementById('target-box').style.backgroundColor = selectedColor;
}
document.getElementById('close-sidebar').addEventListener('click', function () {
    document.getElementById('configurator-sidebar').style.display = 'none';
});

document.getElementById('build-boxie-btn').addEventListener('click', function () {
    document.getElementById('configurator-sidebar').style.display = 'block';
});
document.getElementById('customize-btn').addEventListener('click', function () {
    document.getElementById('configurator-sidebar').style.display = 'block';
});

document.querySelectorAll('.contrast-btn').forEach(button => {
    button.addEventListener('click', handleColorChange);
});
document.getElementById('customize-btn').addEventListener('click', function () {
    document.getElementById('configurator-sidebar').style.display = 'block';
});

// Handle Hotspot Clicks
const hotspots = document.querySelectorAll('.hotspot');
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        alert('Hotspot Info: ' + info);
    });
});

const viewer = document.getElementById('skobox-360-view');
const thumbnails = document.querySelectorAll('.thumbnail-nav button img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Remove scale-up class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('scale-up'));

        // Add scale-up class to the clicked thumbnail
        thumbnail.classList.add('scale-up');

        // Get the corresponding image for the viewer
        const selectedImage = thumbnail.parentElement.getAttribute('data-image');

        // Update the viewer with the selected image
        const newImageList = [selectedImage];
        viewer.setAttribute('data-image-list-x', JSON.stringify(newImageList));

        const viewerImage = viewer.querySelector('img');

        // Make sure the viewer image src is updated directly
        viewerImage.src = selectedImage;
        viewerImage.style.visibility = 'visible';  // Ensure the image is visible

        window.CI360.destroy(); // Destroy the current instance
        window.CI360.init(); // Reinitialize the viewer with the new image
    });
});
// Function to toggle the sidebar visibility
document.getElementById('build-boxie-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('configurator-sidebar');
    sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
});

// Function to close the sidebar
document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('configurator-sidebar').style.display = 'none';
});

// Function to change the color based on the button clicked
function changeColor(option) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    var img = new Image();
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    
    // Set image source based on the option selected
    switch(option) {
        case 'contrast':
            img.src = 'path/to/contrast-image.png';
            break;
        case 'shade':
            img.src = 'path/to/shade-image.png';
            break;
        case 'dream':
            img.src = 'path/to/dream-image.png';
            break;
        case 'legend':
            img.src = 'path/to/legend-image.png';
            break;
        case 'paint-sample':
            img.src = 'path/to/paint-sample-image.png';
            break;
        case 'paint-sample-plus':
            img.src = 'path/to/paint-sample-plus-image.png';
            break;
        default:
            img.src = 'path/to/default-image.png';
    }
    // Example for Cloudimage 360 Viewer
function update3DModelColor(color) {
    const viewer = document.querySelector('.cloudimage-360-inner-box');
    viewer.setAttribute('data-folder', `path/to/${color}-images`); // Update folder or image set based on color
    viewer.reload(); // Reload the viewer with new images
}
}
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});



document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        const selectedColorName = this.getAttribute('data-color-name');

        // Change the inner box image background or color
        document.querySelector('.inner-box-image').style.backgroundColor = selectedColor;

        // Optionally, update a label with the selected color name
        document.querySelector('.selected-color-label').textContent = selectedColorName;

        // Add active class or styling for the selected option
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
    });
});
function changeSkoboxColor(color) {
    const skoboxImage = document.getElementById('skobox-image');
    
    if (skoboxImage) {
        if (color === '#ffffff') {
            skoboxImage.src = 'path/to/white-skobox-image.png';
        } else if (color === '#000000') {
            skoboxImage.src = 'path/to/black-skobox-image.png';
        }
    }
}
function changeColor(buttonId) {
    // Reset all buttons to their default color
    const buttons = document.querySelectorAll('.sidebar-button');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; // Reset to default
        button.style.color = ''; // Reset text color
    });

    // Apply the new color to the clicked button
    const clickedButton = document.getElementById(buttonId);
    clickedButton.style.backgroundColor = '#004080'; // Change to desired background color
    clickedButton.style.color = '#ffffff'; // Change to desired text color
}
function changeSkoboxColor(imageUrl) {
    // Select the inner box image element
    const innerBoxImage = document.getElementById('inner-box-image');

    // Change the src attribute of the image to the new URL
    innerBoxImage.src = imageUrl;
}
function changeSkoboxColor(imageUrl) {
    // Select the inner box image element
    const innerBoxImage = document.getElementById('inner-box-image');

    // Change the src attribute of the image to the new URL
    innerBoxImage.src = imageUrl;

    // Retract the sidebar automatically
    document.getElementById('configurator-sidebar').style.display = 'none';
}
function openSidebar() {
    document.getElementById('configurator-sidebar').style.display = 'block';
}
document.getElementById('thumbnail-button-5').addEventListener('click', function() {
    // Get the src of the thumbnail image
    var thumbnailSrc = document.getElementById('thumbnail-img-5').src;

    // Set the src of the inner box image to the thumbnail src
    document.getElementById('inner-box-image').src = thumbnailSrc;
});
// Select elements
const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
const colorBtns = document.querySelectorAll('.color-btn');
const mainBox = document.getElementById('main-box');

// Change image on thumbnail click
thumbnailBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const imageSrc = btn.getAttribute('data-image');
    mainBox.style.backgroundImage = `url(${imageSrc})`;
  });
});

// Change box and thumbnails color on color selection
colorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const color = btn.getAttribute('data-color');
    mainBox.style.backgroundColor = color;

    // Apply color to all thumbnails
    thumbnailBtns.forEach(thumbnail => {
      thumbnail.querySelector('img').style.borderColor = color;
    });
  });
});
document.getElementById('carmine-red-btn').addEventListener('click', function () {
    const selectedColor = 'carmine-red';
    update3DModelColor(selectedColor);  // Change color of the 3D model to Carmine Red
    updateThumbnails(selectedColor);    // Update all thumbnail images to Carmine Red
});

function update3DModelColor(color) {
    // Code to change the 3D canvas color dynamically
    const canvas = document.querySelector('.cloudimage-360-inner-box canvas');
    // Example API to update the canvas with the selected color, customize based on your 3D library
    canvas.style.backgroundColor = color; // Replace with your 3D model color update method
}

function updateThumbnails(color) {
    document.querySelectorAll('.thumbnail-nav img').forEach(img => {
        img.src = `path/to/thumbnails/${color}-thumbnail.jpg`;  // Update thumbnails based on selected color
    });
}
const paintToSampleBtn = document.querySelector('div[style*="flex; align-items: center; justify-content: space-between;"]'); // Target the button container

paintToSampleBtn.addEventListener('click', () => {
  // Transition logic (choose one option)
  // Option 1: Open the new paint menu in a new window
  // window.open('path/to/new/paint/menu.html', '_blank');

  // Option 2: Load the new paint menu content via AJAX (assuming 'paint-menu-container' exists in HTML)
  fetch('path/to/paint/menu.html')
    .then(response => response.text())
    .then(data => {
      const paintMenuContainer = document.getElementById('paint-menu-container');
      paintMenuContainer.innerHTML = data;
      paintMenuContainer.style.display = 'block'; // Show the paint menu (if hidden initially)
    });
});
const boxData = {
    "catalog": {
        "cnr": "C16",
        "designRecommendations": [],
        "MaterialType": "secret",
        "modelName": "Manolo",
        "modelYear": 2025,
        "orderType": "Y1AAI1",
        "modelFamily": "Manolo",
        "hasTop": false
    },
    "mainStage": {
        "stage": [
            {
                "url": "https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/boxie_configurator%2Fgeneric_boot_boxie.webp?alt=media&token=5507b812-fb0e-4100-8a55-cbbf7c20143e",
                "view": "exterior-front-south_west",
                "alt": "Exterior view of Manolo",
                "width": 1920,
                "height": 1080,
                "type": "image/webp"
            },
            {
                "url": "https://firebasestorage.googleapis.com/v0/b/esp32boxies.appspot.com/o/boxie_configurator%2Fgeneric_boot_boxie.webp?alt=media&token=5507b812-fb0e-4100-8a55-cbbf7c20143e",
                "view": "exterior-side-west",
                "alt": "Exterior view of Manolo",
                "width": 1920,
                "height": 1080,
                "type": "image/webp"
            }
        ]
    }
};

function loadBoxData() {
    // Assuming you have an element where you want to display the box data
    const mainStageElement = document.getElementById('main-stage');
    
    // Clear the existing content
    mainStageElement.innerHTML = '';

    // Loop through the stage array and create image elements
    boxData.mainStage.stage.forEach((stage) => {
        const img = document.createElement('img');
        img.src = stage.url;
        img.alt = stage.alt;
        img.width = stage.width;
        img.height = stage.height;

        mainStageElement.appendChild(img);
    });
    
}
document.getElementById('drawer-toggle').addEventListener('click', function() {
    document.getElementById('mobile-drawer').classList.toggle('hidden');
});
document.querySelector('.inspiration-title').addEventListener('click', function() {
    document.getElementById('mobile-drawer').classList.toggle('hidden');
});
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the button
    document.querySelector('.mobile-drawer-toggle').addEventListener('click', function() {
        document.getElementById('mobile-drawer').classList.toggle('hidden');
    });
});
const { stringify, parse } = require('flatted');

const jsonString = stringify(yourData);
const parsedData = parse(jsonString);


firebase.firestore().disableNetwork().then(() => {
    return firebase.firestore().enableNetwork();
  });
  document.querySelector(".inspiration-button").addEventListener("touchstart", function() {
    // Code for mobile-specific interaction
  });
  import { getDownloadURL } from "firebase/storage";

  getDownloadURL(storageRef)
      .then((url) => {
          // Insert url into an <img> tag to display it
          console.log('File available at', url);
      })
      .catch((error) => {
          // Handle any errors
          console.error(error);
      });
  