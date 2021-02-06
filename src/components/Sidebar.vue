<template>
  <div class="sidebar">
    <div class='sidebar__section sidebar__section--top'>
      <div class='sidebar__logo' />
    </div>

    <div class='sidebar__section'>
      <SidebarNav />
    </div>

    <div class='sidebar__section sidebar__section--bottom'>
      <span
        class='clickable'
        @click='toggleTheme'>
        {{ theme }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

import SidebarNav from '@/components/SidebarNav.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarNav,
  },
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.App.theme);
    const toggleTheme = () => {
      const newTheme = theme.value === 'light' ? 'dark' : 'light';
      store.commit('App/setTheme', newTheme);
    };

    return { theme, toggleTheme };
  },
});
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    color: color(text);
    background-color: color(background);
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
