<template>
	<div class="social">
		<ul class="social__list">
			<li class="social__item">
				<a class="social__link --twitch" target="_blank" :href="twitchUrl">
					<font-awesome-icon :icon="['fab', 'twitch']" />
					Twich
				</a>
			</li>
			<!-- <li class="social__item">
				<a class="social__link --youtube" target="_blank" :href="youtubeUrl">
					<font-awesome-icon :icon="['fab', 'youtube']" />
					YouTube
				</a>
			</li> -->
			<li class="social__item">
				<a class="social__link" target="_blank" :href="instagramUrl">
					<font-awesome-icon :icon="['fab', 'instagram']" />
					Instagram
				</a>
			</li>
			<li class="social__item">
				<a class="social__link" target="_blank" :href="linkedinUrl">
					<font-awesome-icon :icon="['fab', 'linkedin']" />
					LinkedIn
				</a>
			</li>
		</ul>
	</div>
</template>

//# ****************************************************************************
//# ****************************************************************************

<script>
export default {
	name: 'Social',
	computed: {
		instagramUrl() {
			return 'https://www.instagram.com/zalotron/';
		},
		linkedinUrl() {
			return 'https://www.linkedin.com/in/zalotron/';
		},
		twitchUrl() {
			return 'https://www.twitch.tv/zalotron';
		},
		youtubeUrl() {
			return 'https://www.youtube.com/c/Zalotron';
		},
	},
};
</script>

//# ****************************************************************************
//# ****************************************************************************

<style lang="scss" scoped>
.social {
	position: fixed;
	top: $page__padding;
	right: $page__padding;
	z-index: 10;

	&__list {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 -10px;
	}
	&__item {
		margin: 0 10px;
	}
	&__link {
		--size: 25px;
		width: var(--size);
		height: var(--size);
		font-size: 0;
		display: block;
		opacity: 0.75;
		&:hover {
			opacity: 1;
		}

		&.--twitch {
			--size: 27px;
			transform: translateY(2px);
		}
		&.--youtube {
			--size: 32px;
		}
	}
}
</style>
