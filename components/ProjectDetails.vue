<template>
	<div class="details" :class="{ '--clickable': isClickable }">
		<client-only>
			<vimeo-player
				ref="player"
				class="details__iframe"
				:class="{ '--open': isOpen }"
				:options="vimeoOptions"
				:video-id="project.vimeoId"
				@ready="onPlayerReady"
				@loaded="onPlayerLoaded"
			/>
		</client-only>
		<div class="details__content" :class="{ '--open': isOpen }">
			<div class="details__top">
				<h2 class="title">{{ project.title }}</h2>
				<p class="text">{{ project.description }}</p>
			</div>
			<div class="details__bottom">
				<Tags v-if="project.tags" :tags="project.tags" />
				<Tecnologies
					v-if="project.tecnologies"
					:tecnologies="project.tecnologies"
				/>
			</div>
		</div>
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
import { mapState } from 'vuex';
import utilities from '~/mixins/utilities';

export default {
	mixins: [utilities],
	data() {
		return {
			isReady: false,
			isClickable: false,
			isOpen: false,
			project: null,

			vimeoOptions: {
				autoplay: false,
				muted: false,
				loop: true,
			},
		};
	},
	computed: {
		...mapState(['projects', 'openTimeout', 'openProject', 'color']),
	},
	watch: {
		openProject(openProject) {
			// # OPEN
			if (openProject !== null) this.open(openProject);
			else this.close();
		},
		'color.hue'() {
			this.setPlayerColor();
		},
	},
	created() {
		this.project = this.projects[0];
	},
	methods: {
		open(openProject) {
			if (this.isOpen) return;
			this.project = openProject;
			this.isClickable = true;
			setTimeout(() => {
				this.isOpen = true;
				if (this.isReady) this.$refs.player.play();
			}, this.openTimeout);
		},
		close() {
			if (!this.isOpen) return;
			this.isOpen = false;
			if (this.isReady) this.$refs.player.pause();
			setTimeout(() => {
				this.isClickable = false;
			}, this.openTimeout);
		},
		setPlayerColor() {
			const hex = this.hslToHex(
				this.color.hue,
				this.color.saturation,
				this.color.lightness
			);
			this.$refs.player.player.setColor(hex);
		},
		onPlayerLoaded() {
			console.log('loaded');
			this.setPlayerColor();
		},
		onPlayerReady() {
			this.isReady = true;
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.details {
	@include fullsize--absolute;
	z-index: 10;
	display: none;
	flex-direction: column;
	&.--clickable {
		display: flex;
	}
	&__iframe {
		@include aspectRatio--16x9;
		opacity: 0;
		@include transition((opacity), 0.5s);
		&.--open {
			opacity: 1;
		}
	}
	&__content {
		flex: 1;
		padding: $page__padding - 1.5rem;
		background-color: rgba(white, 0.15);
		display: flex;
		flex-direction: column;

		clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
		@include transition((clip-path), 0.3s);
		&.--open {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
	&__top {
		flex: 1;
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
}

.title {
	margin-bottom: 2rem;
}
.text {
	margin-bottom: 2rem;
}
</style>
