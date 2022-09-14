<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const intParam = parseInt(param)

const { taskList } = store;

//link to route to {params}/update to update project.
const updateLink = computed(() => `project-${intParam}/update`);

//link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${intParam}/tasks`);

//extracted getter projectList that receives argument
//we will evaluate it if argument is equal to param
//returned the array of the element equal to param
// const filterProjectById = (id) => projectList.filter((p) => p.id == param);
const projectById = computed(()=> store.filterItemById)
// const length = computed(()=> store.projectsLength)
//created a variable to be able to use the filteredProject
//to be able to receive argument {param}
//then used the variable with the id that match
// extracts array Tasks from pinia to filter
// the tasks that have a parentId that matches
//project id.
const parentChild = computed(()=> store.findParentChild)
//check for the length of specific id 
const length = taskList.filter((task) => task.parentId == param);


</script>

<template>
  <div class="wrapper">
    <div class="project table-responsive">
      <UITitle title="Project Details" />
      <div>add project feature</div>
      <div>show tasks under project</div>

      back to project-

      <h3 v-for="parent in projectById(intParam)" :key="parent.id">
        {{ parent.projectName }}
      </h3>
      <table class="table">
        <thead>
          <tr class="table-header">
            <th>Id</th>
            <th>User</th>
            <!-- <th>Project</th> -->
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Age</th>
            <th>Duration</th>
            <th>tasks #</th>
            <th>Status</th>
            <th></th>
            <th>U</th>
            <th>D</th>
          </tr>
        </thead>

        <tbody>
          <tr class="breaker">
            <td></td>
          </tr>
          <tr
          
            class="table-content"
            v-for="project in projectById(intParam)"
            :key="project.id"
          >
            <td>{{ project.id }}</td>
            <td>{{ project.user }}</td>
            <td>{{ project.projectDescription }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>
            <td>{{ project.projectAge }} days</td>
            <td>{{ project.totalDuration }} hrs</td>
            <td>{{ length.length}} Tasks</td>
            <td v-if="project.isComplete">Complete</td>
            <td v-if="!project.isComplete">In Progress</td>
            <td><Nuxt-link :to="tasksLink">All Tasks</Nuxt-link></td>
          </tr>
        </tbody>
      </table>
      <div>actions for this project</div>
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
  border-right: solid rgb(103, 27, 27) 1px;
}
.table-content {
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
.table-content {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  background-color: white;
}
.project {
  /* overflow-x: hidden; */
  /* display: flex; */
  /* background-color: white; */
  margin: 0 auto;
  max-width: 1650px;
  /* border: solid rgb(194, 194, 194) 1px; */
  padding: 2rem;

  /* border-radius: 10px; */
}
</style>
