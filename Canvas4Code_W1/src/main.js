import * as THREE from "three"

console.log(THREE);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xffffff, 1);

