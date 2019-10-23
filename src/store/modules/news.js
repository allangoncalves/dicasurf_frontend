import { DICA_API } from "@/services/dica";

export default {
  namespaced: true,
  state: {
    posts: [],
    next: "posts"
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setNext(state, next) {
      state.next = next;
    }
  },
  actions: {
    async getPosts({ commit }) {
      return await DICA_API.get("/posts", {
        params: {
          limit: 3,
          offset: 0
        }
      }).then(res => {
        commit("setPosts", res.data.results);
        commit("setNext", res.data.next);
        return res.data.results;
      });
    },
    async getNextPosts({ state, commit }) {
      if (state.next !== null) {
        return await DICA_API.get(state.next, {params: {limit: 3}}).then(res => {
          commit("setPosts", state.posts.concat(res.data.results));
          commit("setNext", res.data.next);
          
        });
      }
      else {
        Promise.reject("Fim da lista!");
      }
    },
    async getSinglePost({}, id) {
      return await DICA_API.get(`/posts/${id}`).then(res => {
        return res.data;
      });
    }
  }
};
