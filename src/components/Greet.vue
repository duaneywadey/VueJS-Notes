<template>
	<h1>Hello {{name}} AKA {{heroName}}</h1>
</template>

<script>
	export default {
		name: "Greet", 
		props: ['name', 'heroName']
	}
</script>