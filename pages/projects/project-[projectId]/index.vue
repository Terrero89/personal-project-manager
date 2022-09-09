<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const { tasks, projects, convertToObj } = storeToRefs(store);
const { findTaskById, getProjectById, projectList, taskList } = store;

//link to route to {params}/update to update project.
const updateLink = computed(() => `project-${param}/update`);

//link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${param}/tasks`);

//extracted getter projectList that receives argument
//we will evaluate it if argument is equal to param
//returned the array of the element equal to param
const filterProjectById = (id) => projectList.filter((p) => p.id == param);
//created a variable to be able to use the filteredProject
//to be able to receive argument {param}
//then used the variable with the id that match
const filteredProject = filterProjectById(param);

// extracts array Tasks from pinia to filter
// the tasks that have a parentId that matches
//project id.
const findParent = taskList.filter((task) => task.parentId == param);

const titles = ["user", "date", "description"];
</script>

<template>
  <div class="wrapper">
    <div class="project table-responsive">
      <UITitle title="Project Details" />

      <table class="table">
        <tbody>
          <tr class="table-header">
            <th>Id</th>
            <th>User</th>
            <th>Project</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Age</th>
            <th>Duration</th>
            <th>tasks #</th>
            <th>Status</th>
            <th>Tasks</th>
          </tr>

          <tr
            style="margin: auto 0"
            class="table-content"
            v-for="project in filteredProject"
            :key="project.id"
          >
            <td>{{ project.id }}</td>
            <td>{{ project.user }}</td>
            <td>{{ project.projectName }}</td>
            <td>{{ project.projectDescription }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>
            <td>{{ project.projectAge }} days</td>
            <td>{{ project.totalDuration }} hrs</td>
            <td>{{ findParent.length }} Tasks</td>
            <td v-if="project.isComplete">Complete</td>
            <td v-if="!project.isComplete">In Progress</td>
            <td><Nuxt-link :to="tasksLink">All Tasks</Nuxt-link></td>
          </tr>
        </tbody>
      </table>

      <UITable :titles="titles" :content="projects" />
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
  padding: auto;
  background-color: rgb(169, 188, 201);
  border: solid rgb(159, 159, 159) 1px;
}

.table-header th {
  font-size: 1.2rem;
  border-right: solid rgb(159, 159, 159) 1px;
}
.table-content {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */

  color: rgb(84, 84, 84);
  border: solid rgb(159, 159, 159) 0.5px;
  text-align: center;
}
.table-content td {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  padding: 0 auto;
  color: rgb(84, 84, 84);
  border: solid rgb(159, 159, 159) 0.5px;
}
.project {
  /* overflow-x: hidden; */
  /* display: flex; */
  /* background-color: white; */
  margin: 0 auto;
  max-width: 1500px;
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
