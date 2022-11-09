### App.vue
```javascript
<template>
  <div id="app">
    <SideBar />
    <main>
      <div class="container">
        <router-view/>
        <!-- <AllTodoList/> -->
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
// import AllTodoList from '@/components/AllTodoList';
// import AllTodoPage from '@/views/AllTodoPage';

export default {
  components: {
    SideBar,
  }
}
</script>


<style>
#app {
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 1rem;
  padding: 3rem;
}

main {
  border-radius: .5rem;
  border: 2px solid #2c3e50;
  padding: 2rem 1.25rem;
}
</style>

```

### index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
// import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1638771553377,
        content: 'Vue',
        dueDateTime: '2021-12-11T16:05',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-11T16:05',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T16:05',
        isCompleted: true,
        isImportant: false,
      },
    ],
  },
  mutations: {
    addTodo(state, inputV){
      const today = new Date();

      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);

      const dateString = year + '-' + month  + '-' + day;

      state.list.push({id:today.getTime(), content:inputV, dueDateTime:dateString, isCompleted:false, isImportant:false})
    },
    addImportantTodo(state, inputV){
      const today = new Date();

      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);

      const dateString = year + '-' + month  + '-' + day;

      state.list.push({id:today.getTime(), content:inputV, dueDateTime:dateString, isCompleted:false, isImportant:true})
     
    },
    importantToggle(state, todoItem){
      state.list = state.list.map((todo)=> {
        if (todo === todoItem) {
          todo.isImportant = !todo.isImportant
        }
        return todo
      })
    },
    completeToggle(state, todoItem){
      state.list = state.list.map((todo)=> {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }
  }
   
})

```

### AllTodoPage.vue
```javascript
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
```
### ImportantTodoPage.vue
```javascript
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
```
### TodayTodoPage.vue
```javascript
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
```
