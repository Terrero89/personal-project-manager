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
const averageDays = computed(() => completeAverageDays)
const total = computed(() => projectTotals);
fetchProjects();
onUpdated(() => {
  fetchProjects();
});
</script>

<template>
<div>
  <DashboardItem/>
</div>
</template>

<style scoped>
.dashboard {
  min-height: 40vh;
}

.dash-border {
  border: solid red 1px;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.dashboard-item {
  border: solid rgb(7, 55, 117, 0.3) 1px;
  width: 30%;

  margin: auto 0.5rem;
  border-radius: 10px;
  padding: 2rem 1rem;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .dashboard-item {
    width: 90%;
  }
}
</style>
