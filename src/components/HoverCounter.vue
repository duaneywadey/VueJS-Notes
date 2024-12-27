<template>
  <div>
    <button @mouseover="incrementCount">Hovered {{ count }} times</button>
  </div>
</template>

<script>
  import CounterMixin from '../mixins/counter.js'
  export default {
    name: "HoverCounter",
    mixins: [CounterMixin],
  }
</script>