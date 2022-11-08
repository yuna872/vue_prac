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
