import projects from '~/content/projects';

export const state = () => {
	return {
		projects,
		hoverSocial: null,
	};
};

export const getters = {
	getProjectById() {},
};

export const mutations = {
	SET_HOVER_SOCIAL(state, social) {
		state.hoverSocial = social;
	},
};
