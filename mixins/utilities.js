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
		hslToHex(h, s, l) {
			l /= 100;
			const a = (s * Math.min(l, 1 - l)) / 100;
			const f = (n) => {
				const k = (n + h / 30) % 12;
				const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
				return Math.round(255 * color)
					.toString(16)
					.padStart(2, '0'); // convert to Hex and prefix "0" if needed
			};
			return `#${f(0)}${f(8)}${f(4)}`;
		},
	},
};
