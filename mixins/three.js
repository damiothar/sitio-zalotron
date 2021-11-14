import * as THREE from '~/node_modules/three/build/three.module';
import { OrbitControls } from '~/node_modules/three/examples/jsm/controls/OrbitControls';

export default {
	methods: {
		// # INIT
		setup() {
			this.THREE = THREE;
			this.OrbitControls = OrbitControls;
		},

		// # ADD LIGHT
		addLight(h, s, l, x, y, z) {
			const light = new this.THREE.PointLight(0xffffff, 1.5, 2000);
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
		},

		// # LISTENERS
		onResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		},
	},
};
