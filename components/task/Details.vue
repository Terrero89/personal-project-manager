<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";
import { onMounted, onBeforeMount } from "vue";
const store = useTest();
const route = useRoute(); //route object
const router = useRouter(); //route object
const param = route.params.projectId;
const taskParam = route.params.detail;
const props = defineProps(["id"]);
const {
  tasks,
  projects,
  deletedToActions,
  history,
  taskList,
  findLength,
  findActionsByTask,
  fetchTasks,
  fetchProjects,
} = store;
const updateLink = computed(
  () => `/projects/project-${param}/tasks/task-${taskParam}/u/update`
);
const projectParent = computed(() => store.filterItemById);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
const length = store.hasTasks;
//function that deletes the item and return to projects page.
function removeTask(id) {
  store.deletedToActions(param); //will redirect to tasks, or projects tasks depending on tasks length of the tasks
  store.deleteTask(id); //executes the delete action in pinia
  if (length(param) - 1 < 1) {
    return navigateTo(`/projects/project-${param}`);
  } else {
    //will push to history those that match
    history.push(tasks.find((t) => t.id === id)); //needs to e fixed
    //after action is pushed to actions, navigate to project's tasks page
    return navigateTo(`/projects/project-${param}/tasks`);
  }
}
onBeforeMount(() => {
  fetchTasks();
  fetchProjects();
});
</script>

<template>
  <div class="tasks-wrapper">
    <div class="task-list">
      <div
        class="project-detail"
        v-for="task in findTaskDetail(taskParam)"
        :key="task.id"
      >
        <div class="container detail-container">
          <UITitle title="Task Details" class="border-bottom" />

          <div class="row bg-light">
            <div class="header">
              <h3
                class="mx-2"
                style="color: black; font-size: size 1.5rem"
                v-for="taskTitle in findTaskDetail(taskParam)"
                :key="taskTitle.id"
              >
                {{ taskTitle.taskName }}
              </h3>
            </div>

            <div class="col">
              <div class="detail">
                <div class="content">
                  <div class="item">Task ID</div>
                  <p class="item-desc">{{ useFormatId(task.id, 15, 20) }}</p>
                  <div class="item">Parent Name</div>
                  <p
                    class="item-desc"
                    v-for="parent in projectParent(param)"
                    :key="parent.id"
                  >
                    {{ parent.projectName }}
                  </p>

                  <div class="item">Description</div>
                  <p class="item-desc">{{ task.description }}</p>
                  <div class="item">Start Date</div>
                  <p class="item-desc">{{ useFormatted(task.startDate) }}</p>
                  <div class="item">End Date</div>
                  <p class="item-desc" v-if="task.endDate">
                    {{ useFormatted(task.endDate) }}
                  </p>
                  <p class="item-desc" v-else>Task no completed</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="item">Task Duration</div>
              <p class="item-desc">{{ task.duration }} hours</p>
              <div class="item">Task Age</div>

              <p
                class="item-desc"
                v-if="useDateAge(task.startDate, task.dateModified) === 0"
              >
                {{ useDateAge(task.startDate, task.dateModified) }} days old
              </p>

              <p
                class="item-desc"
                :class="
                  useDateAge(task.startDate, task.dateModified) > 14
                    ? 'text-danger'
                    : 'text-primary'
                "
                v-else-if="
                  useDateAge(task.startDate, task.dateModified) > 1 &&
                  useDateAge(task.startDate, task.dateModified) < 15
                "
              >
                {{ useDateAge(task.startDate, task.dateModified) }} days
              </p>

              <p
                class="item-desc"
                :class="
                  useDateAge(task.startDate, task.dateModified) > 14
                    ? 'text-danger'
                    : 'text-primary'
                "
                v-else-if="useDateAge(task.startDate, task.dateModified) > 14"
              >
                {{ useDateAge(task.startDate, task.dateModified) }} days
              </p>

              <div class="item">Task Status</div>
              <p
                class="item-desc"
                :class="task.isComplete ? 'text-primary' : 'text-danger '"
              >
                {{ task.isComplete ? "Complete" : "In Progress" }}
              </p>

              <div class="">
                <button
                  @click="removeTask(taskParam)"
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
  </div>
</template>

<style scoped>
.remover {
  list-style: none;
}
.btn {
  margin-right: 1rem;
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
</style>
