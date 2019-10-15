import { DICA_API } from "@/services/dica";
export default {
  namespaced: true,
  state: {
    user: {
      email: "",
      first_name: "",
      last_name: "",
      pk: null,
      username: ""
    },
    isLogged: false
  },
  mutations: {
    setUser(state, user) {
      localStorage.setItem("first_name", user.first_name);
      localStorage.setItem("last_name", user.last_name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("pk", user.pk);
      localStorage.setItem("username", user.username);
      state.user = user;
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    setLogged(state, isLogged) {
      state.isLogged = isLogged;
    }
  },
  actions: {
    login({ commit }, payload) {
      return DICA_API.post("auth/login/", payload)
        .then(res => {
          commit("setToken", res.data.token);
          commit("setUser", res.data.user);
          localStorage.setItem("isLogged", true);
          commit("setLogged", true);
        })
        .catch(err => Promise.reject(err.response.data));
    },
    logout({ commit }) {
      localStorage.setItem("isLogged", false);
      commit("setUser", {
        email: "",
        first_name: "",
        last_name: "",
        pk: null,
        username: ""
      });
      commit("setToken", "");
      commit("setLogged", false);
    },
    registerUser({}, payload) {
      return DICA_API.post("users/", payload);
    }
  }
};
