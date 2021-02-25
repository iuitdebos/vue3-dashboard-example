<template>
  <Widget>
    <div class='chart-widget'>
      <UPlot
        :data='data'
        :options='opts' />
    </div>
  </Widget>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
} from 'vue';
import useTooltips from '@/composables/vendor/uplot/useTooltips';
import UPlot from '@/components/injections/UPlot.vue';
import Widget from '@/components/widgets/Widget.vue';

const defaultOptions = {
  width: 100,
  height: 100,
  plugins: [useTooltips()],
  series: [
    {}, // x-axis
  ],
};

export default defineComponent({
  name: 'Widgets/LineChart',
  components: {
    UPlot,
    Widget,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const options = ref({ ...defaultOptions, ...props.options });

    return {
      ...props,
      opts: options,
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
