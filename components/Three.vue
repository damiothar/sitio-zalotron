<template>
	<div id="canvas"></div>
</template>

// # ***************************************************************************
// # ***************************************************************************

<script>
import utilities from '~/mixins/utilities';
import three from '~/mixins/three';
import world from '~/mixins/world';
import animations from '~/mixins/animations';

export default {
	name: 'Three',
	mixins: [utilities, three, world, animations],
};
</script>

// # ***************************************************************************
// # ***************************************************************************

<style lang="scss" scoped>
#canvas {
	@include fullsize--fixed;
	z-index: 1;
}
</style>
