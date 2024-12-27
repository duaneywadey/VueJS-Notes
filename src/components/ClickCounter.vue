<template>
	<div>
		<button @click="incrementCount">Clicked {{ count }} times</button>
	</div>
</template>

<script>
	import CounterMixin from '../mixins/counter.js'
	export default {
		name: "ClickCounter",
		mixins: [CounterMixin],
	}
</script>