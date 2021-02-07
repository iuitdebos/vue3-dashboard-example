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

<style lang="scss" scoped>
  .chart-widget {
    width: 500px;
    height: 300px;
  }
</style>

<style lang="scss">
  .vue-apexcharts {
    svg {
      text {
        fill: color(text);
      }
    }
  }

  .apexcharts-xaxistooltip {
    border: 0;
    box-shadow: shadow();
    color: color(text);
    @include theme(background-color, color(quaternary, 3), color(tertiary, 1));

    &-bottom::before {
      @include theme(border-bottom-color, color(quaternary, 4), color(tertiary, 2));
    }
    &-bottom::after {
      @include theme(border-bottom-color, color(quaternary, 3), color(tertiary, 1));
    }
  }

  .apexcharts-tooltip {
    border: 0;
    box-shadow: shadow();
    @include theme(background-color, color(quaternary, 3), color(tertiary, 1));

    .apexcharts-tooltip-title {
      border: 0;
      @include theme(background-color, color(quaternary, 4), color(tertiary, 2));
    }
  }
</style>
