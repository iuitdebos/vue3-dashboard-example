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
import exportAsSvg from '@/composables/vendor/uplot/exportAsSvg';
import useResizeListener from '@/composables/useResizeListener';

export default defineComponent({
  name: 'Vendor/UPlot',
  props: {
    data: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    const uplotContainer = ref() as any;
    const uplot = ref() as any;

    // SVG Export support
    const exportAs = ref({});

    //
    onMounted(() => {
      uplot.value = new uPlot(props.options, props.data as uPlot.AlignedData, uplotContainer.value as any);

      exportAs.value = {
        svg: exportAsSvg(uplot.value),
      };
    });

    //
    onBeforeUnmount(() => {
      uplot.value.destroy();
    });

    function resize(e?: Event, width = 0, height = 0) {
      if (width !== 0 || height !== 0) {
        uplot.value.setSize({ width, height });
      } else {
        const uplotContainerBounds = uplotContainer.value.getBoundingClientRect();
        uplot.value.setSize({ width: uplotContainerBounds.width, height: uplotContainerBounds.height });
      }
    }
    useResizeListener(resize);

    return {
      ...props,
      uplotContainer,
      uplot,
      resize,
      exportAs,
    };
  },
});
</script>

<style lang="scss">
.uplot-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
