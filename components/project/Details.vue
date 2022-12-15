<script setup>
import { useTest } from "@/store/test";
import { useProjectStore } from "@/store/projects";
import { useTaskStore } from "@/store/tasks";
import { useActionsStore } from "@/store/actions";
import { useHistoryStore } from "@/store/history";
import { storeToRefs } from "pinia";
import { onMounted, onUpdated } from "vue";
const props = defineProps(["id"]);
const route = useRoute(); //route object
const param = route.params.projectId;
//?STORE INITIALIZATION
const store = useTest();
const projectStore = useProjectStore();
const taskStore = useTaskStore();
const actionsStore = useActionsStore();
const historyStore = useHistoryStore();
//?PROPERTIES DESTRUCTURING
const { deletedHistory } = historyStore;
const {} = storeToRefs(historyStore);
const {} = actionsStore;
const {} = storeToRefs(actionsStore);
const { deleteProject, projectDeletedToActions } = projectStore;
const { findParentChild } = storeToRefs(projectStore);
const { fetchTasks } = taskStore;
const { totalTaskDuration, hasTasks } = storeToRefs(taskStore);
const { filterItemById } = storeToRefs(store);

//? COMPUTED PROPERTIES
const updateLink = computed(() => `project-${param}/update`); //link to route to {params}/tasks to update project.
const tasksLink = computed(() => `project-${param}/tasks`);
const addTaskLink = computed(() => `project-${param}/addTask`);
const projectById = computed(() => filterItemById.value);
const parentChild = computed(() => findParentChild.value);
const numberOfTasks = computed(() => hasTasks.value); //check for the length of specific id
const totalDuration = computed(() => totalTaskDuration.value); // calculates total tasks duration for specific project.

//?FUNCTIONS AND HANDLERS
function removeItem(id) {
  //function that executes the deleted arg.
  let foundProjectId = store.projects.find((t) => t.id === id);
  deleteProject(id); //executes the delete project in pinia
  projectDeletedToActions(id); //action that push the action to actions state
  deletedHistory(foundProjectId, id); //action that stores deleted items
  return navigateTo("/projects"); //after, go to projects
}

//?COMPOSABLES
// <p class="item-desc">{{ useFormatId(project.id, 15, 20) }}</p>

//?HOOKS

fetchTasks();
</script>

<template>
  <div>
    <div
      class="project-detail"
      v-for="project in projectById(param)"
      :key="project.id"
    >
      <div class="container detail-container ">
        <UITitle title="Project Details" class="border-bottom" />
        <UICard>
          <div class="row">
            <div class="col">
              <Nuxt-link :to="addTaskLink">
                <button type="submit" class="btn btn-primary">Add Task</button>
              </Nuxt-link>
            </div>
          </div>
        </UICard>
        <div class="row bg-light ">
          <div class="header">
            <h3 class="mx-2">
              {{ project.projectName }}
            </h3>
          </div>
          <div class="col">
            <div class="detail">
              <div class="content">
                <div class="item">Project Id</div>
                <p class="item-desc">{{ useFormatId(project.id, 15, 20) }}</p>
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
                <p class="item-desc">{{ project.description }}</p>
                <div class="item">Start Date</div>
                <p class="item-desc">{{ useFormatted(project.startDate) }}</p>
                <div class="item">End Date</div>
                <p class="item-desc" v-if="project.isComplete">
                  {{ useFormatted(project.dateModified) }}
                </p>
                <p class="item-desc" v-else>Project no completed</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="item">Project Duration</div>
            <p class="item-desc">{{ totalDuration(param) }} hours</p>
            <div class="item">Project Age</div>
            <p
              class="item-desc"
              v-if="useDateAge(project.startDate, project.dateModified) === 1"
            >
              {{ useDateAge(project.startDate, project.dateModified) }} Day old
            </p>
            <p
              :class="
                useDateAge(project.startDate, project.dateModified) > 14
                  ? 'text-danger'
                  : 'text-primary'
              "
              class="item-desc"
              v-else-if="
                useDateAge(project.startDate, project.dateModified) > 1 &&
                useDateAge(project.startDate, project.dateModified) < 15
              "
            >
              {{ useDateAge(project.startDate, project.dateModified) }} Days old
            </p>
            <p
              class="item-desc"
              :class="
                useDateAge(project.startDate, project.dateModified) > 14
                  ? 'text-danger'
                  : 'text-primary'
              "
              v-else-if="
                useDateAge(project.startDate, project.dateModified) > 14
              "
            >
              {{ useDateAge(project.startDate, project.dateModified) }} Days old
            </p>

            <div class="item">Project Status</div>
            <p
              :class="project.isComplete ? 'text-primary' : 'text-danger '"
              class="item-desc"
            >
              {{ project.isComplete ? "Complete" : "In Progress" }}
            </p>
            <div class="item">Number of Tasks</div>
            <p class="item-desc text-start">{{ numberOfTasks(param) }} Tasks</p>
            <div class="item">See All Tasks</div>
            <p class="item-desc">
              <Nuxt-link style="text-decoration: none" :to="tasksLink"
                >Tasks</Nuxt-link
              >
            </p>
            <div class="item">Technologies</div>

            <ProjectTechnologies
              v-for="tech in project.technologies"
              :key="tech"
              :technologies="tech"
            />

            <div class="my-3">
              <button
                @click="removeItem(props.id)"
                type="button"
                class="btn btn-danger mar"
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
              <Nuxt-Link :to="updateLink">
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
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.remover {
  list-style: none;
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
  color: rgb(10, 10, 10);
}
</style>
