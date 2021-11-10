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
		position: relative;
		z-index: 5;
		pointer-events: none;
	}
}
</style>
