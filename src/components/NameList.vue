<template>
  <h1 v-for="name in names" :key="name" style="color: blue;">
    <slot :firstName="name.firstName" :lastName="name.lastName" :age="name.age"></slot>
  </h1>  
</template>

<script>
export default {
    name: "NameList",
    data() {
      return {
        names: [
          {
            firstName: "Bruce",
            lastName: "Wayne",
            age: 21,
          },
          {
            firstName: "Clark",
            lastName: "Kent",
            age: 42,
          },
          {
            firstName: "Princess",
            lastName: "Diana",
            age: 46,
          },
        ],
      };
    },
    methods: {},
  }

</script>

