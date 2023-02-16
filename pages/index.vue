<script setup>
import { useProjectStore } from "@/store/projects";
import { onUpdated, onMounted } from "vue";
import { storeToRefs } from "pinia";


// const currentDate = ref('')

// const updateDate = () => {
//   currentDate.value = new Date().toLocaleString()
// }

// onMounted(() => {
//   updateDate()
//   setInterval(updateDate,1000)
// })
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

<DashboardItem/>
  </div>



</template>

<style scoped>
.test {
  min-height: 80vh;
  border: solid red 1px;
  background-color: red;
}


</style>
