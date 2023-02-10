<script setup>
import { useProjectStore } from "@/store/projects";
import { onUpdated } from "vue";
import { storeToRefs } from "pinia";

//?STORE INITIALIZATION

const projectStore = useProjectStore();

//?PROPERTIES DESTRUCTURING

const { fetchProjects, cool, kool } = projectStore;
const {
  currentMonthProjects,
  projectTotals,
  projectCompleteAvg,
  projectProgressAvg,
  projectsSuccess,
  completeAverageDays,
  projectsByMonth,
} = storeToRefs(projectStore);
const total = computed(() => projectTotals); //totals
const inProgress = computed(() => projectCompleteAvg); //complete ones percent
const successAverage = computed(() => projectProgressAvg); //completed percentage
const completionSuccess = computed(() => projectsSuccess); //success for those not completed that are under 15 days
const averageDays = computed(() => completeAverageDays); //average of days for each project to be completed

const allCombined = ref([
  projectStore.projectTotals,
  projectStore.projectProgressAvg,
  projectStore.completeAverageDays,
  projectStore.projectsSuccess,
]);
//?example for props for donut chart
const val = ref([28, 8]);

const valName = ref(["Complete", "In Progress"]);
const barName = ref([
  "Over 15 days",
  "On track",
  "Average Days",
  "Success Rate",
]);

fetchProjects();
</script>

<template>
  <div class="dashboard">
    <h3>Dashboard</h3>

    <div class="wrapper border rounded-5 mx-2 my-5 px-4 bg-light">
      <div class="row chart-items my-3">
        <div class="col chart-box">
          <!-- <DashboardTest2 /> -->
   
        </div>
        <div class="col-lg-6 px-3 chart-box">

        </div>
      </div>
   

      <div class="row items">
        <div class="col item-box">
          <h6 class="header">Total Projects</h6>
          <h1 class="item-value fw-bold">{{ total }}</h1>
          <h6 class="status">Total</h6>
          <h6 class="description">
            <span class="text-success fw-bold fs-6">
              {{ currentMonthProjects }}</span
            >
            added in this month
          </h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Projects Completed</h6>
          <h1 class="item-value fw-bold">
            {{ successAverage }}<span class="fs-1">%</span>
          </h1>
          <h6 class="status">Completed</h6>
          <h6 class="description">5 completed this month</h6>
        </div>

        <div class="col item-box">
          <h6 class="header">Projects In Progress</h6>
          <h1 class="item-value fw-bold">
            {{ inProgress }}<span class="fs-1">%</span>
          </h1>
          <h6 class="status">in progress</h6>
          <h6 class="description">5 in progress this month</h6>
        </div>
        <div class="col item-box">
          <h6 class="header">Completion Success</h6>
          <h1 class="item-value fw-bold">
            {{ completionSuccess }}<span class="fs-1">%</span>
          </h1>
          <h6 class="status">5% <span>Overdue</span></h6>
          <h6 class="description">
            completed in
            <span class="text-success fw-bold">{{ averageDays }}</span> days
            average
          </h6>
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
</style>
