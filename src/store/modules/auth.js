import { DICA_API } from "@/services/dica";
export default {
  namespaced: true,
  state: {
    user: {
      email: localStorage.getItem("email") || "",
      first_name: localStorage.getItem("first_name") || "",
      last_name: localStorage.getItem("last_name") || "",
      pk: localStorage.getItem("pk") || "",
      username: localStorage.getItem("username") || ""
    },
    token: localStorage.getItem("token") || null,
    isLogged: localStorage.getItem("isLogged") || false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
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
          localStorage.setItem("isLogged", true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("first_name", res.data.user.first_name);
          localStorage.setItem("last_name", res.data.user.last_name);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("pk", res.data.user.pk);
          localStorage.setItem("username", res.data.user.username);
          commit("setToken", res.data.token);
          commit("setUser", res.data.user);
          commit("setLogged", true);
        })
        .catch(err => Promise.reject(err.response.data));
    },
    logout({ commit, state }) {
      return DICA_API.post("auth/logout/", {
        headers: {
          Authorization: `Token ${state.token}`
        }
      }).then(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("pk");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("isLogged");
        commit("setUser", {
          email: "",
          first_name: "",
          last_name: "",
          pk: null,
          username: ""
        });
        commit("setToken", null);
        commit("setLogged", false);
      });
    },
    registerUser({}, payload) {
      return DICA_API.post("users/", payload);
    },
    updateUserData({ state }, payload) {
      return DICA_API.patch(`users/${state.user.pk}/`, payload, {
        headers: {
          Authorization: `Token ${state.token}`
        }
      });
    },
    changePassword({}, payload) {
      return DICA_API.post("auth/password/change/", {
        new_password1: payload.password,
        new_password2: payload.password_confirmation
      });
    },
    getUserData({ state }) {
      return DICA_API.get(`users/${state.user.pk}/`, {
        headers: {
          Authorization: `Token ${state.token}`
        }
      });
    }
  }
};
