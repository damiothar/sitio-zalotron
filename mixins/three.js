import * as THREE from 'three/build/three.module';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator';

export default {
	data() {
		return {};
	},
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
		this.createWorld();
	},
	methods: {
		// # INIT
		setup() {
			this.renderer = new THREE.WebGLRenderer({
				alpha: true,
				antialias: true,
			});

			this.scene = new THREE.Scene();

			this.camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				15000
			);

			// this.mouse = THREE.Vector2();

			this.lightProbe = new THREE.LightProbe();

			this.loadingManager = new THREE.LoadingManager();

			this.textureLoader = new THREE.TextureLoader(this.LoadingManager);

			this.fbxLoader = new FBXLoader(this.LoadingManager);

			this.cubeTextureLoader = new THREE.CubeTextureLoader(this.LoadingManager);

			this.envMat = this.cubeTextureLoader.load(
				this.genCubeUrls('/cubemaps/cube1/', '.jpg'),
				(cubeTexture) => {
					cubeTexture.encoding = THREE.sRGBEncoding;
					this.lightProbe.copy(
						LightProbeGenerator.fromCubeTexture(cubeTexture)
					);
				}
			);
		},
	},
};
