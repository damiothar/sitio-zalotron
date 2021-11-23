<template>
	<button
		class="button"
		:class="{ '--active': isActive }"
		@click.prevent="$emit('click')"
	>
		<div class="button__label">
			{{ label }}
		</div>
		<div class="button__label --fake">
			{{ label }}
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
		isActive: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.button {
	position: relative;
	&__label {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 1rem 2rem;
		border: 1px solid white;
		line-height: 1;
		&.--fake {
			@include fullsize--absolute;
			background-color: white;
			color: black;
			font-weight: 700;

			clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
			@include transition((clip-path), 0.25s);
		}
	}
	&:hover .button__label.--fake {
		clip-path: polygon(0 85%, 100% 85%, 100% 100%, 0 100%);
	}
	&.--active .button__label.--fake {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}
}
</style>
