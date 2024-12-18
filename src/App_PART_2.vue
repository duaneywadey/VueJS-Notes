<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import Greet from './components/Greet.vue'
</script>

<template>
  <Greet name="Bruce"></Greet>
  <Greet name="Clark"></Greet>
  <Greet name="Diana"></Greet>
</template>

<template>
  <div style="display: block;">

    <!-- Calculated Properties -->
    <h1>Computed {{fullName}}</h1>
    <button @click="changeFullName">Change Full Name</button>
    <button @click="items.push({id:4, title:'Keyboard', price: 50})">Add Item</button>

    <h2>Computed Total: {{total}}</h2>
    <h2>Method Total: {{getTotal()}}</h2>

    <!-- Iterating through items -->
    <template v-for="item in items" :key="item.id">
      <h2>{{item.title}} {{item.price}}</h2>
    </template>

    <!-- Iterating only through expensive items -->
    <h1>Expensive Items</h1>
    <template v-for="item in expensiveItems" :key="item.id">
      <h2>{{item.title}}{{item.price}}</h2>
    </template>

    <h1>Current Volume: {{currentVolume}}</h1>
    <div>
      <button @click="currentVolume += 2">Increase Volume</button>
      <button @click="currentVolume -= 2">Decrease Volume</button>
    </div> 

  </div>
</template>

<script>
export default {
    name: "App",
    components: {
      Greet,
    },
    data() {
      return {
        currentVolume: 0,
        firstName: "Bruce",
        lastName: "Wayne",
        items: [
          {
            id:1,
            title: 'TV',
            price: 100,
          },
          {
            id:2,
            title: 'Phone',
            price: 200,
          },
          {
            id:3,
            title: 'Smartphone',
            price: 300,
          },
        ]
      }
    },
    methods: {
      getTotal() {
        console.log("getTotal Method")
        return this.items.reduce((total, curr) => (total = total + curr.price), 0)
      },
      changeFullName() {
        this.fullName = "Ivan Duane Dequito";
      }
    },
    computed: {
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`
        },
        set(value) {
          const names = value.split(' ')
          this.firstName = names[1]
          this.lastName = names[2]
        }
      },
      total() {
        return this.items.reduce((total, curr) => (total = total + curr.price), 0)
      },
      expensiveItems() {
        return this.items.filter( item => item.price > 100)
      },
    },
    watch: {
      currentVolume(newValue, oldValue) {
        if(newValue > oldValue && newValue === 16) {
          alert("Listening in high volume may damage your hearing!");
        }
      }
    }

  }

</script>

