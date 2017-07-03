var STORAGE_KEY = 'todos'
export default {
  fetch () {
    console.log('fetch()')
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (todos) {
    console.log('save()')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
