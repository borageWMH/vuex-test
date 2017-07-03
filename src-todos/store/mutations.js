export default {
  GET_ALL_TODOS (state, {todos}) {
    state.todos = todos
  },

  ADD_TODO (state, {todo}) {
    state.todos.unshift(todo)
  },

  DELETE_TODO (state, {todo}) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  },

  DELETE_DONE (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  UPDATE_TODOS (state, {isDone}) {
    state.todos.forEach(todo => {
      todo.isDone = isDone
    })
  }
}