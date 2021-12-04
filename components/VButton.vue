<template>
	<button
		class="button"
		:class="{ '--active': isActive, '--shuffling': isShuffling }"
		@click.prevent="$emit('click')"
	>
		<div class="button__inner">
			<font-awesome-icon v-if="icon" class="button__icon" :icon="icon" />
			<span v-show="!icon" class="button__label" v-html="label"></span>
		</div>
		<div class="button__inner --fake">
			<span v-show="!icon" class="button__label" v-html="label"></span>
			<font-awesome-icon v-if="icon" class="button__icon" :icon="icon" />
		</div>
	</button>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		icon: {
			type: Array,
			default: null,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		isShuffling: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
$height: 4rem;
.button {
	position: relative;
	&__inner {
		height: $height;
		padding: 0 1.5rem;
		border: 1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
		&.--fake {
			@include fullsize--absolute;
			background-color: var(--color);
			clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
			@include transition((clip-path), 0.25s);
		}
	}
	&:hover .button__inner.--fake {
		clip-path: polygon(0 85%, 100% 85%, 100% 100%, 0 100%);
	}
	&.--shuffling .button__inner.--fake,
	&.--active .button__inner.--fake {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	&__label {
		color: inherit;
		font-size: 2rem;
		text-transform: uppercase;
		line-height: $height;
		margin-top: 0.2rem;
	}

	&__icon {
		height: 1.75rem;
		transform: translate3d(0, 0, 0) rotate(0deg);
		transform-origin: center center;
	}
	&.--shuffling .button__icon {
		animation: rotate 0.5s;
		@keyframes rotate {
			0% {
				transform: translate3d(0, 0, 0) rotate(0deg);
			}
			100% {
				transform: translate3d(0, 0, 0) rotate(360deg);
			}
		}
	}
}
</style>
