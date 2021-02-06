<template>
  <div class='app-container'>
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { useStore } from '@/store';
import { computed, watchEffect } from 'vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup: () => {
    const store = useStore();
    const theme = computed(() => store.state.App.theme);
    watchEffect(() => {
      document.body.classList.remove('dark-theme');
      document.body.classList.remove('light-theme');
      document.body.classList.add(`${theme.value}-theme`);
    });
  },
};
</script>

<style lang="scss">
html { /* import global index.scss */ }

.app-container {
  display: flex;
  height: 100vh;
}
</style>
