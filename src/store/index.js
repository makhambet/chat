import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: null
  },
  mutations: {
    SET_USER_NAME (state, payload) {
      state.userName = payload;
    }
  },
  actions: {
    GET_USER_NAME ({commit}, payload) {
      if(payload) {
        localStorage.setItem('userName', payload);
        commit('SET_USER_NAME', payload);
      }
      else {
        let name = localStorage.getItem('userName') || 'Кто-то';
        commit('SET_USER_NAME', name);
      }
    }
  },
  modules: {
  }
})
