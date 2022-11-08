<template>
  <div>
    <h1>모든 할일</h1>

    <div style="border-bottom:solid 1px gray"> + <input class="text-input" type="text" placeholder="할 일을 작성해주세요!" @keyup.enter="addTodo" v-model="inputV"></div>
    <div class="todo-list">
    <div class='todo' v-for="todo in todos" :key="todo.id">
        <!-- {{ todo.content }} -->
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
  name: 'AllTodoPage',
  data() {
    return{
      inputV : null,
    }
  }, 
  computed: {
    todos() {
      return this.$store.state.list
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.inputV)
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
    display: flex;
    justify-content: space-between;
  }

  .todo-list {
    margin-top : 30px;
  }

  .text-input {
    width : 90%;
    margin: 10px 10px; 
  }

  .todoItems{
    display: flex;
  }

  i{
    color : rgb(251, 223, 9)
  }

</style>