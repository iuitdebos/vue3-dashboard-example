<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'App',
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
#app {
  border: 4px solid green;

  .home {
    border: 4px solid blue;
  }
}
</style>
