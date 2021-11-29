export default {
	// # GLOBAL PAGE HEADERS
	head: {
		title: 'Zalotron.net',
		meta: [
			{ hid: 'utf-8', charset: 'utf-8' },
			{
				hid: 'viewport',
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'format-detection',
				name: 'format-detection',
				content: 'telephone=no',
			},
		],
	},

	// # PLUGINS
	plugins: [
		'~/plugins/vueisotope.client.js',
		'~/plugins/vue-vimeo-player.client.js',
	],

	// # AUTO IMPORT COMPONENTS
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	// # ROUTER
	router: {
		base: '/sitio-zalotron/',
		linkActiveClass: '--active',
		linkExactActiveClass: '--exactActive',
	},

	// # TRANSITION
	pageTransition: {
		name: 'page',
		mode: '',
		duration: 1000,
	},

	// # LOADING
	loading: false,

	// # **************************************************************************

	// # BUILD MODULES
	buildModules: [
		[
			'@nuxtjs/eslint-module',
			{
				fix: true,
			},
		],
	],

	// # GLOBAL CSS
	css: ['normalize.css/normalize.css', '~/styles/index.scss'],

	// # MODULES
	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/fontawesome'],

	// # MODULES: STYLE RESOURCES
	styleResources: {
		scss: ['~/styles/abstracts/index.scss'],
	},

	// # MODULES: FONT AWESOME
	fontawesome: {
		addCss: false,
		icons: {
			solid: ['faBlender'],
			brands: ['faInstagram', 'faLinkedin', 'faTwitch', 'faYoutube'],
		},
	},

	// # BUILD
	build: {
		transpile: ['three'],
	},

	target: 'static',
};
