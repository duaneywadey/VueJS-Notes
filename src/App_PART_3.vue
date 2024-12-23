<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import Greet from './components/Greet.vue'
  import Article from './components/Article.vue'
  import ComponentC from './components/ComponentC.vue'
  import Popup from './components/Popup.vue'
</script>

<!-- <template>
  <Greet name="Bruce" heroName="Batman"></Greet>
  <Greet name="Clark" heroName="Superman"></Greet>
  <Greet name="Diana" heroName="Wonder Woman"></Greet>
</template>
 -->

<!-- <template>
  <Article title="Hello its title" :likes="50" :isPublished="false"/>
</template> -->

<!-- 
<template>
  <h3>AppComponent username</h3>
  <ComponentC/>
</template> -->

<template>
  <button @click="showPopup = true ">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup"/>
</template>

<script>
export default {
    name: "App",
    components: {
      // Greet,
      // Article,
      Popup,
    },
    data() {
      return {
        showPopup: false,
        username: "Vishwas",
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
    provide() {
      return {
        username: this.username,
      }
    },
    methods: {
      getTotal() {
        console.log("getTotal Method")
        return this.items.reduce((total, curr) => (total = total + curr.price), 0)
      },
      changeFullName() {
        this.fullName = "Ivan Duane Dequito";
      },
      closePopup(name) {
        this.showPopup = false
        console.log("name", name)
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

