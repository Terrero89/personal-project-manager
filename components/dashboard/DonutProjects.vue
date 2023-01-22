<template>
  <div style="width: 400px">
    <div style="display: flex; justify-content: center"></div>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
  props: {
    values: Array,
    valueNames: Array,
  },

  components: { DoughnutChart },

  setup(props) {
    //props values
    const dataValues = ref(props.values);
    const dataLabels = ref(props.valueNames);

    const name = ref("Sergio");
    const toggleLegend = ref(true);

    const testData = computed<ChartData<"doughnut">>(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: ["#0079AF", "#FF8C00"],
        },
      ],
      hoverOffset: 20,
    }))

    const options = computed<ChartOptions<"doughnut">>(() => ({
      scales: {
        myScale: {
          type: "linear",
          position: toggleLegend.value ? "left" : "left",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "bottom" : "right",
        },
        title: {
          display: true,
          text: "Projects Charts",
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    let index = ref(20);

    function shuffleData() {
      // dataValues.value = shuffle(dataValues.value);
      dataValues.value.push(index.value);
      dataLabels.value.push("Other" + index.value);
      console.log(dataValues.value);
      console.log(doughnutChartRef.value.chartInstance);
      index.value++;
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
});
</script>

<style></style>
