<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;">全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="unComplete">未完成</a>
      </li>
      <li>
        <a href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      unCompleteList: []
    }
  },
  methods: {
    ...mapActions(['todolist/changeListFn']),
    unComplete() {
      this.unCompleteList = this.$store.state.todolist.data.filter(
        (ele) => ele.done === false
      )
      this['todolist/changeListFn'](this.unCompleteList)
    }
  }
}
</script>
