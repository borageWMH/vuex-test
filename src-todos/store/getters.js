export default {

  todos (state) {
    return state.todos
  },

  totalCount (state) {
    return state.todos.length
  },

  doneCount (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.isDone ? 1 : 0)
    }, 0)
  },

  isAllComplete (state, getters) {
    return getters.totalCount===getters.doneCount && getters.totalCount>0
  }
}