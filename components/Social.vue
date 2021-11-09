<template>
	<div class="social">
		<ul class="social__list">
			<li class="social__item">
				<a class="social__link" :href="instagramUrl">
					<font-awesome-icon :icon="['fab', 'instagram']" />
					Instagram
				</a>
			</li>
			<li class="social__item">
				<a class="social__link" :href="linkedinUrl">
					<font-awesome-icon :icon="['fab', 'linkedin']" />
					LinkedIn
				</a>
			</li>
			<li class="social__item">
				<a class="social__link --twitch" :href="twitchUrl">
					<font-awesome-icon :icon="['fab', 'twitch']" />
					Twich
				</a>
			</li>
			<li class="social__item">
				<a class="social__link --youtube" :href="youtubeUrl">
					<font-awesome-icon :icon="['fab', 'youtube']" />
					YouTube
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Social',
	computed: {
		instagramUrl() {
			return process.env.INSTAGRAM_URL;
		},
		linkedinUrl() {
			return process.env.LINKEDIN_URL;
		},
		twitchUrl() {
			return process.env.TWITCH_URL;
		},
		youtubeUrl() {
			return process.env.YOUTUBE_URL;
		},
	},
};
</script>

<style lang="scss" scoped>
.social {
	&__list {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__item {
		margin-right: 2rem;
	}
	&__link {
		--size: 2.5rem;
		width: var(--size);
		height: var(--size);
		font-size: 0;
		display: block;
		opacity: 0.75;
		&:hover {
			opacity: 1;
		}

		&.--twitch {
			--size: 2.7rem;
			transform: translateY(0.2rem);
		}
		&.--youtube {
			--size: 3.2rem;
		}
	}
}
</style>
