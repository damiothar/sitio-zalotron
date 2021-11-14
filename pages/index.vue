<template>
	<div class="page">
		<div class="page__center">
			<div class="intro" page="bottom">
				<h1>Home</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					atque officiis, in nulla fugit at animi aut pariatur ab deleniti
					ratione exercitationem commodi nihil, iste itaque ipsum adipisci non
					nostrum.
				</p>
				<button>Go</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Zalotron.net | Home',
		};
	},
};
</script>

<style lang="scss" scoped>
.page {
	&__center {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50vw;
	}
}
.intro {
	@include screen;
}
</style>
