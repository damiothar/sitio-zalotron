<template>
	<button class="logo" @click="onClick">
		<svg class="logo__svg" viewBox="0 0 600 390">
			<g class="logo__group --lines">
				<path
					d="M385.57,59.23,353.88,4.52H29.66L27.87,7.63,163.8,243.06l31.64-54.81-74.71-129Zm-197.31,129L163.8,230.62,36.85,10.74H350.3L374.79,53H109.94Z"
				/>
				<path
					d="M572.13,382.37,436.2,146.94l-31.64,54.81,74.71,129H214.43l31.69,54.71H570.34ZM225.21,337H490.06L411.74,201.75l24.46-42.37,127,219.88H249.7Z"
				/>
				<path
					d="M570.34,385.48h0L600,333.87,438,53.21l-3.59,0L298.49,288.54h63.14L436.2,159.38l130.54,226.1ZM358,282.33H309.26l126.9-219.8L592.82,333.88l-24.29,42.26L436.2,146.94Z"
				/>
				<path
					d="M165.53,337l136-235.53H238.37L163.8,230.62,33.26,4.52h-3.6L0,56.13,162.15,337ZM31.47,13.86,163.8,243.06,242,107.67h48.78l-126.9,219.8L7.18,56.12Z"
				/>
				<path
					d="M109.93,53l31.82,54.65h149l-130.49,226,1.9,3.29h59.46l164-284ZM218,330.76l-48.81-.16L301.51,101.46H145.32L120.74,59.23H374.79Z"
				/>
				<path
					d="M458.25,282.33h-149l130.49-226L438,53.21h0L378.39,53l-164,284H490.07ZM382,59.24l48.81.16L298.49,288.54H454.68l24.58,42.23h-254Z"
				/>
			</g>
			<g class="logo__group --shape">
				<polygon
					points="120.74 59.23 145.32 101.46 301.51 101.46 169.22 330.6 218.03 330.76 374.79 59.23 120.74 59.23"
				/>
				<polygon
					points="430.78 59.4 298.49 288.54 454.68 288.54 479.27 330.77 225.21 330.77 381.97 59.24 430.78 59.4"
				/>
			</g>
		</svg>
	</button>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['mainVisible', 'openTimeout', 'personalVisible']),
	},
	methods: {
		...mapMutations(['SET_MAIN_VISIBLE', 'SET_PERSONAL_VISIBLE']),
		onClick() {
			if (this.mainVisible) {
				this.SET_MAIN_VISIBLE(false);
				setTimeout(() => {
					this.SET_PERSONAL_VISIBLE(true);
				}, this.openTimeout);
			} else {
				this.SET_PERSONAL_VISIBLE(!this.personalVisible);
			}
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.logo {
	position: fixed;
	top: $page__padding - 1rem;
	left: $page__padding;
	z-index: 10;
	width: 8rem;
	height: auto;
	opacity: 0.8;
	@include transition((opacity), 0.5s);
	&:hover {
		opacity: 1;
	}

	&__group {
		stroke: white;
		stroke-width: 2px;
		&.--lines {
			fill: white;
		}
		&.--shape {
			fill: var(--color);
		}
	}
}
</style>
