<template>
  <Widget>
    <div class='table-widget'>
      <v-grid
        ref='revogrid'
        theme='material'
        :resize='false'
        :source="rows"
        :columns="columns"/>
    </div>
  </Widget>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Widget from '@/components/widgets/Widget.vue';
import VGrid from '@revolist/vue3-datagrid';

export default defineComponent({
  name: 'Widgets/Table',
  components: {
    Widget,
    VGrid,
  },
  setup() {
    return {
      columns: [{
        prop: 'name',
        name: 'First',
      }, {
        prop: 'details',
        name: 'Second',
      }, {
        prop: 'a',
        name: 'a',
      }, {
        prop: 'b',
        name: 'b',
      }, {
        prop: 'c',
        name: 'c',
      }, {
        prop: 'd',
        name: 'd',
      }, {
        prop: 'e',
        name: 'e',
      }, {
        prop: 'f',
        name: 'f',
      }, {
        prop: 'g',
        name: 'g',
      }, {
        prop: 'h',
        name: 'h',
      }],
      rows: [{
        name: '1',
        details: 'Item 1',
        a: 'hallo hallo',
        b: 'hallo hallo',
        c: 'hallo halgagarg aergjaer gkajer gaerijg eairj giaje rigj lo',
        d: 'hallo hallo',
        e: 'hallo hallo',
        f: 'hallo hallo',
        g: 'hallo hallo',
        h: 'hallo hallo',
      }],
    };
  },
});
</script>

<style lang="scss" scoped>
  .table-widget {
    width: 500px;
    height: 300px;
  }
</style>

<style lang="scss">
  // Custom overrides for their default theme
  revo-grid[theme=material] revogr-data .data-cell {
    color: inherit !important;
  }
  // Bug fix
  revogr-header .data-header-cell>.resizable-r.no-resize {
    pointer-events: none;
  }
</style>
