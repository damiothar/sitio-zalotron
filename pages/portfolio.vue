<template>
	<div class="page">
		<div class="container">
			<div class="column">
				<h1>Portfolio</h1>
				<Gallery />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${process.env.headTitle} | Portfolio`,
		};
	},
};
</script>

<style lang="scss" scoped>
.column {
	width: 40rem;
}
</style>
