let scene, camera, renderer, controls, raycaster, mouse;

function initSkoboxViewer() {
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

    // Load your 3D model (GLTF format)
    const loader = new THREE.GLTFLoader();
    loader.load('/models/skobox.glb', function(gltf) {
        scene.add(gltf.scene);
    });

    // Add OrbitControls for interaction
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Initialize Raycaster and Mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    window.addEventListener('click', onHotspotClick, false);

    animate();
}

function onHotspotClick(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Display information based on the clicked object
        if (clickedObject.name === 'CustomLid') {
            alert('Hotspot: Custom Lid Feature');
        } else if (clickedObject.name === 'LeatherMaterial') {
            alert('Hotspot: Premium Leather Material');
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

initSkoboxViewer();
