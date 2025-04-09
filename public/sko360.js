// Initialize the 360-degree viewer
const skoboxViewer = new ThreeSixty(document.getElementById('skobox-viewer'), {
    imagePath: '/images/skobox360/',  // Replace with your actual path
    filePrefix: 'box-frame-',
    ext: '.png',
    amount: 36,
    width: 600,
    height: 400,
    autoplay: false,
    drag: true,
    speed: 0.4,
    responsive: true
});

// Handle Hotspot Interactions
const hotspots = document.querySelectorAll('.hotspot');
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        alert('Hotspot Info: ' + info);
    });
});

let scene, camera, renderer, controls, raycaster, mouse;

// Initialize the 3D Viewer
function initSkobox3DViewer() {
    const canvas = document.getElementById('skobox-3d-viewer');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 4);

    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load the 3D model of the shoebox
    const loader = new THREE.GLTFLoader();
    loader.load('/models/skobox.glb', function(gltf) {
        scene.add(gltf.scene);
    });

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Initialize raycaster and mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    window.addEventListener('click', onHotspotClick, false);

    animate();
}

// Detects and handles hotspot clicks
function onHotspotClick(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Display information based on the clicked part of the model
        if (clickedObject.name === 'CustomLid') {
            alert('Hotspot: Custom Lid');
        } else if (clickedObject.name === 'LeatherMaterial') {
            alert('Hotspot: Leather Material');
        }
    }
}

// Continuously render the scene and update controls
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

initSkobox3DViewer();

// Scroll functionality for the menu bar
const menuBar = document.querySelector('.nav-menu');

function scrollLeft() {
    menuBar.scrollBy({ left: -100, behavior: 'smooth' });
}

function scrollRight() {
    menuBar.scrollBy({ left: 100, behavior: 'smooth' });
}

document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-button.right').addEventListener('click', scrollRight);

const viewer = document.querySelector('.cloudimage-360-inner-box');
viewer.addEventListener('mousedown', () => {
    viewer.classList.add('active');
});
viewer.addEventListener('mouseup', () => {
    viewer.classList.remove('active');
});
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

