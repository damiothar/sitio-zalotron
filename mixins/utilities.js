export default {
	methods: {
		lerp(n, a, b) {
			return a + n * (b - a);
		},
		normalize(n, a, b) {
			return (n - (a + 1)) / (b - 1 - (a + 1));
		},
		clamp(n, a, b) {
			return n <= a + 1 ? a + 1 : n >= b - 1 ? b - 1 : n;
		},
		toDegree(radians) {
			return radians * (180 / Math.PI);
		},
		toRadian(degrees) {
			return degrees * (Math.PI / 180);
		},
		genCubeUrls(prefix, postfix) {
			return [
				prefix + 'px' + postfix,
				prefix + 'nx' + postfix,
				prefix + 'py' + postfix,
				prefix + 'ny' + postfix,
				prefix + 'pz' + postfix,
				prefix + 'nz' + postfix,
			];
		},
	},
};
