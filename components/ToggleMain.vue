<template>
	<button
		class="toggle"
		:class="{ '--mainVisible': mainVisible }"
		@click.prevent="SET_MAIN_VISIBLE(!mainVisible)"
	>
		<div class="title">Portfolio</div>
		<div class="chevron">
			<div
				class="chevron__line --left"
				:class="{ '--mainVisible': mainVisible }"
			></div>
			<div
				class="chevron__line --right"
				:class="{ '--mainVisible': mainVisible }"
			></div>
		</div>
	</button>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['mainVisible']),
	},
	methods: {
		...mapMutations(['SET_MAIN_VISIBLE']),
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
$padding: $page__padding - 0.3rem;
.toggle {
	position: absolute;
	top: $padding;
	z-index: 10;
	padding-bottom: 2.5rem;
	margin-bottom: 2rem;
	transform: translate3d(0, calc(-#{$padding * 2} - 100%), 0);
	@include transition((transform), 1s);
	&.--mainVisible {
		transform: translate3d(0, 0, 0);
	}
}

.chevron {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 2rem;
	height: 2rem;

	&__line {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-bottom: 2px solid white;
		@include transition((transform), 1s);
		&.--left {
			right: 50%;
			transform-origin: bottom right;
			animation: mainHiddenLeft 1s forwards;
			&.--mainVisible {
				animation: mainVisibleLeft 1s forwards;
			}
		}
		&.--right {
			left: 50%;
			transform-origin: bottom left;
			animation: mainHiddenRight 1s forwards;
			&.--mainVisible {
				animation: mainVisibleRight 1s forwards;
			}
		}
	}
}

// # ANIMATIONS
$rotation: 45deg;
$offsetY: 1rem;
$scale: 3;

//# LEFT
@keyframes mainHiddenLeft {
	0% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(#{$scale});
	}
	50% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(1);
	}
	100% {
		transform: translate3d(0, 0, 0) rotate(#{$rotation}) scaleX(1);
	}
}
@keyframes mainVisibleLeft {
	0% {
		transform: translate3d(0, 0, 0) rotate(#{$rotation}) scaleX(1);
	}
	50% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(1);
	}
	100% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(#{$scale});
	}
}

//# RIGHT
@keyframes mainHiddenRight {
	0% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(#{$scale});
	}
	50% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(1);
	}
	100% {
		transform: translate3d(0, 0, 0) rotate(-#{$rotation}) scaleX(1);
	}
}

@keyframes mainVisibleRight {
	0% {
		transform: translate3d(0, 0, 0) rotate(-#{$rotation}) scaleX(1);
	}
	50% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(1);
	}
	100% {
		transform: translate3d(0, -#{$offsetY}, 0) rotate(0deg) scaleX(#{$scale});
	}
}
</style>
