import * as THREE from 'three/build/three.module';

export default {
	data() {
		return {
			bgColor: '#FF0000',
		};
	},
	methods: {
		createWorld() {
			// this.renderer.setClearColor(this.bgColor);
			this.renderer.shadowMap.enabled = true;
			this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

			this.camera.position.z = 100;
			this.camera.lookAt(0, 0, 0);

			this.scene.add(this.lightProbe);
			this.scene.background = this.envMat;

			const geometry = new THREE.SphereGeometry(15, 64, 32);
			const sphere = new THREE.Mesh(geometry, this.matReflective);
			this.scene.add(sphere);
		},
	},
};
