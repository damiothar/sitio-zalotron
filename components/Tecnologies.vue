<template>
	<ul class="tecnologies">
		<li
			v-for="tecnology in tecnologies"
			:key="tecnology"
			class="tecnologies__item"
		>
			<img :src="`/img/tecnologies/${tecnology}.png`" :alt="tecnology" />
		</li>
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
		tecnologies: {
			type: Array,
			required: true,
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.tecnologies {
	display: flex;
	&__item {
		width: auto;
		height: 50px;
		margin-left: 20px;
		img {
			object-fit: contain;
		}
	}
}
</style>
