<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in list"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          v-model="item.done"
          @click="changeChecked(index)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delTest(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions(['todolist/delTestFn']),
    ...mapActions(['todolist/updateListFn']),
    ...mapActions(['todolist/changeTodolistFn']),
    ...mapActions(['todolist/getListFn']),
    delTest(id) {
      this['todolist/delTestFn'](id)
    },
    changeChecked(index) {
      this.todolist[index].done = !this.todolist[index].done
      console.log(this.todolist[index].done)
      this['todolist/changeTodolistFn'](this.todolist)
    },
    getList() {
      this['todolist/getListFn']()
    }
  },
  computed: {
    todolist() {
      return this.$store.state.todolist.data
    }
  },
  created() {
    this.list = this.todolist
  }
}
</script>
