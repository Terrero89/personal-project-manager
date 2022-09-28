<script setup>
import { useTest } from "@/store/test";
const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);
const {
  taskList,
  projects,
  history,
  deletedHistory,
  deleteProject,
  projectDeletedToActions,
} = store;

const updateLink = computed(() => `project-${param}/update`); //link to route to {params}/tasks to update project.

const tasksLink = computed(() => `project-${param}/tasks`);
const projectById = computed(() => store.filterItemById);
const parentChild = computed(() => store.findParentChild);
const length = store.hasTasks; //check for the length of specific id
const totalDuration = computed(() => store.totalTaskDuration); //? calculates total tasks duration for specific project.

function removeProject(id) { //function that executes the deleted arg.
  const foundProjectId = projects.find((t) => t.id === id);
  deleteProject(id); //executes the delete project in pinia
  projectDeletedToActions(id); //action that push the action to actions state
  deletedHistory(foundProjectId, id); //action that stores deleted items
  return navigateTo("/projects"); //after, go to projects
}

</script>

<template>
  <div>
    <div
      class="project-detail"
      v-for="project in projectById(param)"
      :key="project.id"
    >
      <div class="container detail-container">
        <UITitle title="Project Details" />

        <div class="row">
          <div class="header">
            <h3 v-for="parent in projectById(param)" :key="parent.id">
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
                  v-for="parent in projectById(param)"
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
            <p class="item-desc">{{ totalDuration(param) }} hours</p>
            <div class="item">Project Age</div>
            <p class="item-desc">{{ project.projectAge }} days</p>
            <div class="item">Project Status</div>
            <p v-if="project.isComplete">Complete</p>
            <p v-if="!project.isComplete">In Progress</p>
            <div class="item">Tasks Number</div>
            <p>{{ length(param) }} Tasks</p>
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
            <button
              @click="removeProject(param)"
              type="button"
              class="btn btn-danger mr-5"
            >
              X
            </button>
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>actions for this project</div>
  </div>
</template>

<style scoped>
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
}
</style>
