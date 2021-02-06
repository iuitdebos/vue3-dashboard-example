<template>
  <div class="sidebar-nav">
    <router-link to="/" class='nav-link'>
      <span class='nav'>Home</span>
    </router-link>

    <router-link to="/about" class='nav-link'>
      <span class='nav'>About</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarNav',
});
</script>

<style lang="scss" scoped>
  .sidebar-nav {
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: block;
    padding: var(--padding);

    + .nav-link {
      .nav::before {
        content: '';
        display: block;
        position: absolute;
        top: calc(-1 * var(--padding));
        left: 0;
        width: 100%;
        height: 1px;
        opacity: 0.4;
        @include theme(background-color, color(tertiary, -3), color(quaternary, 2));
      }
    }
  }

  .nav {
    display: block;
    position: relative;
  }
</style>
