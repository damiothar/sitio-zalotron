<template>
	<main class="main">
		<h2 class="title">Portfolio</h2>
		<VFilter />
	</main>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
export default {
	head() {
		return {
			title: 'Zalotron.net | Home',
		};
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.main {
	margin-bottom: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title {
	margin-bottom: 2rem;
}
</style>
