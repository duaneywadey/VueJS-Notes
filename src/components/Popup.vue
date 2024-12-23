<template>
	<div>
		<h1>This is a popup</h1>
		<input type="text" v-model="name" />
		<button @click="$emit('close', name)">Close Popup</button>
	</div>
</template>

<script>
	export default {
		name: 'Popup',
		emits: {
			close: (name) => {
				if (!name) {
					return false
				}
				else {
					return true
				}
			},
		},
		data() {
			return {
				name: '',
			}
		},
	}
</script>