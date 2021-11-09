<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__grid">
				<Social />
				<Copyright />
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
	@include fullwidth--fixed;
	bottom: 0;
	height: $footer__height;
	display: flex;
	align-items: center;
	&__grid {
		display: flex;
		justify-content: space-between;
	}
}
</style>
