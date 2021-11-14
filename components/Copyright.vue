<template>
	<div class="copyright">
		<div class="copyright__text">{{ `&copy; Zalotron ${year}` }}</div>
	</div>
</template>

<script>
export default {
	name: 'Copyright',
	computed: {
		year() {
			const date = new Date();
			return date.getFullYear();
		},
	},
};
</script>

<style lang="scss">
.copyright {
	position: fixed;
	right: $page__padding;
	bottom: $page__padding;
	&__text {
		font-size: 1.6rem;
		text-align: center;
	}
}
</style>
