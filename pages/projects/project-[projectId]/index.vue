<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const intParam = parseInt(param);

const { taskList } = store;

//link to route to {params}/update to update project.
const updateLink = computed(() => `project-${intParam}/update`);

//link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${intParam}/tasks`);

//extracted getter projectList that receives argument
//we will evaluate it if argument is equal to param
//returned the array of the element equal to param
<<<<<<< HEAD
const projectById = computed(() => store.tasksUnderProject); //

// extracts array Tasks from pinia to filter
// the tasks that have a parentId that matches project id.

const findParentChild = taskList.filter((task) => task.parentId == param);
=======
// const filterProjectById = (id) => projectList.filter((p) => p.id == param);
const projectById = computed(() => store.filterItemById);
// const length = computed(()=> store.projectsLength)
//created a variable to be able to use the filteredProject
//to be able to receive argument {param}
//then used the variable with the id that match
// extracts array Tasks from pinia to filter
// the tasks that have a parentId that matches
//project id.
const parentChild = computed(() => store.findParentChild);
//check for the length of specific id
const length = taskList.filter((task) => task.parentId == param);


>>>>>>> styling
</script>

<template>
  <div>
    <div
      class="project-detail"
      v-for="project in projectById(intParam)"
      :key="project.id"
    >
      <div class="container detail-container">
        <UITitle title="Project Details" />

<<<<<<< HEAD
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
=======
        <div class="row">
          <div class="header">
            <h3 v-for="parent in projectById(intParam)" :key="parent.id">
              {{ parent.projectName }}
            </h3>
          </div>
          <div class="col">
            <div class="detail">
              <div class="content">
                <div class="item">Project Id</div>
                <p class="item-desc">{{ project.id }}</p>
                <div class="item">User</div>
                <p class="item-desc">{{ project.user }}</p>
                <div class="item">Parent Name</div>
                <p
                  class="item-desc"
                  v-for="parent in projectById(intParam)"
                  :key="parent.id"
                >
                  {{ parent.projectName }}
                </p>
                <div class="item">Category</div>
                <p class="item-desc">{{ project.category }}</p>
                <div class="item">Description</div>
                <p class="item-desc">{{ project.projectDescription }}</p>
                <div class="item">Start Date</div>
                <p class="item-desc">{{ project.startDate }}</p>
                <div class="item">End Date</div>
                <p class="item-desc">{{ project.endDate }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="item">Project Duration</div>
            <p class="item-desc">{{ project.totalDuration }} hours</p>
            <div class="item">Project Age</div>
            <p class="item-desc">{{ project.projectAge }} days</p>
            <div class="item">Project Status</div>
            <p v-if="project.isComplete">Complete</p>
            <p v-if="!project.isComplete">In Progress</p>
            <div class="item">Tasks Number</div>
            <p>{{ length.length }} Tasks</p>
            <div class="item">See All Tasks</div>
            <p class="item-desc">
              <Nuxt-link :to="tasksLink">Tasks</Nuxt-link>
            </p>
            <div class="item">Actions</div>
            <p class="item-desc">
              <Nuxt-link :to="tasksLink">Actions</Nuxt-link>
            </p>
          </div>
          <div class="header">
            <button type="button" class="btn btn-danger mr-5">X</button>
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
>>>>>>> styling
    </div>
    <div>actions for this project</div>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
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
=======
.col {
  background-color: rgb(255, 255, 255);
  padding: 1rem 0;
}
.header {
  background-color: rgb(227, 239, 253);
  /* border: solid rgb(205, 205, 205) 1px ; */
  padding: 0.5rem 0rem;
}
.item-desc {
  padding: 0 rem;
  border-bottom: solid rgb(155, 155, 155, 0.3) 1px;
  color: rgb(88, 88, 88);
  width: 90%;
}
.item {
  color: rgb(129, 129, 129);
>>>>>>> styling
}
</style>
