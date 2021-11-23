import categories from '~/content/categories';
import projects from '~/content/projects';

export const state = () => {
	return {
		categories,
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
