<template>
	<ul class="tags">
		<li v-for="tag in tags" :key="tag" class="tags__item">#{{ tag }}</li>
	</ul>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
export default {
	filters: {
		wordToNumber(word) {
			if (word.includes('three')) return word.replace('three', '3');
			else return word;
		},
	},
	props: {
		tags: {
			type: Array,
			required: true,
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.tags {
	$height: 3rem;
	display: flex;
	&__item {
		height: $height;
		padding: 0 0.75rem;
		background: var(--color);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 1.8rem;
		line-height: $height;
		margin-right: 1rem;
	}
}
</style>
