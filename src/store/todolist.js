import todolist from '../数据'
export default {
  namespaced: true, // 命名空间
  state: {
    data: JSON.parse(localStorage.getItem('todolist')) || todolist,
    color: JSON.parse(localStorage.getItem('color')) || 'black',
    colorList: ['red', 'purple', 'green', 'yellow', 'blue'],
    list: []
  },
  mutations: {
    addTest(state, name) {
      const id = state.data[0]?.id + 1 || 1
      state.data.unshift({
        name,
        done: false,
        id
      })
      localStorage.setItem('todolist', JSON.stringify(state.data))
    },
    delTest(state, id) {
      state.data.splice(id, 1)
      localStorage.setItem('todolist', JSON.stringify(state.data))
    },
    changeColor(state, index) {
      const color = state.colorList[index]
      state.color = color
      localStorage.setItem('color', JSON.stringify(color))
    },
    changeTodolist(state, todolist) {
      localStorage.setItem('todolist', JSON.stringify(todolist))
    },
    changeList(state, list) {
      state.list = list
      localStorage.setItem('list', JSON.stringify(list))
    }
  },
  actions: {
    addTestFn(context, name) {
      context.commit('addTest', name)
    },
    delTestFn(context, id) {
      context.commit('delTest', id)
    },
    changeColorFn(context, index) {
      context.commit('changeColor', index)
    },
    changeTodolistFn(context, todolist) {
      context.commit('changeTodolist', todolist)
    },
    changeListFn(context, list) {
      context.commit('changeList', list)
    }
  },
  getters: {}
}
