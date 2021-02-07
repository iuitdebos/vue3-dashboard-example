<template>
  <Widget>
    <div class='table-widget'>
      <v-grid
        ref='revogrid'
        theme='material'
        :readonly='true'
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
  props: {
    rows: {
      type: Object,
      required: true,
    },
    columns: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<style lang="scss" scoped>
  .table-widget {
    width: 1030px;
    height: 300px;
  }
</style>

<style lang="scss">
  // Custom overrides for their default theme
  revo-grid[theme=material] revogr-data .data-cell {
    color: inherit !important;
  }
  revo-grid[theme=material] revogr-data .row.focused-row {
    @include theme(background-color, color(secondary, 4), color(secondary, -3));
  }
  revogr-focus.focused-cell,
  revogr-overlay-selection .selection-border-range {
    @include theme(box-shadow, inset 0 0 1px 1px color(secondary, 2), inset 0 0 1px 1px color(secondary, -1));
  }
  revo-grid[theme=material] revogr-viewport-scroll.colPinStart,
  revo-grid[theme=material] revogr-header .header-row:not(.group),
  revo-grid[theme=material] revogr-data .row {
    @include theme(box-shadow, inset -1px -1px 0 0 color(quaternary, 3), inset -1px -1px 0 0 color(tertiary, -2))
  }
  revo-grid[theme=material] revogr-header .data-header-cell.focused-cell {
    background: none;
  }
  revo-grid[theme=material] revogr-header .data-header-cell.sortable {
    transition: background-color 0.1s;
    &:hover {
      @include theme(background-color, color(quaternary, 3), color(tertiary));
    }
  }
  // Bug fix
  revogr-header .data-header-cell>.resizable-r.no-resize {
    pointer-events: none;
  }
</style>
