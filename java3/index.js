import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 5, 10);

const pointLight = new THREE.PointLight(0xffffff, 1);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// dielli
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Merkuri
const mercuryOrbit = new THREE.Object3D();

const mercuryGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const mercuryMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, wireframe: true });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

mercury.position.x = 1.5;
mercuryOrbit.add(mercury);
scene.add(mercuryOrbit);

// Toka
const earthOrbit = new THREE.Object3D();

const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff, wireframe: true });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

earth.position.x = 2.5;
earthOrbit.add(earth);
scene.add(earthOrbit);

// Hena
const moonOrbit = new THREE.Object3D();

const moonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const moonMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, wireframe: true });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);

moon.position.x = 0.7;
moonOrbit.add(moon);
earth.add(moonOrbit);

// Mars
const marsOrbit = new THREE.Object3D();

const marsGeometry = new THREE.SphereGeometry(0.25, 32, 32);
const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);

mars.position.x = 3.5;
marsOrbit.add(mars);
scene.add(marsOrbit);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('scene').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// Animacioni
function animate() {
    requestAnimationFrame(animate);

    controls.update();

    sun.rotation.y += 0.01;

    // Merkuri rrotullohet ne drejtim te kundert
    mercuryOrbit.rotation.y -= 0.02;

    earthOrbit.rotation.y += 0.01;
    earth.rotation.y += 0.01;

    moonOrbit.rotation.y += 0.03;

    marsOrbit.rotation.y += 0.008;

    renderer.render(scene, camera);
}

animate();

/*DETYR SHTEPIE
kameren ta largojm pak mbrapa ndoshta edhe ta ngrejm me lart
shtone marsin
toka duhet te jete me e vogel
shtone edhe dicka per qejfin tuaj
merkuri rrothullohet mbrapsht nga tjerat planete
*/