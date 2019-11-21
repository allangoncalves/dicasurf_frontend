import { DICA_API } from "@/services/dica";

export default {
  namespaced: true,
  state: {
    posts: [],
    next: "posts",
    busy: false
  },
  mutations: {
    setPosts(state, posts) {
      // Sometimes the posts get duplicated by a race condition in the getNextChunk
      // The assign below removes duplicity
      state.posts = [
        ...posts
          .reduce((a, c) => {
            a.set(c.id, c);
            return a;
          }, new Map())
          .values()
      ];
    },
    setNext(state, next) {
      state.next = next;
    },
    setBusy(state, busy) {
      state.busy = busy;
    }
  },
  actions: {
    async getPosts({ commit }) {
      return await DICA_API.get("/posts", {
        params: {
          limit: 5,
          offset: 0
        }
      }).then(res => {
        return res.data.results;
      });
    },
    async getNextChunk({ state, commit }) {
      commit("setBusy", true);
      if (state.next !== null) {
        return await DICA_API.get(state.next, { params: { limit: 3 } }).then(
          res => {
            commit("setPosts", state.posts.concat(res.data.results));
            commit("setNext", res.data.next);
          }
        );
      } else {
        Promise.reject("Fim da lista!");
      }
      commit("setBusy", false);
    },
    async getSinglePost({}, id) {
      return await DICA_API.get(`/posts/${id}`).then(res => {
        return res.data;
      });
    }
  }
};
