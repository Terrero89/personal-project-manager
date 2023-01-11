<template>
  <div>
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script>
import { BarChart, useBarChart } from "vue-chart-3";
import { defineComponent, onMounted } from "@vue/composition-api";

const wordwrap = (text = "", maxLength) => {
  const textSplitBySpace = text.toString().split(" ");
  if (textSplitBySpace.length === 1) {
    return textSplitBySpace;
  }

  return textSplitBySpace.reduce(
    (acc, word) => {
      const lastLineIndex = acc.length - 1;
      const lastLineLength = acc[lastLineIndex]?.length || 0;
      const lastLineHasText = lastLineLength >= 1;
      const newLineLength = lastLineLength + word.length;
      const isLongerOrEqualToMaxLength = newLineLength >= maxLength;

      if (isLongerOrEqualToMaxLength && lastLineHasText) {
        acc.push(word);
        return acc;
      } else {
        acc[lastLineIndex] = `${acc[lastLineIndex]} ${word}`.trim();
        return acc;
      }
    },
    [""]
  );
};

export default defineComponent({
  props: {
    values: Array,
    valueNames: Array,
  },

  name: "App",
  components: {
    BarChart,
  },
  setup(props) {
    const data = ref(props.values);
    const labels = ref(props.valueNames);
    const UNIT_REM = 50;
    const MIN_LABELS_ASSUMPTION_FOR_HEIGHT = 20;
    const barThicknessAndSpacing = UNIT_REM * 2;

    const height = computed(() => {
      const numberOfLabels = labels.value.length;
      console.debug("[Debug]", barThicknessAndSpacing);
      if (numberOfLabels) {
        return labels.value.length * barThicknessAndSpacing;
      }

      return MIN_LABELS_ASSUMPTION_FOR_HEIGHT * barThicknessAndSpacing;
    });

    const dataValues = ref(props.values);
    const dataLabels = ref(props.valueNames);

    const options = computed(() => ({
      indexAxis: "y",
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          beginAtZero: true,
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            callback(value) {
              // return value;
              const label = this.getLabelForValue(value);
              const wrappedLabel = wordwrap(label);
              return wrappedLabel;
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }));

    const chartData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          data: data.value,
          backgroundColor: ["#0079AF", "#123E6B", "#125E6A", "#0029AF"],
          barThickness: UNIT_REM,
          barPercentage: 1,
          categoryPercentage: 1,
        },
      ],
    }));

    const { barChartProps } = useBarChart({
      chartData,
      options,
    });

    onMounted(() => {
      setTimeout(() => {
        data.value = dataValues.value;
        labels.value = dataLabels.value;
      }, 100);
    });

    return { barChartProps, height };
  },
});
</script>

<style></style>
