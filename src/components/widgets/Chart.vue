<template>
  <Widget>
    <div class='chart-widget'>
      <apexchart
        :type='type'
        :width='size.width'
        :height='size.height'
        :series='series'
        :options='options' />
    </div>
  </Widget>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Widget from '@/components/widgets/Widget.vue';

export default defineComponent({
  name: 'Widgets/Chart',
  components: {
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

  .vue-apexcharts {
    svg {
      text {
        fill: color(text) !important;
      }
    }
  }

  .apexcharts-xaxistooltip {
    border: 0 !important;
    box-shadow: shadow() !important;
    color: color(text) !important;
    @include theme(background-color, color(quaternary, 3) !important, color(tertiary, 1) !important);

    &-bottom::before {
      @include theme(border-bottom-color, color(quaternary, 4) !important, color(tertiary, 2) !important);
    }
    &-bottom::after {
      @include theme(border-bottom-color, color(quaternary, 3) !important, color(tertiary, 1) !important);
    }
  }

  .apexcharts-tooltip {
    border: 0 !important;
    box-shadow: shadow() !important;
    @include theme(background-color, color(quaternary, 3) !important, color(tertiary, 1) !important);

    .apexcharts-tooltip-title {
      border: 0 !important;
      @include theme(background-color, color(quaternary, 4) !important, color(tertiary, 2) !important);
    }
  }
</style>
