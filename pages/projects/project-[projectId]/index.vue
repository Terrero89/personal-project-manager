<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const { tasks, projects} = storeToRefs(store);
const {findTaskById, getProjectById, projectList, taskList } = store;


//link to route to params/update to update project.
const updateLink = computed(() =>  `project-${param}/update`);
  
 //link to route to params/update to update project.
const tasksLink = computed(() =>  `project-${param}/tasks`);

const comp = (id) => {
  // id = param
  return  projectList.filter((p) => p.id == param);
};
const man = comp(param)


const comp2 = comp()
//! finds parent for specfic task
const findParent = taskList.filter((task) => task.parentId == param);
</script>

<template>
  <div class="project">
    <div class="project-detail">
      <div v-for="project in man" :key="project.id">
        <!-- <div v-if="project.id == param"> -->
          <h1 class="project-title">{{ project.projectName }}</h1>
          <h2 class="project-description">{{ project.projectDescription }}</h2>
          <h2 class="project-start">
            <span>Start Date:</span> {{ project.startDate }}
          </h2>
          <h2 class="project-end">
            <span>End Date:</span> {{ project.endDate }}
          </h2>
          <h2 class="project-age">
            <span>Age:</span> {{ project.projectAge }} <span>days old</span>
          </h2>
          <h2 class="project-duration">
            <span>Duration:</span> {{ project.totalDuration }} hours
          </h2>

          <div class="project-tasks">
            <h4>
              Tasks number: <span>{{ findParent.length }}</span>
            </h4>
            <nuxt-link :to="tasksLink">See tasks</nuxt-link>
          </div>
          <button type="button" class="btn btn-danger">Delete</button>
          <button type="button" class="btn btn-outline-primary">
            <nuxt-link :to="updateLink"> Update</nuxt-link>
          </button>

          <p>array {{ findParent }}</p>
  

          <h2 class="project-user">
            user: <span>{{ project.user }}</span>
          </h2>

          <div
            class="project-status"
            :class="{ success: project.isComplete }"
            v-if="project.isComplete"
          >
            Complete
          </div>
          <div
            class="project-status"
            :class="{ progress: !project.isComplete }"
            v-if="!project.isComplete"
          >
            In Progress
          </div>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.project {
  display: flex;

  margin: 5rem auto;
  max-width: 800px;
  border: solid rgb(194, 194, 194) 1px;
  padding: 2rem;
  border-radius: 10px;
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
