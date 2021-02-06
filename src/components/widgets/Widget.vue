<template>
  <div class="widget">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Widget',
});
</script>

<style lang="scss" scoped>
  .widget {
    padding: var(--padding);
    background-color: color(background);
    box-shadow: shadow(soft);
  }
</style>
