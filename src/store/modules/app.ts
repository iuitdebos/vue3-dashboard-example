// Has some 'any' because this is not production code

export default {
  namespaced: true,
  state: {
    theme: 'light',
  },
  actions: {
  },
  mutations: {
    setTheme(state: any, payload: string) {
      state.theme = payload;
    },
  },
};
