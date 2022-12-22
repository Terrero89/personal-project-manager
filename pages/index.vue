<script setup>
import { useProjectStore } from "@/store/projects";
import { onUpdated } from "vue";
import { storeToRefs } from "pinia";

const props = defineProps([
  "title",
  "totalProjects",
  "completed",
  "progress",
  "completionAverage",
]);
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
  <div>
    <DashboardItem />
  
  </div>
</template>

<style scoped></style>
