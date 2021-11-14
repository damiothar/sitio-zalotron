<template>
	<div id="canvas"></div>
</template>

// # ***************************************************************************
// # ***************************************************************************

<script>
import three from '~/mixins/three';
import scene from '~/mixins/scene';
import animation from '~/mixins/animation';

export default {
	name: 'Three',
	mixins: [three, scene, animation],
	computed: {
		hoverSocial() {
			return this.$store.state.hoverSocial;
		},
	},
	watch: {
		hoverSocial(social) {
			this.animateSocial(social);
		},
	},
	mounted() {
		this.setup();
		this.init();
		this.animate();
	},
	methods: {
		init() {
			this.canvas = document.querySelector('#canvas');
			this.clock = new this.THREE.Clock();

			// CAMERA
			this.camera = new this.THREE.PerspectiveCamera(
				40,
				window.innerWidth / window.innerHeight,
				1,
				15000
			);
			this.camera.position.z = 250;

			// SCENE
			this.addScene();

			// WORLD
			const s = 250;
			const geometry = new this.THREE.BoxGeometry(s, s, s);
			const material = new this.THREE.MeshPhongMaterial({
				color: 0xffffff,
				specular: 0xffffff,
				shininess: 50,
			});
			for (let i = 0; i < 3000; i++) {
				const mesh = new this.THREE.Mesh(geometry, material);

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
			this.dirLight = new this.THREE.DirectionalLight(0xffffff, 0.05);
			this.dirLight.position.set(0, -1, 0).normalize();
			this.dirLight.color.setHSL(0, 0.7, 0.5);
			this.scene.add(this.dirLight);
			this.addLight(0, 0.9, 0.5, 5000, 0, -1000);
			this.addLight(0, 0.8, 0.5, 0, 0, -1000);
			this.addLight(0, 0.5, 0.9, 5000, 5000, -1000);

			// RENDERER
			this.renderer = new this.THREE.WebGLRenderer({
				alpha: true,
				antialias: true,
			});
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.outputEncoding = this.THREE.sRGBEncoding;
			this.canvas.appendChild(this.renderer.domElement);

			// CONTROLS
			this.controls = new this.OrbitControls(this.camera, this.canvas);
			this.controls.movementSpeed = 1500;
			this.controls.rollSpeed = Math.PI / 6;

			// LISTENERS
			window.addEventListener('resize', this.onResize);
		},
	},
};
</script>

// # ***************************************************************************
// # ***************************************************************************

<style lang="scss" scoped>
#canvas {
	@include fullsize--fixed;
	z-index: 1;
}
</style>
