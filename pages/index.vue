<template>
	<div
		class="page"
		:style="`
			--hue: ${color.hue};
			--saturation: ${color.saturation}%;
			--lightness: ${color.lightness}%;
		`"
	>
		<Logo />
		<Social />

		<header class="page__header">
			<Three />
		</header>

		<main class="page__main" :class="{ '--visible': mainVisible }">
			<ToggleMain />
			<Projects />
		</main>

		<ColorPicker v-model="modelHue" />
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { debounce } from 'lodash';
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['mainVisible', 'color']),
		modelHue: {
			get() {
				return this.color.hue;
			},
			set(value) {
				this.SET_COLOR_HUE(value);
			},
		},
	},
	mounted() {
		window.addEventListener('wheel', this.onWheel);
	},
	methods: {
		...mapMutations(['SET_MAIN_VISIBLE', 'SET_COLOR_HUE']),
		onWheel: debounce(
			function (event) {
				const d = event.deltaY > 0 ? 'down' : 'up';
				if (!this.mainVisible && d === 'down') this.SET_MAIN_VISIBLE(true);
				else if (this.mainVisible && d === 'up') this.SET_MAIN_VISIBLE(false);
			},
			200,
			{
				leading: true,
			}
		),
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.page {
	--color: hsl(var(--hue), var(--saturation), var(--lightness));
	--color--dark: hsl(var(--hue), var(--saturation), 30%);
	--color--darker: hsl(var(--hue), var(--saturation), 10%);

	--white: white;
	--gray: rgba(white, 0.5);

	@include fullsize--fixed;
	overflow-x: hidden;
	background-color: black;

	&__header {
		@include fullsize--fixed;
		z-index: 1;
	}

	&__main {
		@include fullsize--fixed;
		z-index: 2;
		padding: $page__padding;
		@include background__glass;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		transform: translate3d(0, 100%, 0);
		@include transition((transform), 1s);

		&.--visible {
			transform: translate3d(0, 0, 0);
		}
	}
}
</style>
