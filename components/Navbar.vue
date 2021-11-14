<template>
	<nav class="navbar">
		<div class="container">
			<ul class="navbar__list">
				<li class="navbar__item">
					<NuxtLink class="navbar__link" :to="{ name: 'index' }">
						Home
					</NuxtLink>
				</li>
				<li class="navbar__item">
					<NuxtLink class="navbar__link" :to="{ name: 'projects' }">
						Projects
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.navbar {
	position: fixed;
	top: $page__padding;
	right: $page__padding;
	z-index: 10;
	&__list {
		display: flex;
		justify-content: flex-end;
	}
	&__item {
		margin-left: 2rem;
	}
	&__link {
		text-decoration: none;
		font-size: 2rem;
		opacity: 0.75;
		&:hover {
			opacity: 1;
		}
		&.--exactActive {
			opacity: 1;
			text-decoration: underline;
		}
	}
}
</style>
