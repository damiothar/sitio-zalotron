export default {
	data() {
		return {};
	},
	methods: {
		addScene() {
			this.scene = new this.THREE.Scene();
			this.scene.background = new this.THREE.Color().setHSL(0, 0.9, 0.01);
			this.scene.fog = new this.THREE.Fog(this.scene.background, 3500, 15000);
		},
	},
};
