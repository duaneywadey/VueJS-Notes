<script setup>
  import PostList from './components/PostList.vue'
</script>


<template>
  <PostList />
</template>

<script>
export default {
    name: "App",
    components: {
      PostList,
    },
    data () {
      return {

      }
    },
  }
</script>

<style scoped>
</style>

