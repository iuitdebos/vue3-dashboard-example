<template>
  <div class='app-container'>
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup: () => {
    onMounted(() => {
      document.body.classList.add('dark-theme');
    });
    onUnmounted(() => {
      document.body.classList.remove('dark-theme');
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
