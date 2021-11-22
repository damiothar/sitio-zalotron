<template>
	<div id="canvas" ref="canvas"></div>
</template>

// # ***************************************************************************
// # ***************************************************************************

<script>
import utilities from '~/mixins/utilities';
import functions from '~/mixins/functions';
import three from '~/mixins/three';
import materials from '~/mixins/materials';
import world from '~/mixins/world';
import animations from '~/mixins/animations';

export default {
	name: 'Three',
	mixins: [utilities, functions, three, materials, world, animations],
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
