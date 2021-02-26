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

    const can = ref() as any;

    // SVG Export support
    const exportAs = ref({});

    //
    onMounted(() => {
      uplot.value = new uPlot(props.options, props.data as uPlot.AlignedData, uplotContainer.value as any);

      // const svgCtx = exportAsSvg(uplot.value)({ width: 500, height: 300 });
      // const svgPlot = new uPlot({
      //   ...props?.options,
      //   hooks: {
      //     ...props?.options?.hooks,
      //     draw: [
      //       (up: any) => {
      //         const el = document.getElementById('hallo');
      //         if (el) {
      //           // el.innerHTML = up.ctx.getSerializedSvg();
      //         }
      //         // console.log(up.ctx.getSerializedSvg());
      //       }],
      //   },
      // }, props.data as uPlot.AlignedData, uplotContainer.value as any, svgCtx);
      // svgPlot.setSize({ width: 500, height: 300 });
      // svgPlot.syncRect();

      // svgCtx.beginPath();
      // svgCtx.moveTo(0, 0);
      // svgCtx.lineTo(100, 0);
      // svgCtx.lineTo(100, 100);
      // svgCtx.strokeStyle = 'green';
      // svgCtx.stroke();

      // const path2 = new Path2D();
      // path2.moveTo(220, 60);
      // path2.arc(170, 60, 50, 0, 2 * Math.PI);
      // console.log(path2);
      // svgCtx.stroke(path2);

      // console.log(svgCtx.getSerializedSvg());

      // svgPlot.redraw(true, true);

      // uplot.value.ctx = ctx;
      // uplot.value.setSize({ width: 500, height: 300 });
      // uplot.value.redraw(true);
      // uplot.value.syncRect();
      // console.log(uplot.value, can.value, ctx);

      // exportAs.value = {
      //   svg: exportAsSvg(svgPlot),
      // };
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
      can,
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
