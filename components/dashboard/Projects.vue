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
onUpdated(() => {
  fetchProjects();
});
</script>

<template>

  
      <div class="dashboard-item my-">
        <div class="dashboard-info m-3">
          <h5 class="my-3">Projects</h5>
          <div class="item d-flex justify-content-between">
            <div class="title">Total</div>
            <span class="fs-2 fw-bolder"> {{ total }} </span>
          </div>

          <div class="item d-flex justify-content-between">
            <div class="title">Completed</div>
            <span class="digit text-primary fw-bold">
              {{ inProgressAvg }}%</span
            >
          </div>

          <div class="item d-flex justify-content-between">
            <div class="title">In Progress</div>
            <span class="digit text-danger fw-bold"> {{successAverage }}%</span>
          </div>
          <div class="item d-flex justify-content-between">
            <div class="title">Completion success</div>
            <span class="digit text-success fw-bold">
              {{ projectCompletionSuccess }}%</span
            >
          </div>

          <div class="item d-flex justify-content-between">
            <div class="title">Completion average</div>
            <span
              class="digit fw-bold badge rounded-pill bg-info text-dark px-2"
              >{{ averageDays }} Days
            </span>
          </div>
        </div>
      </div>




</template>

<style scoped>
.digit {
  font-size: 1.05rem;
  /* border: solid black 0.5px;
  border-radius: 50%; */
  padding: 0.2rem 0;
}
.title {
  color: rgb(78, 78, 78);
  margin: auto 0;
}
.item {
  margin: 0.5rem 0;
}
.dashboard {
  min-height: 40vh;
}

.dash-border {
  /* border: solid red 1px; */
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.dashboard-item {
  /* border: solid rgb(7, 55, 117, 0.1) 1px; */
  width: 30%;

  margin: auto 0.5rem;
  border-radius: 10px;
  padding: 2rem 1rem;
  align-items: center;
  box-shadow: 5px 5px 34px -7px rgba(0, 0, 0, 0.55);
}

@media screen and (max-width: 768px) {
  .dashboard-item {
    width: 90%;
  }
}
</style>
