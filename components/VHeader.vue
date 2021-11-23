<template>
	<header class="header">
		<Social />
		<Three :hue="hue" />
	</header>
</template>

<script>
export default {
	props: {
		hue: {
			type: String,
			required: true,
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.header {
	position: relative;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	.social {
		position: absolute;
		top: $page__padding;
		right: $page__padding;
		z-index: 2;
	}
}
</style>
