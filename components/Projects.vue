<template>
	<div ref="projects" class="projects">
		<ul class="filter">
			<li
				v-for="category in categories"
				:key="category.slug"
				class="filter__item"
			>
				<VButton
					:is-active="category === activeCategory"
					:label="category.title"
					@click="filter(category)"
				/>
			</li>
			<li class="filter__item">
				<VButton
					:is-shuffling="isShuffling"
					:icon="['fas', 'blender']"
					label="Shuffle"
					@click="shuffle"
				/>
			</li>
		</ul>

		<client-only>
			<Vueisotope
				ref="gallery"
				:list="projects"
				:options="options"
				class="gallery"
			>
				<div
					v-for="project in projects"
					:key="project.slug"
					class="gallery__item"
					:class="project.categories.join(' ')"
				>
					<Project :project="project" />
				</div>
			</Vueisotope>
		</client-only>

		<ProjectDetails />
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			activeCategory: null,
			isShuffling: false,
			options: {
				transitionDuration: 500,
				hiddenStyle: {
					opacity: 0,
				},
				visibleStyle: {
					opacity: 1,
				},
			},
		};
	},
	computed: {
		...mapState(['categories', 'projects']),
	},
	created() {
		this.activeCategory = this.categories[0];
	},
	methods: {
		filter(category) {
			this.activeCategory = category;
			this.$refs.gallery.arrange({
				filter: `.${this.activeCategory.slug}`,
			});
		},
		shuffle() {
			if (this.isShuffling) return;
			this.isShuffling = true;
			this.$refs.gallery.shuffle();
			setTimeout(() => {
				this.isShuffling = false;
			}, 500);
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.projects {
	position: relative;
	margin-top: 6.2rem;
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	height: 100%;
}

.filter {
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	&__item {
		margin: 0 0.75rem;
	}
}

.gallery {
	flex: 1;
	width: $project__width * 3;
	margin: 0 -#{$project__padding};
	&__item {
		width: $project__width;
		padding: $project__padding;
	}
	&:hover .project {
		opacity: 0.5;
		&:hover {
			opacity: 1;
		}
	}
}
</style>
