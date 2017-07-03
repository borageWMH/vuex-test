import storageUtil from '../util/storageUtil'

function getAllTodos({commit}) {
  setTimeout(() => {
    const todos = storageUtil.fetch()
    commit('GET_ALL_TODOS', {todos})
  }, 1000)
}

// 添加todo
function addTodo ({commit}, todo) {
  commit('ADD_TODO', {todo})
}
// 删除指定todo
function deleteTodo ({commit}, todo) {
  commit('DELETE_TODO', {todo})
}
// 删除所有完成的todo
function deleteDone ({commit}) {
  commit('DELETE_DONE')
}
// 将所有todo设置为指定状态
function updateTodos ({commit}, isDone) {
  commit('UPDATE_TODOS', {isDone})
}
export default {
  getAllTodos,
  addTodo,
  deleteTodo,
  deleteDone,
  updateTodos
}

