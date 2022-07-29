import Vue from 'vue'
import Vuex from 'vuex'
import todolist from './todolist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todolist
  }
})
