<template>
  <Widget>
    <div class='chart-widget'>
      <UPlot
        />
    </div>
  </Widget>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import UPlot from '@/components/wrappers/UPlot.vue';
import Widget from '@/components/widgets/Widget.vue';

export default defineComponent({
  name: 'Widgets/UChart',
  components: {
    UPlot,
    Widget,
  },
  props: {
    type: {
      type: String,
      default: () => 'line',
    },
    series: {
      type: Array,
      default: () => [],
    },
    size: {
      type: Object,
      default: () => ({
        width: '500px',
        height: '300px',
      }),
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<style lang="scss">
  .chart-widget {
    width: 500px;
    height: 300px;
  }
</style>
