<template>
	<div id="canvas"></div>
</template>

// # ***************************************************************************
// # ***************************************************************************

<script>
import * as THREE from 'three/build/three.module.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

export default {
	name: 'Three',
	mounted() {
		this.clock = new THREE.Clock();

		this.init();
		this.animate();
	},
	methods: {
		// # INIT
		init() {
			this.app = document.querySelector('#app');
			this.canvas = document.querySelector('#canvas');

			// CAMERA
			this.camera = new THREE.PerspectiveCamera(
				40,
				window.innerWidth / window.innerHeight,
				1,
				15000
			);
			this.camera.position.z = 250;

			// SCENE
			this.scene = new THREE.Scene();
			this.scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01);
			this.scene.fog = new THREE.Fog(this.scene.background, 3500, 15000);

			// WORLD
			const s = 250;
			const geometry = new THREE.BoxGeometry(s, s, s);
			const material = new THREE.MeshPhongMaterial({
				color: 0xffffff,
				specular: 0xffffff,
				shininess: 50,
			});
			for (let i = 0; i < 3000; i++) {
				const mesh = new THREE.Mesh(geometry, material);

				mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
				mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
				mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

				mesh.rotation.x = Math.random() * Math.PI;
				mesh.rotation.y = Math.random() * Math.PI;
				mesh.rotation.z = Math.random() * Math.PI;

				mesh.matrixAutoUpdate = false;
				mesh.updateMatrix();

				this.scene.add(mesh);
			}

			// LIGHTS
			this.dirLight = new THREE.DirectionalLight(0xffffff, 0.05);
			this.dirLight.position.set(0, -1, 0).normalize();
			this.dirLight.color.setHSL(0.1, 0.7, 0.5);
			this.scene.add(this.dirLight);
			this.addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
			this.addLight(0.08, 0.8, 0.5, 0, 0, -1000);
			this.addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

			// RENDERER
			this.renderer = new THREE.WebGLRenderer({ antialias: true });
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.outputEncoding = THREE.sRGBEncoding;
			this.canvas.appendChild(this.renderer.domElement);

			// CONTROLS
			this.controls = new FlyControls(this.camera, this.app);
			this.controls.movementSpeed = 1500;
			this.controls.rollSpeed = Math.PI / 6;

			// STATS
			this.stats = new Stats();
			this.canvas.appendChild(this.stats.dom);

			// LISTENERS
			window.addEventListener('resize', this.onResize);
		},

		addLight(h, s, l, x, y, z) {
			const light = new THREE.PointLight(0xffffff, 1.5, 2000);
			light.color.setHSL(h, s, l);
			light.position.set(x, y, z);
			this.scene.add(light);
		},

		// # ANIMATE
		render() {
			const delta = this.clock.getDelta();
			this.controls.update(delta);
			this.renderer.render(this.scene, this.camera);
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.render();
			this.stats.update();
		},

		// # LISTENERS
		onResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		},
	},
};
</script>

// # ***************************************************************************
// # ***************************************************************************

<style lang="scss" scoped>
#three {
	@include fullsize--fixed;
	z-index: -1;
}
</style>
