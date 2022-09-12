<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const intParam = parseInt(param);

const { taskList } = store;

//link to route to {params}/update to update project.
const updateLink = computed(() => `project-${param}/update`);

//link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${param}/tasks`);

//extracted getter projectList that receives argument
//we will evaluate it if argument is equal to param
//returned the array of the element equal to param
const projectById = computed(() => store.tasksUnderProject); //

// extracts array Tasks from pinia to filter
// the tasks that have a parentId that matches project id.

const findParentChild = taskList.filter((task) => task.parentId == param);
</script>

<template>
  <div class="wrapper">
    <div class="project table-responsive">
      <UITitle title="Project Details" />
      <div>add project feature</div>
      <div>show tasks under project</div>

      back to project-

      <h3 v-for="parent in projectById(intParam)" :key="parent.id"></h3>
      <table class="table">
        <thead>
          <tr class="table-header">
            <th>Id</th>
            <th>User</th>
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
            <td>{{ findParentChild.length }} Tasks</td>
            <td v-if="project.isComplete">Complete</td>
            <td v-if="!project.isComplete">In Progress</td>
            <td><Nuxt-link :to="tasksLink">All Tasks</Nuxt-link></td>
            <td>.</td>
            <td>.</td>
          </tr>
        </tbody>
      </table>
      <div>actions for this project</div>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin: 0 auto;
  max-width: 1500px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

th,
td {
  padding: 1.6rem 1rem;
  font-size: 1.2rem;
}
td {
  padding: 2rem 1rem;
  font-size: 1.3rem;
}

.table-header {
  border: solid rgb(187, 187, 187) 1px;
  color: rgb(63, 63, 63);
  text-transform: uppercase;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(100, 100, 255, 1) 0%,
    rgba(42, 168, 194, 0.4) 0%
  );
}

.table-content {
  color: rgb(84, 84, 84);
}

.table-content {
  background-color: white;
}
</style>
