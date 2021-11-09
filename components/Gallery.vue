<template>
	<div class="gallery">
		<ul class="gallery__list">
			<li
				v-for="project in portfolio"
				:key="project.slug"
				class="gallery__item"
			>
				<div class="project">
					<h3 class="project__title">{{ project.title }}</h3>
					<p class="project__description">{{ project.description }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Gallery',
	computed: {
		...mapState(['portfolio']),
	},
	mounted() {},
};
</script>

<style></style>
