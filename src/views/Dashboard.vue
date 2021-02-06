<template>
  <div class='dashboard'>
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/widgets/Table.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Table,
  },
});
</script>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
  }
</style>
