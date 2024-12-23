<template>
	<h2>Component E</h2>
	<h2>Component E {{ username }}</h2>
    <ComponentF/>
</template>

<script>
	import ComponentF from './ComponentF.vue'
	export default {
		name: 'ComponentE',
		inject: ['username'],
		components: {
			ComponentF,
		},
	}
</script>