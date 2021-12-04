<template>
	<ul class="tecnologies">
		<li
			v-for="tecnology in tecnologies"
			:key="tecnology"
			class="tecnologies__item"
			:class="`--${tecnology}`"
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
	align-items: center;
	&__item {
		width: auto;
		height: 4rem;
		margin-left: 2rem;
		&.--3ds-max {
			height: 3.7rem;
		}
		&.--after-effects {
			height: 4.1rem;
		}
		img {
			object-fit: contain;
		}
	}
}
</style>
