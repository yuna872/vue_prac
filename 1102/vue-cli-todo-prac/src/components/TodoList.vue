<template>
  <div>
    <h2>TodoList.vue</h2>
    <ul v-for="(todo, index) in todos" :key="index">
      <TodoLisfItem :todo="todo" @delete-todo='deleteTodo'/>
    </ul>
  </div>
</template>

<script>
import TodoLisfItem from '@/components/TodoLisfItem';
export default {
  name : 'TodoList',
  components: {
    TodoLisfItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(todo) {
      this.$emit('delete-todo', todo)
    }
  }
}
</script>

<style>
</style>