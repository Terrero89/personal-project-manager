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

const props = defineProps(['id'])

const updateLink = computed(() => `project-${param}/update`); //link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${param}/tasks`);
const projectById = computed(() => store.filterItemById);
const parentChild = computed(() => store.findParentChild);
const length = store.hasTasks; //check for the length of specific id
const totalDuration = computed(() => store.totalTaskDuration); //? calculates total tasks duration for specific project.

//FIX THE REMOVE FUNCTION THAT IS NOT DELETING BECAUSE THE PARAM ID IS NOT WORKING
function removeItem(id) {
  //function that executes the deleted arg.
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
        <UITitle title="Project Details" class="border-bottom" />

        <div class="row bg-light">
          <div class="header">
            <h3>
              {{ project.projectName }}
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
            <div class="">
              <button
                @click="removeItem(props.id)"
                type="button"
                class="btn btn-danger mr-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </button>
              <button type="button" class="btn btn-outline-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-code"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                  />
                  <path
                    d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>actions for this project</div>
  </div>
</template>

<style scoped>

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
