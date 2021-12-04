<template>
	<div class="pesonal">
		<div
			class="personal__card"
			:class="{ '--clickable': isClickable, '--visible': isVisible }"
		>
			<div class="personal__content">
				<h1 class="title --small">Hey, my name is Zalotron !</h1>
				<p class="text">
					I'm a 3D/VFX Artist and Twich Streamer.<br />
					I build awesome worlds, like this one.<br />
					<strong>Let's build the next one together!</strong>
				</p>
			</div>
			<div class="personal__picture">
				<img src="/img/personal.jpg" alt="Zalotron" />
			</div>
		</div>
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			isClickable: false,
			isVisible: false,
		};
	},
	computed: {
		...mapState(['mainVisible', 'openTimeout', 'personalVisible']),
	},
	watch: {
		personalVisible(personalVisible) {
			if (personalVisible) this.open();
			else this.close();
		},
		mainVisible(mainVisible) {
			if (mainVisible) this.SET_PERSONAL_VISIBLE(false);
		},
	},
	methods: {
		...mapMutations(['SET_PERSONAL_VISIBLE']),
		open() {
			if (this.isVisible) return;
			this.isClickable = true;
			setTimeout(() => {
				this.isVisible = true;
			}, 100);
		},
		close() {
			if (!this.isVisible) return;
			this.isVisible = false;
			setTimeout(() => {
				this.isClickable = false;
			}, this.openTimeout);
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.personal {
	&__card {
		position: fixed;
		top: $page__padding - 1rem;
		left: $page__padding + 10rem;
		z-index: 10;
		@include background__glass;

		display: none;
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
		@include transition((clip-path), 0.5s);
		&.--clickable {
			display: flex;
			align-items: center;
		}
		&.--visible {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}

	&__content {
		flex: 1;
		margin-top: 0.5rem;
		margin-right: 2rem;
		padding-left: 2rem;
	}
	&__picture {
		width: 10rem;
		height: 14rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: left;
		}
	}
}
.title {
	margin-bottom: 1.5rem;
}
</style>
