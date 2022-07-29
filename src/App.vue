<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},

  methods: {
    ...mapActions(['todolist/changeColorFn']),
    changeColor() {
      const index = Math.floor(Math.random(0, 1) * 5)
      this['todolist/changeColorFn'](index)
    }
  }
}
</script>

<style scoped></style>
