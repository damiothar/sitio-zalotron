import categories from '~/content/categories';
import projects from '~/content/projects';

export const state = () => {
	return {
		// # CONTENT
		categories,
		projects,

		// # APP
		mainVisible: false,
		openTimeout: 500,
		openProject: null,

		// # COLOR
		color: {
			hue: 357,
			saturation: 62,
			lightness: 44,
		},
	};
};

export const mutations = {
	SET_COLOR_HUE(state, hue) {
		state.color.hue = hue;
	},
	SET_MAIN_VISIBLE(state, mainVisible) {
		state.mainVisible = mainVisible;
		if (!mainVisible) state.openProject = null;
	},
	SET_OPEN_PROJECT(state, openProject) {
		state.openProject = openProject;
	},
};
