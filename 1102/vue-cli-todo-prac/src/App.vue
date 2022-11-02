<template>
  <div id="app">
    <h1>App.vue</h1>
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
    <TodoForm @create-todo="createTodo"/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    createTodo(todoTitle) {
      const todo = {
        title: todoTitle
      }
      this.todos.push(todo)
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo)
      // index에 해당하는 원소 하나 빼고 새로운 Todos를 만들어서 다시 저장
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: solid 3px black;
}
</style>
