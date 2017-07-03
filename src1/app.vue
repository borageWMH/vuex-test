<template>
  <div>
      <p>clicked: {{count}} times, counter is {{evenOrOdd}}</p>
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>


  import{mapGetters,mapActions} from 'vuex'
  /*
  * mapGetters() ：生成computed 对象
  * mapActions() : 生成methods 对象
  * 参数：
  * {"name1","name2"}  name：既是回调函数名，也是action函数
  * {cbname:"actionName"} 属性名是回调函数名，属性值是action函数名
  * */
  export default ({
    computed : mapGetters(['count','evenOrOdd']),
    methods: mapActions({
      increment:'increment',
      decrement:'decrement',
      incrementIfOdd:'incrementIfOdd',
      incrementAsync:'incrementAsync'
    })
  })

 /*export default({
   computed :{
       count (){
           return this.$store.getters.count
       },
     evenOrOdd (){
           return this.$store.getters.evenOrOdd
     }
   },
   methods :{
     increment(){
         this.$store.dispatch('increment')
     },
     decrement(){
       this.$store.dispatch('decrement')
     },
     incrementIfOdd(){
       this.$store.dispatch('incrementIfOdd')
     },
     incrementAsync(){
       this.$store.dispatch('incrementAsync')
     }
   }
 })*/




</script>
