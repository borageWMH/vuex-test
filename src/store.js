import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
  count : 0
}
// 包含多个直接更新state的方法(回调函数)的对象,不能写异步的操作
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }

}
/*包含多个事件回调函数的对象
 通过执行: commit()来触发mutation的调用, 间接更新state
 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
 可以包含异步代码(定时器, ajax)
 * */
const actions =  {
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    if(state.count%2=== 0){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(() =>{
      commit('INCREMENT')
    },1000)
  }
}

const getters = {
  count(state){
    return state.count
  },
  evenOrOdd(state){
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}




export  default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
