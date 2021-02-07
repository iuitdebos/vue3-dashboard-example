<template>
  <div class="sidebar-nav">
    <router-link to="/" class='nav-link'>
      <span class='nav'>Dashboard</span>
    </router-link>

    <span
      class='clickable'
      @click='toggleTheme'>
      {{ theme }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useTheme from '@/composables/useTheme';

export default defineComponent({
  name: 'SidebarNav',
  setup() {
    const theme = useTheme();
    return { ...theme };
  },
});
</script>

<style lang="scss">
  .sidebar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
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
        background-color: color(background);
      }
    }
  }

  .nav {
    display: block;
    position: relative;
  }
</style>
