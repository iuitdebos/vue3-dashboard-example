import { computed } from 'vue';
import { useStore } from '@/store';

export default function useTheme() {
  const store = useStore();
  const theme = computed(() => store.state.App.theme);

  const applyTheme = (el: HTMLElement, val: string) => {
    el.classList.remove('dark-theme');
    el.classList.remove('light-theme');
    el.classList.add(`${val}-theme`);
  };

  const setTheme = (val: string) => {
    store.commit('App/setTheme', val);
    applyTheme(document.body, val);
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    setTheme,
    applyTheme,
  };
}
