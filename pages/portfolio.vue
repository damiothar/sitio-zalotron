<template>
	<div class="page">
		<div class="container">
			<div class="column">
				<h1>Portfolio</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					atque officiis, in nulla fugit at animi aut pariatur ab deleniti
					ratione exercitationem commodi nihil, iste itaque ipsum adipisci non
					nostrum.
				</p>
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
