export default {
	env: {
		baseURL: process.env.BASE_URL,
		headTitle: process.env.HEAD_TITLE,
		instagramUrl: process.env.INSTAGRAM_URL,
		linkedinUrl: process.env.LINKEDIN_URL,
		twitchUrl: process.env.TWITCH_URL,
		youtubeUrl: process.env.YOUTUBE_URL,
	},

	// # GLOBAL PAGE HEADERS
	head: {
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
	plugins: ['~/plugins/vue-youtube.client.js'],

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
	css: ['normalize.css/normalize.css', '~/styles/app.scss'],

	// # MODULES
	modules: ['@nuxtjs/style-resources', '@nuxtjs/fontawesome'],

	// # MODULES: STYLE RESOURCES
	styleResources: {
		scss: ['~/styles/_abstracts.scss', '~/styles/_responsive.scss'],
	},

	// # MODULES: FONT AWESOME
	fontawesome: {
		addCss: false,
		icons: {
			solid: ['faHome'],
			brands: ['faInstagram', 'faLinkedin', 'faTwitch', 'faYoutube'],
		},
	},

	// # BUILD
	build: {
		transpile: ['three'],
	},

	target: 'static',
};
