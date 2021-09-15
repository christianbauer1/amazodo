import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Wake Lena up",
        done: false,
      },
      {
        id: 3,
        title: "Eat breakfast",
        done: false,
      },
    ],
    snackbar: {
      show: false
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      //hole den gewählten task aus dem array der tasks
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state) {
      state.snackbar.show = true;
    }
  },
  actions: {
    //in einer mutation kann man keine anderen mutations aufrufen
    //wie methoden, das muss man hier machen
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar');
    }
  },
  getters: {
  },
  modules: {
  }
})
