//should sow all task for one project
<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
<<<<<<< HEAD
<<<<<<< HEAD
const { projects, tasks } = storeToRefs(store);
const param = route.params.projectId; //param route for project
const foundTasks = computed(() => store.tasksUnderProject); //
const intParam = parseInt(param);
const taskParam = route.params.detail;

// const tasksOfParents = taskList.filter((task) => task.parentId == param);
const getParent = store.projects.filter((p) => p.id == param);
const goBackButton = computed(() => `/projects/project-${param}`);
=======
=======
>>>>>>> styling
const param = parseInt(route.params.projectId);

const { taskList, projectList } = store;
const tasksOfParents = taskList.filter((task) => task.parentId == param); //needs fix
const getParent = projectList.filter((p) => p.id == param); //needs fix
const seeDetail = (parameter) => {
  return parameter;
}; //will make the id selectec the currect id to navigate

// const taskDetailLink = computed(()=> `/projects/project-${param}/tasks/task-${seeDetail}`)
<<<<<<< HEAD
>>>>>>> styling
</script>

<template>
<<<<<<< HEAD
  <div class="tasks-wrapper">
    <div class="task-list table-responsive">
      <table class="table"></table>
      <UITitle title="Tasks " />
=======
  <div class="tasks-wrapper table-responsive">
    <div class="task-list ">
      <UITitle title="Tasks" />
>>>>>>> styling
=======
</script>

<template>
  <div class="tasks-wrapper table-responsive">
    <div class="task-list ">
      <UITitle title="Tasks" />
>>>>>>> styling
      <div>add task feature</div>
      <div>search bar</div>
      <div>filtering</div>
      <div>
        <Nuxt-link :to="goBackButton">Back</Nuxt-link>
      </div>
      <!-- <h3
        style="color: black; font-size: size 1.5rem"
        v-for="parent in getParent"
        :key="parent.id"
      >
        {{ parent.projectName }}
      </h3> -->
      <table class="table">
        <thead>
          <tr class="table-header">
<<<<<<< HEAD
<<<<<<< HEAD
            <th>Id#</th>
=======
=======
>>>>>>> styling
            <th>Task Id#</th>

>>>>>>> styling
            <th>Task Name</th>
            <th>Status</th>
            <th></th>
            <th>U</th>
            <th>D</th>
          </tr>
        </thead>

        <tbody>
<<<<<<< HEAD
<<<<<<< HEAD
          <tr v-for="task in foundTasks(intParam)" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.taskName }}</td>
            <td v-if="task.isComplete">Complete</td>
            <td v-if="!task.isComplete">In Progress</td>
            <td><Nuxt-link :to="taskDetailLink">Details </Nuxt-link></td>
=======
=======
>>>>>>> styling
          <tr
            class="table-content"
            v-for="task in tasksOfParents"
            :key="task.id"
          >
            <td>{{ task.id }}</td>

     <td>{{ task.taskName }}</td>

            <td v-if="task.isComplete">Complete</td>
            <td v-if="!task.isComplete">In Progress</td>
            <td>
              <nuxt-link
                :to="`/projects/project-${param}/tasks/task-${seeDetail(
                  task.id
                )}`"
                >Task Details</nuxt-link
              >
            </td>
<<<<<<< HEAD
>>>>>>> styling
=======
>>>>>>> styling
            <td>.</td>
            <td>.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.task-list {
  max-width: 1500px;
  margin: 0 auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  /* border: 1px solid #ddd; */
}

th,
td {
<<<<<<< HEAD
<<<<<<< HEAD
  padding: 1.6rem 1rem;
  font-size: 1.2rem;
=======
=======
>>>>>>> styling
  text-align: left;

  /* font-size: 1.2rem;*/
}

td {
<<<<<<< HEAD
>>>>>>> styling
}
td {
  padding: 2rem 1rem;
  font-size: 1.3rem;
=======
>>>>>>> styling
}

.table-header {
<<<<<<< HEAD
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
  padding: 2rem;
=======
  padding: auto;
  background-color: rgb(227, 239, 253);
  /* border: solid rgb(159, 159, 159) 1px; */
}

.table-header th {
  font-size: 1.2rem;
  border: solid rgb(169, 169, 169) 1px;
}
.table-content {
  color: rgb(84, 84, 84);
  /* border: solid rgb(159, 159, 159) 0.5px; */
  text-align: center;
}
.table-content td {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  padding: 0 auto;
  color: rgb(84, 84, 84);
  /* border: solid rgb(159, 159, 159) 0.5px; */
}
.table-content {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
>>>>>>> styling
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
