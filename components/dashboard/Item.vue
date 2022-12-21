<script setup>
import { useProjectStore } from "@/store/projects";
import { onUpdated } from "vue";
import { storeToRefs } from "pinia";

//?STORE INITIALIZATION

const projectStore = useProjectStore();

//?PROPERTIES DESTRUCTURING

const { fetchProjects, projectActive } = projectStore;
const {
  projectInProgressPercent,
  projectCompletionAvg,
  projectsSuccess,
  projectTotals,
  completeAverageDays,
} = storeToRefs(projectStore);

const successAverage = computed(() => projectCompletionAvg);
const inProgressAvg = computed(() => projectInProgressPercent);
const projectCompletionSuccess = computed(() => projectsSuccess);
const averageDays = computed(() => completeAverageDays);
const total = computed(() => projectTotals);
fetchProjects();
</script>

<template>
  <div class="dashboard">
    <div class="row wrapper border rounded-2 mx-2 my-5 p-2 bg-light">
      <div class="row selection d-flex justify-content-center">
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn btn-outline-primary px-1"
        >
          Projects
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-primary "
        >
          Tasks
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-primary "
        >
          History
        </button>
        <button
          type="button"
          class="col-lg-2 col selection-box btn btn-outline-primary "
        >
          Actions
        </button>
      </div>

      <div class="row items my-2">
        <div class="col item-box">
          <h6 class="header">total projects</h6>
          <h1 class="item-value fw-bold">25</h1>
          <h6 class="status">total</h6>
          <h6 class="description">10 added in last 30 days</h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Projects Completed</h6>
          <h1 class="item-value fw-bold">38<span class="fs-1">%</span></h1>
          <h6 class="status">completed</h6>
          <h6 class="description">5 completed in last 30 days</h6>
        </div>

        <div class="col item-box">
          <h6 class="header">Projects In Progress</h6>
          <h1 class="item-value fw-bold">62<span class="fs-1">%</span></h1>
          <h6 class="status">in progress</h6>
          <h6 class="description">15 added in last 30 days</h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Completion Success</h6>
          <h1 class="item-value fw-bold">95<span class="fs-1">%</span></h1>
          <h6 class="status">5% <span>Overdue</span></h6>
          <h6 class="description">completed in 9 days average</h6>
        </div>
      </div>

      <div class="row chart-items my-3 mx-auto">
        <div class="col px-3 chart-box">
          <DashboardTest />
        </div>
        <div class="col chart-box">
          <DashboardTest2 />
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
  /* max-width: 8rem; */
}
.selection-box {
  border: solid blue 0.5px;
  display: inline;
}

.header {
  font-size: 0.8rem;
  color: rgb(7, 7, 7);
  font-weight: 400;
  text-align: left;
  margin: 1rem 0 1.7rem 0;
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
  margin: 0 0 1.7rem 0;
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
