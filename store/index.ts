import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://nuxt-blog-udemy-course.firebaseio.com/posts.json")
          .then(response => {
            const posts = [];
            for (const key in response.data) {
              posts.push({ ...response.data[key], id: key });
            }
            vuexContext.commit("setPosts", posts);
          })
          .catch(e => context.error(e));
      },

      setPosts(context, posts) {
        context.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.posts;
      }
    }
  });
};

export default createStore;
