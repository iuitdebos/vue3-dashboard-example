<template>
  <div class="sidebar">
    <div class='sidebar__section sidebar__section--top'>
      <div class='sidebar__logo' />
    </div>

    <div class='sidebar__section'>
      <SidebarNav />
    </div>

    <div class='sidebar__section sidebar__section--bottom'>
      Vue 3 Dashboard
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SidebarNav from '@/components/SidebarNav.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarNav,
  },
});
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 180px;
    background-color: color(background);
    box-shadow: shadow();
  }

  .sidebar__logo {
    width: 60px;
    height: 60px;
    animation: rotate 5s linear infinite;
    border-radius: 48% 51% 49% 52%;
    background-color: color(text);
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
    flex: 0 0 140px;
  }

  .sidebar__section--bottom {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 1 1 140px;
    opacity: 0.4;
  }
</style>
