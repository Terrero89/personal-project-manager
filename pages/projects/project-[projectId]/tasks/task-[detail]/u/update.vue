<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useTest } from "@/store/test";
import { useProjectStore } from "@/store/projects";
import { useTaskStore } from "@/store/tasks";
import { useActionsStore } from "@/store/actions";
import { useHistoryStore } from "@/store/history";
import { storeToRefs } from "pinia";

const route = useRoute(); //route object
const taskParam = route.params.detail;
const props = defineProps(["paramId"]);
const param = route.params.projectId;
//?STORE INITIALIZATION
const store = useTest();
const projectStore = useProjectStore();
const taskStore = useTaskStore();
const actionsStore = useActionsStore();
const historyStore = useHistoryStore();

//?PROPERTIES DESTRUCTURING
// const { } = historyStore;
// const {} = storeToRefs(historyStore);
// const {} = actionsStore;
// const {} = storeToRefs(actionsStore);
// const { } = projectStore;
// const { } = storeToRefs(projectStore);
// const {  } = taskStore;
// const {} = storeToRefs(taskStore);
// const { } = storeToRefs(store);


const {
  addHistory,
  taskAddedToActions,
  taskUpdatedToActions,
  editTask,

  updateTaskRequest,
  fetchProjects,
  fetchTasks,
} = store;
const { tasks, history, editedTask } = storeToRefs(store);



//? COMPUTED PROPERTIES
const task = computed(() => editTask(taskParam)); //will update via v-model the project reactively in component and pinia will

//?FUNCTIONS AND HANDLERS
const addTime = () => task.value.duration++;
const subsTime = () => task.value.duration--;


const updateTask = () => {
  let index = store.tasks.findIndex((task) => task.id === taskParam); //find index to be replaced
  store.editedTask = { ...store.tasks[index], dateModified: new Date() }; //will catch the old entire project information before updated, including the dates
  //once updated
  addHistory(store.editedTask); // added to history
  task.value.age = useDateAge(task.value.startDate, task.value.endDate);
  taskUpdatedToActions(param); // added to actions
  updateTaskRequest(taskParam);
  navigateTo("/projects"); //redirect to projects page
};

// onBeforeMount(() => {
//   fetchProjects();

//   fetchTasks();
// });
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <h3 class="mb-4">Update Task</h3>

      <div class="col-12">
        <label for="inputPassword4" class="form-label">Task Name</label>
        <input
          type="input"
          v-model.trim="task.taskName"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <div class="wrap row">
        <label for="inputEmail4" class="form-label">Time</label>

        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-danger col-lg-5 mx-2"
            @click="subsTime"
          >
            -
          </button>
          <div class="col-lg-3 col">
            <input
              type="input"
              class="form-control"
              id="duration"
              v-model.trim="task.duration"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary col-lg-5 mx-2"
            @click="addTime"
          >
            +
          </button>
        </div>
      </div>

      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Status</label>
        <select
          class="form-select"
          v-model="task.isComplete"
          aria-label="Default select example"
        >
          <option :value="true">Complete</option>
          <option :value="false">In Progress</option>
        </select>
      </div>
      <div class="">
        <label for="inputEmail4" class="form-label">Description</label>
        <textarea
          class="form-control"
          v-model="task.description"
          aria-label="With textarea"
        />
      </div>

      <div class="col-12">
        <button
          @click="updateTask"
          type="submit"
          class="btn btn-primary py-2 px-4"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-wrapper {
  background-color: white;
  max-width: 32rem;
  border-radius: 7px;
  border: solid rgb(143, 143, 143, 0.2) 1px;
  margin: 1rem auto;
  padding: 2.7rem 1.5rem;
}

label {
  color: rgb(77, 73, 73);
  font-weight: 400;
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
