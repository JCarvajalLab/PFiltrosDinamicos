// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    logueado: false,
    correoElectronico: '',
    tasks: [] // Agregamos un nuevo estado para almacenar las tareas
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.logueado = payload.logueado;
      state.correoElectronico = payload.correoElectronico;
    },
    cerrarSesion(state) {
      state.logueado = false;
      state.correoElectronico = '';
    },
    addTask(state, task) { // Agregamos la nueva mutación
      state.tasks.push(task);
    }
  },
  actions: {
  },
  modules: {
  }
})