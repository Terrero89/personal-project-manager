<script setup>
const chartData = ref([
  { month: "Jan", value: 100 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 20 },
  { month: "Apr", value: 25 },
  { month: "May", value: 30 },
  { month: "Jun", value: 35 },
  { month: "Jul", value: 40 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 66 },
  { month: "Oct", value: 55 },
  { month: "Nov", value: 60 },
  { month: "Dec", value: 65 },
]);

</script>

<template>
  <div class="bar-chart">
    
    <div v-for="item in chartData" :key="item.month">
      <div class="label number-label">{{ item.value }}</div>
      <div class="bar" :style="{ height: item.value + 'px' }">
        <!-- <div class="number-label"> {item.value}</div> -->
      </div>

      <div class="label">{{ item.month }}</div>
    </div>
  </div>
</template>

<style>
.number-label {
  /* color: white; */
  display: flex;
  justify-content: center;
}
.bar-chart {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 300px;
}

.bar {
  width: 50px;
  background-color: rgb(0, 140, 255);
  margin-right: 10px;
}

.label {
  margin-top: 10px;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 20px;
    margin-right: 5px;
  }

  .label {
    font-size: 10px;
    margin-top: 5px;
    font-size: 12px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 40px;
    margin-right: 5px;
  }

  .label {
    margin-top: 5px;
    font-size: 14px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .bar-chart {
    height: auto;
  }

  .bar {
    width: 50px;
    margin-right: 10px;
  }

  .label {
    margin-top: 10px;
    font-size: 16px;
  }
}

@media screen and (min-width: 1200px) {
  .bar-chart {
    height: 300px;
  }

  .bar {
    width: 50px;
    margin-right: 10px;
  }

  .label {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
