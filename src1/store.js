import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count : 0
}

/*

  包含多个  todo 直接更新state的方法(回调函数)的对象
  谁来触发: action中的commit('mutation名称')
  只能包含同步的代码, 不能写异步代码
*/

const mutations = {
    INCREMENT(state){ // 此时虽然可以直接操作上面state中的count ，但是不应该直接操作，用传参的方法来操作
      state.count++
    },
    DECREMENT(state){
      state.count--
    }

}

/*
  包含多个事件回调函数的对象
 通过执行: commit()来触发mutation的调用, todo 间接更新state
 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
 可以包含异步代码(定时器, ajax)
*/
/*
* action 对象，
* 1.包含多个方法，一个action就是一个方法
* 2，有组件触发调用，$store.dispatch(actionName)
* 3. 处理逻辑，调用mutation去更新状态，commit（mutationName）
* */
const actions = {
      increment({commit}){
        commit('INCREMENT')
      },
      decrement({commit}){
        commit('INCREMENT')
      },
      incrementIfOdd({commit,state}){
        if(state.count%2 === 1){
          commit('INCREMENT')
        }
      },
    incrementAsync({commit}){
        setTimeout(() =>{
          commit('INCREMENT')
        },1000)
    }
}

// 包含多个计算属性（只有get）的对象
const getters = {
  count (state){
    return state.count
  },
 evenOrOdd(state){
   return  state.count %2 === 0 ? 'even' : 'old'
 }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
