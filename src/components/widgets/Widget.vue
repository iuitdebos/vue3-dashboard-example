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
    margin: 0 var(--padding) var(--padding) 0;
    padding: var(--padding);
    background-color: color(background);
    box-shadow: shadow(soft);
  }
</style>
