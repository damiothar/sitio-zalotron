export default {
	data() {
		return {};
	},
	methods: {
		onMouseMove(event) {
			event.preventDefault();
			this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

			this.camera.rotation.set(
				this.mouse.y * 0.05,
				this.mouse.x * -1 * 0.05,
				0
			);
			this.mouseLight.position.set(this.mouse.x * 325, this.mouse.y * 162, -85);

			this.raycaster.setFromCamera(this.mouse, this.camera);
		},

		onMouseClick(event) {
			const intersects = this.raycaster.intersectObjects(
				this.scene.children,
				true
			);
			for (let i = 0; i < intersects.length; i++) {
				intersects[i].object.dispatchEvent({ type: 'onClick' });
			}
		},

		updateWindow() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			this.renderer.setSize(width, height);
			this.camera.aspect = width / height;
			this.camera.updateProjectionMatrix();
			this.camera.position.z = this.lerp(width / height / 2, 175, 100);
			this.camera.position.y = this.lerp(width / height / 2, -50, 0);
		},

		render() {
			requestAnimationFrame(this.render);
			this.renderer.render(this.scene, this.camera);
		},
	},
};
