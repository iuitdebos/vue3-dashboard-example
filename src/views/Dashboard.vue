<template>
  <div class='dashboard'>
    <div class='row'>
      <Widget>
        <div class='text'>
          <p>
            <span class='h2'>{{ latestEntry.targetName }}</span>
            <span class='text-detail'>{{ latestEntry.chaserName }} &ndash; by {{ latestEntry.originator }}</span>
          </p>
          <p>
            <span class='entry-data badge'>{{ latestEntry.pc }}</span>
            <span class='text-detail'>at &nbsp;</span>
            <span class='entry-data'>{{ latestTcaReadable }}</span>
            <span class='text-detail'>at a distance of &nbsp;</span>
            <span class='entry-data'>{{ latestEntry.md }} <span class='text-detail'>m</span></span>
          </p>
        </div>
      </Widget>
    </div>

    <div class='row'>
      <Chart
        :series='charts.mdOld.series'
        :options='charts.mdOld.options' />

      <LineChart
        :data='charts.md.series'
        :options='charts.md.options' />
    </div>

    <div class='row'>
      <Table
        :rows='tableData.rows'
        :columns='tableData.columns' />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DateTime } from 'luxon';
import Table from '@/components/widgets/Table.vue';
import Chart from '@/components/widgets/Chart.vue';
import LineChart from '@/components/widgets/LineChart.vue';
import Widget from '@/components/widgets/Widget.vue';
import useCdmData from '@/composables/useCdmData';

const commonChartOptions = {
  chart: {
    group: 'cdm',
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: 'zoom',
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
  },
};

export default defineComponent({
  name: 'Dashboard',
  components: {
    Table,
    Chart,
    LineChart,
    Widget,
  },
  setup() {
    const cdm = useCdmData();
    const cdmFlat = cdm.flatData.value;

    const seriesOld = {
      md: [{ name: 'Miss Distance (m)', data: new Array(cdmFlat.length) }],
      pc: [{ name: 'Probability of Collision', data: new Array(cdmFlat.length) }],
      tca: [{ name: 'Closest Approach', data: new Array(cdmFlat.length) }],
    };
    const seriesOldKeys = Object.keys(seriesOld);

    cdmFlat.forEach((entry, i) => {
      seriesOldKeys.forEach((set) => {
        seriesOld[set][0].data[i] = {
          x: entry.creationDate,
          y: entry[set],
        };
      });
    });

    const cdmChartData = {
      md: [new Array(cdmFlat.length), new Array(cdmFlat.length)],
    };
    const cdmChartDataKeys = Object.keys(cdmChartData);

    cdmFlat.forEach((entry, i) => {
      cdmChartDataKeys.forEach((key) => {
        cdmChartData[key][0][i] = entry.creationDateAsUnixTimestamp;
        cdmChartData[key][1][i] = entry[key];
      });
    });
    /*
      [
        [1546300800, 1546387200], // x-values (timestamps)
        [35, 71], // y-values (series 1)
        [90, 15], // y-values (series 2)
      ]
    */

    const latestEntry = cdmFlat[0];
    const dt = DateTime.fromISO(latestEntry.tca).toUTC();
    const latestTcaReadable = dt.toFormat('d MMM yyyy, HH:mm:ss ZZZZ');

    return {
      latestEntry,
      latestTcaReadable,
      tableData: {
        columns: [{
          prop: '_id',
          name: 'ID',
          sortable: true,
          size: 70,
          pin: 'colPinStart',
        }, {
          prop: 'originator',
          name: 'Originator',
          sortable: true,
          size: 120,
        }, {
          prop: 'targetName',
          name: 'Target',
          sortable: true,
          size: 140,
        }, {
          prop: 'targetNoradId',
          name: 'Norad ID',
          sortable: true,
        }, {
          prop: 'chaserName',
          name: 'Chaser',
          sortable: true,
          size: 140,
        }, {
          prop: 'chaserNoradId',
          name: 'Norad ID',
          sortable: true,
        }, {
          prop: 'md',
          name: 'Miss (m)',
          sortable: true,
        }, {
          prop: 'pc',
          name: 'PC',
          sortable: true,
        }, {
          prop: 'tca',
          name: 'Closest Approach',
          sortable: true,
          size: 200,
        }, {
          prop: 'creationDate',
          name: 'Creation',
          sortable: true,
          size: 200,
        }],
        rows: cdm.flatData.value,
      },
      charts: {
        mdOld: {
          series: seriesOld.md,
          options: {
            ...commonChartOptions,
            chart: {
              ...commonChartOptions.chart,
              id: 'md',
            },
            title: {
              text: 'Miss Distance',
            },
            yaxis: {
              title: {
                text: 'm',
              },
            },
          },
        },
        md: {
          series: cdmChartData.md,
          options: {
            series: [
              {}, // x-axis
              {
              // in-legend display
                label: 'Miss Distance',
                value: (self, rawValue) => `${rawValue.toFixed(2)}m`,

                // series style
                stroke: 'red',
                width: 1,
                fill: 'rgba(255, 0, 0, 0.1)',
              },
            ],
          },
        },
      },
    };
  },
});
</script>

<style lang="scss">
  .dashboard {
    display: flex;
    flex-wrap: wrap;

    .row {
      max-width: 1050px;
    }

    .text {
      width: 1030px;

      .h2 {
        display: inline-block;
        margin-top: 0;
        margin-right: 10px;
        text-transform: uppercase;
      }

      p {
        margin-top: 0;
      }

      .entry-data {
        margin-right: 10px;
        font-weight: bold;
      }

      .text-detail {
        color: color(text, detail);
        font-weight: normal;
      }
    }
  }
</style>
