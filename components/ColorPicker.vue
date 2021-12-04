<template>
	<div class="picker">
		<input
			class="picker__range"
			type="range"
			min="0"
			max="360"
			@input="onInput"
		/>
		<!-- <div class="picker__preview"></div> -->
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
export default {
	methods: {
		onInput(event) {
			this.value = event.target.value;
			this.$emit('input', this.value);
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.picker {
	position: fixed;
	bottom: $page__padding;
	right: $page__padding;
	z-index: 10;
	width: 20rem;
}
</style>
