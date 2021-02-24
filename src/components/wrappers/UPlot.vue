<template>
  <div ref='chartContainer'></div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import uPlot from 'uplot';

export default defineComponent({
  name: 'Wrappers/UPlot',
  props: {
    type: {
      type: String,
      default: () => 'line',
    },
    data: {
      type: Array,
      default: () => [
        [1546300800, 1546387200], // x-values (timestamps)
        [35, 71], // y-values (series 1)
        [90, 15], // y-values (series 2)
      ],
    },
    options: {
      type: Object,
      default: () => ({
        title: 'My Chart',
        id: 'chart1',
        class: 'my-chart',
        width: 800,
        height: 600,
        series: [
          {},
          {
          // initial toggled state (optional)
            show: true,

            spanGaps: false,

            // in-legend display
            label: 'RAM',
            value: (self, rawValue) => `$${rawValue.toFixed(2)}`,

            // series style
            stroke: 'red',
            width: 1,
            fill: 'rgba(255, 0, 0, 0.3)',
            dash: [10, 5],
          },
        ],
      }),
    },
  },
  setup(props: any) {
    const uplotContainer = ref(null);
    const uplot = ref();

    // Before the component is mounted, the value
    // of the ref is `null` which is the default
    // value we've specified above.
    onMounted(() => {
      uplot.value = new uPlot(props.options, props.data as uPlot.AlignedData, uplotContainer.value as any);
      console.log(uplot.value, uplotContainer.value);
    });

    return {
      ...props,
      uplotContainer,
      uplot,
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
