<template>
  <div class='app-container'>
    <Sidebar />

    <div class='page-container'>
      <router-view/>
    </div>
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
@import '@/style/index.scss';

.app-container {
  display: flex;
  height: 100vh;
  color: color(text);
  overflow: hidden;
}

.page-container {
  flex: 1 1 auto;
  padding: var(--padding);
  background-color: color(background, deep);
  overflow: auto;
}
</style>
