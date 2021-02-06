<template>
  <div class='app-container'>
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
html {
  //
}
</style>
