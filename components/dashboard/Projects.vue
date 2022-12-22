<script setup>
import { useProjectStore } from "@/store/projects";
import { onUpdated } from "vue";
import { storeToRefs } from "pinia";

//?STORE INITIALIZATION

const projectStore = useProjectStore();

//?PROPERTIES DESTRUCTURING

const { fetchProjects} = projectStore;
const {
  projectTotals,
  projectCompleteAvg,
  projectProgressAvg,
  projectsSuccess,
  completeAverageDays,
} = storeToRefs(projectStore);
const total = computed(() => projectTotals); //totals
const completed = computed(() => projectCompleteAvg); //complete ones percent
const successAverage = computed(() => projectProgressAvg); //inprogress percentage
const completionSuccess = computed(() => projectsSuccess);
const averageDays = computed(() => completeAverageDays);

fetchProjects();
onUpdated(() => {
  fetchProjects();
});
</script>

<template>
  <div class="dashboard">
    <div class="wrapper border rounded-5 mx-2 my-5 px-4 bg-light">
      <div class="row selection d-flex justify-content-center my-4">
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn btn-outline-primary px-1"
        >
          Projects
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-info"
        >
          Tasks
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-secondary"
        >
          History
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-success"
        >
          Actions
        </button>
      </div>

      <div class="row items">
        <div class="col item-box">
          <h6 class="header">total projects</h6>
          <h1 class="item-value fw-bold">{{ total }}</h1>
          <h6 class="status">total</h6>
          <h6 class="description">10 added in last 30 days</h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Projects Completed</h6>
          <h1 class="item-value fw-bold">{{  completed }}<span class="fs-1">%</span></h1>
          <h6 class="status">completed</h6>
          <h6 class="description">5 completed in last 30 days</h6>
        </div>

        <div class="col item-box">
          <h6 class="header">Projects In Progress</h6>
          <h1 class="item-value fw-bold">{{ successAverage }}<span class="fs-1">%</span></h1>
          <h6 class="status">in progress</h6>
          <h6 class="description">15 added in last 30 days</h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Completion Success</h6>
          <h1 class="item-value fw-bold">{{ completionSuccess }}<span class="fs-1">%</span></h1>
          <h6 class="status">5% <span>Overdue</span></h6>
          <h6 class="description">completed in {{averageDays}} days average</h6>
        </div>
      </div>

      <div class="row chart-items my-3">
        <div class="col chart-box">
          <LazyDashboardProjectBar />
        </div>
        <div class="col-lg-6 px-3 chart-box">
          <LazyDashboardDonutProjects />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selection-box,
.item-box,
.chart-box {
  margin: 0.5rem 0.2rem;
  border-radius: 7px;
}
.btn {
  max-width: 8rem;
}
.selection-box {
  /* border: solid blue 0.5px; */
}

.header {
  font-size: 0.8rem;
  color: rgb(7, 7, 7);
  font-weight: 400;
  text-align: left;
  padding-top: 0.8rem;
}

.status {
  color: green;
  font-weight: 400;
  font-size: 1rem;
  margin: 0 0 1.7rem 0;
}

.description {
  font-weight: 400;
  font-size: 0.8rem;
  padding-bottom: 0.8rem;
}
.item-value {
  font-size: 2.8rem;
  color: rgb(7, 7, 7);
}
.items {
  /* width: 90%; */
}
.item-box {
  padding: 2rem 3rem;
  text-align: center;
  border: solid rgb(49, 75, 0, 0.1) 0.5px;
  padding: 1rem 1.2rem;
  min-width: 8rem;
  margin: 0.5rem 0.1rem;
  box-shadow: 5px 5px 34px -7px rgba(0, 0, 0, 0.1);
}

.chart-box {
  border: solid rgb(255, 0, 0) 0.5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border: solid rgb(49, 75, 0, 0.1) 0.5px;
  padding: 1rem 1.2rem;
  margin: 0.5rem 0.1rem;
  box-shadow: 5px 5px 34px -7px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.2rem;
}

@media screen and (max-width: 460px) {
  .item-box {
    /* min-width: 12rem; */
  }
}
</style>
