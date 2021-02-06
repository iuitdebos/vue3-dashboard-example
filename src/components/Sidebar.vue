<template>
  <div class="sidebar">
    <div class='sidebar__section sidebar__section--top'>
      <div class='sidebar__logo' />
    </div>

    <div class='sidebar__section'>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class='sidebar__section'>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    @include theme(color, color(tertiary, -3), color(quaternary, 2));
    @include theme(background-color, color(quaternary, 2), color(tertiary, -3));
  }

  .sidebar__logo {
    width: 60px;
    height: 60px;
    animation: rotate 5s linear infinite;
    border-radius: 48% 51% 49% 52%;
    @include theme(background-color, color(tertiary, -3), color(quaternary, 2));
  }

  .sidebar__section {
    padding: var(--padding);
    width: 100%;
    flex: 1 1 auto;
  }

  .sidebar__section--top {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 140px;
  }
</style>
