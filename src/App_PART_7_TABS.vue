<script setup>
  import TabA from './components/TabA.vue'
  import TabB from './components/TabB.vue'
  import TabC from './components/TabC.vue'
</script>


<template>

  <!-- Buttons -->
  <button @click="activeTab = 'TabA'">TabA</button>
  <button @click="activeTab = 'TabB'">TabB</button>
  <button @click="activeTab = 'TabC'">TabC</button>

  <!-- Components to be shown -->
  <!-- <TabA v-if="activeTab === 'TabA'" /> -->
  <!-- <TabB v-if="activeTab === 'TabB'" /> -->
  <!-- <TabC v-if="activeTab === 'TabC'" /> -->

  <!-- Shortcut -->
  <keep-alive>
    <component :is="activeTab"/>
  </keep-alive>

</template>

<script>
export default {
    name: "App",
    components: {
      TabA,
      TabB,
      TabC,
    },
    data () {
      return {
        activeTab: 'TabA'
      }
    },
  }
</script>

<style scoped>
  h4 {
    color: orange;
  }
</style>

