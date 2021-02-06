import { createStore } from 'vuex';

import App from './modules/app';

export const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App,
  },
});

export function useStore() {
  // eslint-disable-next-line
  return store as any;
}

// eslint-disable-next-line
(window as any).store = store;
// eslint-disable-next-line
(window as any).state = store.state;

export default store;
