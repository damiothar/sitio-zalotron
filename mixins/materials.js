import * as THREE from 'three/build/three.module';

export default {
	data() {
		return {};
	},
	methods: {
		createMaterials() {
			const THAT = this;

			this.matWhite = new THREE.MeshStandardMaterial({ color: 0xffffff });

			this.matReflective = new THREE.MeshPhysicalMaterial({
				color: 0xff0000,
				roughness: 0,
				reflectivity: 1,
				envMap: THAT.envMat,
				envMapIntensity: 2,
			});
		},
	},
};
