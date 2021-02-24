<template>
  <div
    ref='uplotContainer'
    class='uplot-container'></div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
} from 'vue';
import uPlot from 'uplot';

export default defineComponent({
  name: 'Injections/UPlot',
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
        width: 100,
        height: 100,
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
    const uplotContainer = ref() as any;
    const uplot = ref() as any;

    function resize(width = 0, height = 0) {
      if (width !== 0 || height !== 0) {
        uplot.value.setSize({ width, height });
      } else {
        const uplotContainerBounds = uplotContainer.value.getBoundingClientRect();
        uplot.value.setSize({ width: uplotContainerBounds.width, height: uplotContainerBounds.height });
      }
    }
    const resizeHandler = () => { resize(); };

    //
    onMounted(() => {
      uplot.value = new uPlot(props.options, props.data as uPlot.AlignedData, uplotContainer.value as any);

      resize();
      window.addEventListener('resize', resizeHandler);
    });

    //
    onBeforeUnmount(() => {
      uplot.value.destroy();
      window.removeEventListener('resize', resizeHandler);
    });

    return {
      ...props,
      uplotContainer,
      uplot,
      resize,
    };
  },
});
</script>

<style lang="scss">
.uplot-container {
  position: relative;
  max-height: 100%;
}
</style>
