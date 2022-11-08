<template>
  <div>
    <h1>오늘 할일</h1>
    <div style="border-bottom:solid 1px gray">+ <input class="text-input" type="text" placeholder="할 일을 작성해주세요!" @keyup.enter="addTodo" v-model="inputV"></div>
    <div class="todo-list">
    <div class='todo' v-for="(todo, index) in todayTodos" :key="index">
      <div>
          <i style='color:gray;' class="bi bi-circle" v-if="!todo.isCompleted" @click="completeToggle(todo)"></i>
          <i style='color : rgb(1, 191, 77);' class="bi bi-check-circle" v-if="todo.isCompleted" @click="completeToggle(todo)"></i>
          {{ todo.content }}</div>
        <div>
          <i class="bi bi-star" v-if="todo.isImportant==false"></i>
          <i class="bi bi-star-fill" v-if="todo.isImportant==true"></i>
        </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: "TodayTodoPage",
  data() {
    return {
      inputV : null,
    }
  },
  computed: {
    todos() {
      return this.$store.state.list
    },
    todayTodos() {
      const today = new Date();

      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);

      const dateString = year + '-' + month  + '-' + day;
      // return dateString
      return this.todos.filter((todoItem)=>{
        return dateString == todoItem.dueDateTime.slice(0, 10)
      })
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.inputV)
      this.inputV = null
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

  .todo-list {
    margin-top : 30px;
  }

</style>