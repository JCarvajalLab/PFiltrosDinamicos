import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },
  actions: {
  },
  modules: {
  }
})
