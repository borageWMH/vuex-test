<template>
  <div>
    <p>clicked: {{$store.state.count}} times, counter is {{evenOrOdd}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  /*
   export default {
   computed: {
   evenOrOdd () {
   return this.$store.getters.evenOrOdd
   }
   },
   methods: {
   increment () {
   this.$store.dispatch('increment')
   },

   decrement () {
   this.$store.dispatch('decrement')
   },

   incrementIfOdd () {
   this.$store.dispatch('incrementIfOdd')
   },

   incrementAsync () {
   this.$store.dispatch('incrementAsync')
   }
   }
   }
   */

  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters({
      evenOrOdd: 'evenOrOdd'
    }),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>