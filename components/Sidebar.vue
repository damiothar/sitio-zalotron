<template>
	<div class="sidebar" page="left">
		<div v-for="project in projects" :key="project.slug" class="project">
			<NuxtLink
				class="project__title"
				:to="{ name: 'project-detail', slug: project.slug }"
			>
				{{ project.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Sidebar',
	computed: {
		...mapState(['projects']),
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	top: $page__padding;
	left: $page__padding;
	z-index: 10;
	width: 30rem;
	@include screen;
}
.project {
	font-size: 2.5rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
}
</style>
