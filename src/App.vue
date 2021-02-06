<template>
  <div class='app-container'>
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
// import { watchEffect } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
// import useTheme from '@/composables/useTheme';

export default {
  name: 'App',
  components: {
    Sidebar,
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
