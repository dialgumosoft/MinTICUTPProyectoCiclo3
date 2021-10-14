import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const jwtToken = new Vuex.Store({
  state: {
    token: "",
  },

  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
  },
});

export default jwtToken;
