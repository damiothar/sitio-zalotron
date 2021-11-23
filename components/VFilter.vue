<template>
	<div class="filter">
		<ul class="menu">
			<li
				v-for="category in categories"
				:key="category.slug"
				class="menu__item"
			>
				<VButton
					:is-active="category === activeCategory"
					:label="category.title"
					@click="filter(category)"
				/>
			</li>
		</ul>

		<div ref="gallery" class="gallery">
			<client-only>
				<isotope
					ref="isotope"
					class="gallery__isotope"
					:options="options"
					:list="projects"
					@filter="onFilter"
				>
					<div v-for="project in projects" :key="project.slug" class="item">
						<div class="project">
							<div class="title --small">
								{{ project.title }}
							</div>
						</div>
					</div>
				</isotope>
			</client-only>
		</div>
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

			options: {
				getFilterData: {
					filterByCategory(project) {
						return project.categories.includes(this.activeCategory);
					},
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
		onFilter() {
			console.log('onFilter');
		},
		filter(category) {
			this.activeCategory = category;
			this.$refs.isotope.filter('filterByCategory');
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
$project__width: 50rem;
$project__height: 25rem;
$project__margin: 2rem;

.menu {
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	&__item {
		margin: 0 1rem;
	}
}

.gallery {
	width: $project__width * 3 + $project__margin * 6;
	&__item {
		padding: $project__margin;
	}
}

.project {
	width: $project__width;
	height: $project__height;
	background-color: rgba(white, 0.1);
	border: 1px solid white;
	padding: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
