<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);


const { taskList,projects,history } = store;

//link to route to {params}/update to update project.
const updateLink = computed(() => `project-${param}/update`);

//link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${param}/tasks`);

//extracted getter projectList that receives argument
//we will evaluate it if argument is equal to param
//returned the array of the element equal to param
//retirn array that contains parentsProjects
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
const length = store.findLength
//? calculates total tasks duration for specific project.
const totalDuration = computed(()=> store.totalTaskDuration)
//function that executes the delete receiving one arg.
function deleteProject(id) {
  store.deleteProject(id); //executes the delete project in pinia
  //received the id and parentId, and push it to actions state.
  //action that push the action to actions state
  store.projectDeletedToActions(id);
  //will redirect to tasks, or projects tasks depending on tasks length of the tasks
  //will push to history those that match
  history.push(projects.find((t) => t.id === id)); //needs to e fixed
  return navigateTo("/projects");
  
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
            <p class="item-desc">{{ project.totalDuration }} hours</p>
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
            <button @click="deleteProject(param)" type="button" class="btn btn-danger mr-5">X</button>
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
