<script setup>
  import CreatePost from './components/CreatePost.vue'
  import PostList from './components/PostList.vue'
</script>


<template>
  <CreatePost />
  <PostList />
</template>

<script>
export default {
    name: "App",
    components: {
      CreatePost,
    },
    data () {
      return {

      }
    },
  }
</script>

<style scoped>
</style>

