<template>
  <header class="header">
    <h1 :style="`color:${color}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="test"
      @keyup.enter="addTest"
    />
  </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      test: ''
    }
  },
  methods: {
    ...mapActions(['todolist/addTestFn']),
    addTest() {
      this['todolist/addTestFn'](this.test)
      this.test = ''
    }
  },
  computed: {
    color() {
      return this.$store.state.todolist.color
    }
  }
}
</script>
