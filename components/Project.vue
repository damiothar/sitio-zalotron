<template>
	<div
		class="project"
		:class="{ '--clickable': isClickable, '--open': isOpen }"
		:style="`--openTimeout:${openTimeout}ms`"
	>
		<!--
		//# BACKDROP -->
		<button
			class="project__backdrop"
			:class="{ '--clickable': isClickable, '--open': isOpen }"
			@click.prevent="SET_OPEN_PROJECT(null)"
		></button>

		<!--
		//# BUTTON -->
		<button
			class="project__button"
			:class="{ '--hidden': openProject && openProject !== project }"
			@click.prevent="SET_OPEN_PROJECT(project)"
		>
			<div ref="thumb" class="thumb">
				<img :src="thumbImg" :alt="project.title" />
			</div>
			<div class="title --small" :class="{ '--hidden': isOpen }">
				{{ project.title }}
			</div>
		</button>
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			thumbImg: '',

			isClickable: false,
			isOpen: false,
		};
	},
	computed: {
		...mapState(['openTimeout', 'openProject']),
	},
	watch: {
		openProject(openProject) {
			if (this.project === openProject) this.open();
			else this.close();
		},
	},
	async created() {
		await this.getThumb();
	},
	methods: {
		...mapMutations(['SET_OPEN_PROJECT']),
		open() {
			if (this.isOpen) return;
			this.isClickable = true;
			setTimeout(() => {
				this.isOpen = true;
				this.setThumb();
			});
		},
		close() {
			if (!this.isOpen) return;
			setTimeout(() => {
				this.isOpen = false;
				this.resetThumb();
				setTimeout(() => {
					this.isClickable = false;
				}, this.openTimeout);
			}, this.openTimeout);
		},
		getThumb() {
			this.$axios
				.$get(`https://vimeo.com/api/v2/video/${this.project.vimeoId}.json`)
				.then((res) => {
					this.thumbImg = res[0].thumbnail_large;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		setThumb() {
			const wW = window.innerWidth;
			// const wH = window.innerHeight;

			const projectsR = this.$parent.$parent.$el.getBoundingClientRect();
			const pW = projectsR.width;
			const pY = projectsR.y;

			const thumbR = this.$refs.thumb.getBoundingClientRect();
			const tX = thumbR.x;
			const tY = thumbR.y;
			const tW = thumbR.width;
			// const tH = thumbR.height;

			const x = tX + tW / 2 - wW / 2;
			const y = tY - pY;
			const s = pW / tW;

			this.$refs.thumb.style.transform = `translate3d(${-x}px, ${-y}px, 0) scale(${s})`;
		},
		resetThumb() {
			this.$refs.thumb.style.transform = null;
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.project {
	position: relative;
	z-index: 1;
	@include transition((opacity), 0.5s);
	&.--clickable,
	&.--open {
		z-index: 2;
		opacity: 1 !important;
	}

	&__button {
		display: block;
		width: 100%;
		@include transition((opacity), var(--openTimeout));
		&.--hidden {
			opacity: 0;
		}
	}

	&__backdrop {
		@include fullsize--fixed;
		opacity: 0;
		@include transition((opacity), var(--openTimeout));
		&.--open {
			opacity: 1;
		}

		display: none;
		&.--clickable,
		&.--open {
			display: block;
		}
	}
}

//# THUMB
.thumb {
	position: relative;
	z-index: 1;
	@include aspectRatio--16x9;
	overflow: hidden;
	transform-origin: top center;
	@include transition((transform), var(--openTimeout));
}

//# TITLE
.title {
	margin-top: 1.5rem;
	text-align: left;
	@include transition((opacity), var(--openTimeout));
	&.--hidden {
		opacity: 0;
	}
}
</style>
