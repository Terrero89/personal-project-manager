<script setup>
// will help me fix he projects section like
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const { tasks, projects } = storeToRefs(store);
const { findTaskById, getProjectById, projectList, taskList } = store;

const props = defineProps(["titles", "content"]);
</script>

<template>
  <div class="wrapper">
    <div class="project table-responsive">
      <table class="table">
       <UITableHead :headers="titles" />
       <UITableBody :headers2="titles" :content="projects" />
       
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  /* border: 1px solid #ddd; */
}

th,
td {
  text-align: left;
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
}

.table-header {
  /* padding:2rem; */
  background-color: rgb(74, 159, 149);
  border: solid rgb(159, 159, 159) 1px;
}

.table-content {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  border: solid rgb(159, 159, 159) 1px;
}
.table-content td {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  border: solid rgb(159, 159, 159) 0.5px;
}
.project {
  /* overflow-x: hidden; */
  display: flex;
  background-color: white;
  margin: 5rem auto;
  max-width: 1400px;
  /* border: solid rgb(194, 194, 194) 1px; */
  padding: 2rem;

  /* border-radius: 10px; */
}
.progress {
  background-color: rgb(183, 219, 3);
}
.project-detail {
  position: relative;
  display: flex;
}

.success {
  background-color: green;
}
.project-title {
  font-family: 500;
  font-size: 2.2rem;
}

.project-status {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 1.6rem;
  height: auto;
}
.project-description {
  font-family: 500;
  font-size: 1.6rem;
  color: gray;
}

.project-start span,
.project-end span,
.project-age span,
.project-duration span,
.project-user {
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
}
.project-start,
.project-end,
.project-age,
.project-duration,
.project-user span {
  line-height: 2.5rem;
  color: rgb(93, 93, 93);
  font-size: 1.5rem;
}
</style>
