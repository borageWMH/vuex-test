<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone"/>
    </label>
    <span>
      <span>已完成{{doneCount}}</span> / 全部{{totalCount}}
    </span>
    <button class="btn btn-danger" @click="deleteDone" v-show="doneCount>0">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {

    methods: {
      deleteDone () {
        this.$store.dispatch('deleteDone')
      }
    },

    computed: {
      ... mapGetters(['doneCount', 'totalCount']),
      isAllDone: {
        get () {
          return this.$store.getters.isAllComplete
        },
        set (value) {
          this.$store.dispatch('updateTodos', value)
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
