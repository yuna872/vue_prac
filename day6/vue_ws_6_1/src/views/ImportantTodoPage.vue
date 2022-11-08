<template>
  <div>
    <h1>중요 할일</h1>
    <div style="border-bottom:solid 1px gray">+ <input class="text-input" type="text" placeholder="할 일을 작성해주세요!" @keyup.enter="addImportantTodo" v-model="inputV"></div>
  <div class="todo-list">
    <div class='todo' v-for="(todo, index) in importantTodo" :key="index">
      <div>
          <i style='color:gray;' class="bi bi-circle" v-if="!todo.isCompleted" @click="completeToggle(todo)"></i>
          <i style='color : rgb(1, 191, 77);' class="bi bi-check-circle" v-if="todo.isCompleted" @click="completeToggle(todo)"></i>
          {{ todo.content }}</div>
          <div>
          <i class="bi bi-star" v-if="!todo.isImportant" @click="importantToggle(todo)"></i>
          <i class="bi bi-star-fill" v-if="todo.isImportant" @click="importantToggle(todo)"></i>
          </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'ImportantTodoPage',
  data() {
    return {
      inputV : null,
    }
  },
  computed: {
    todos() {
      return this.$store.state.list
    },
    importantTodo() {
      return this.todos.filter((todoItem)=> todoItem.isImportant == true)
    }
  },
  methods: {
    addImportantTodo(){
      this.$store.commit('addImportantTodo', this.inputV)
      this.inputV = null
    },
    importantToggle(todo) {
      this.$store.commit('importantToggle', todo)
    },
    completeToggle(todo) {
      this.$store.commit('completeToggle', todo)
    }

  }
}
</script>

<style>
  .todo {
    border : solid 1px gray;
    border-radius: 8px;
    height : 60px;
    display: flex;
    align-items: center;
    padding : 15px;
    margin : 10px;
    box-shadow: 1px 1px 1px gray;
  }

  .all-todo-list {
    margin-top : 30px;
  }

</style>