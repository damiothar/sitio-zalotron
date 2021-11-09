<template>
	<div id="app">
		<Navbar />
		<Nuxt />
		<Footer />
		<Three />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
	@include fullsize--fixed;
	overflow: hidden;

	.page {
		@include fullsize--fixed;
		padding: $navbar__height 0 $footer__height;
		display: flex;
		flex-direction: column;
	}
}
</style>
