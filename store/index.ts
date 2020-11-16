import Vuex from 'vuex'

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
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: "1",
                                title: "Title 1",
                                author: "AA",
                                updatedDate: new Date(),
                                content:
                                    "ka dagdiuagd uiagusigd aug duiagsui dgagd uiagd uiasd uagd aisugd",
                                thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                                previewText: "ka dagdiuagd uiagusigd aug duiagsui dgagd uiagd uiasd uagd aisugd"
                            }
                        ])
                      resolve();
                    }, 1500);
                });
            },

            setPosts(context, posts) {
                context.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.posts;
            }
        }
    });
}

export default createStore