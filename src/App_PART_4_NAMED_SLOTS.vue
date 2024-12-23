<script setup>
  import Card from './components/Card.vue'
</script>


<template>
  <Card>Card Content Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ex cupiditate ad mollitia consequatur, eveniet possimus earum eos quam, dignissimos adipisci odio, excepturi maiores velit magni quo aperiam, delectus esse placeat.</Card>
  <Card>
    <h2>Card Content - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, libero. Ea quisquam distinctio et, perspiciatis sit atque, soluta voluptatibus sed nihil earum consequuntur ex excepturi accusamus ipsam provident dolores doloremque?</h2>
  </Card>
  <Card>
    <img src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="200" height="200" style="width: 100%;">
  </Card>

  <Card>
    <template v-slot:header><h1>Header</h1></template>
    <template v-slot:default><img src="https://plus.unsplash.com/premium_photo-1671439429636-6d8d66247143?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style="width: 100%;"></template>
    <template v-slot:footer><button>View Details</button></template>
  </Card>
</template>

<script>
export default {
    name: "App",
    components: {
      Card,
    },
    data () {
      return {}
    },
    methods: {},
  }

</script>

