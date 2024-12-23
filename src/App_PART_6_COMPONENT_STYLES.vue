<script setup>
  import ChildStyles from './components/ChildStyles.vue'
</script>


<template>
  <h4>App Component Text</h4>
  <ChildStyles/>
</template>

<script>
export default {
    name: "App",
    components: {
      ChildStyles,
    },
    data () {
      return {}
    },
  }
</script>

<style scoped>
  h4 {
    color: orange;
  }
</style>

