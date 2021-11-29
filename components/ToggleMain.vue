<template>
	<button
		class="toggle"
		:class="{ '--mainVisible': mainVisible }"
		@click.prevent="SET_MAIN_VISIBLE(!mainVisible)"
	>
		<div class="toggle__title">Portfolio</div>
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
.toggle {
	position: absolute;
	top: $page__padding;
	z-index: 10;
	padding-bottom: 25px;
	margin-bottom: 20px;
	transform: translate3d(0, calc(-#{$page__padding * 2} - 100%), 0);
	@include transition((transform), 1s);
	&.--mainVisible {
		transform: translate3d(0, 0, 0);
	}
	&__title {
		font-size: 32px;
		text-transform: uppercase;
		line-height: 1.2;
	}
}

.chevron {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 20px;
	height: 20px;

	&__line {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-bottom: 3px solid white;
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
$offsetY: 10px;
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
