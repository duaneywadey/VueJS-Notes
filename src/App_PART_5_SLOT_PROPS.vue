<script setup>
  import NameList from './components/NameList.vue'
</script>


<template>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }} {{ slotProps.age }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }} {{ slotProps.firstName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }}, {{ slotProps.age }}
    </template>
  </NameList>

</template>

<script>
export default {
    name: "App",
    components: {
      NameList,
    },
    data () {
      return {}
    },
    methods: {},
  }

</script>

