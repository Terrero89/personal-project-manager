<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const taskParam = route.params.detail;
const param = route.params.projectId;
const { addHistory, taskAddedToActions, taskUpdatedToActions, editTask,updateTaskRequest,  fetchProjects,
  fetchTasks, } =
  store;
const { tasks, taskId, history } = storeToRefs(store);
const props = defineProps(["paramId"]);
const task = editTask(taskParam); //will update via v-model the project reactively in component and pinia will

const addTime = () => task.duration++;
const subsTime = () => task.duration--;

//converts to formatted dates, will convert the dates to a readable format.

//?function that will replace editable object in pinia reactively

if (task.isComplete) {
  task.endDate = new Date();
  task.age = useDateAge(task.startDate, new Date());
  console.log("calculated start date with current date");
} else {
  task.endDate = task.startDate;
  task.age = useDateAge(task.startDate, task.endDate);
  console.log("start date will be end date");
}


const updateTask = () => {
  let index = store.tasks.findIndex((task) => task.id === taskParam); //find index to be replaced

  store.editedTask = { ...store.tasks[index] }; //will catch the old entire project information before updated, including the dates
  taskUpdatedToActions(store.editedTask, taskParam, param);
  addHistory(store.editedTask); // added to history once updated

  if (task.isComplete) {
    task.endDate = new Date();
    task.age = useDateAge(task.startDate, new Date());
    console.log("calculated start date with current date");
  } else {
    task.endDate = task.startDate;
    task.age = useDateAge(task.startDate, task.startDate);
    console.log("start date will be end date");
    task.endDate = task.startDate;
  }
  task.age = useDateAge(task.startDate, task.endDate);
  updateTaskRequest(taskParam);
  navigateTo("/projects"); //redirect to projects page
};

// onBeforeMount(() => {
//   fetchProjects();
//   console.log("Fetching projects  and tasks in project/details");
//   fetchTasks();
// });
// console.log({ ...store.editTask(taskParam) });
// console.log(store.updateRequest(taskParam))
// console.log(store.editedTask);
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Update Task</p>

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
        <label for="inputEmail4" class="form-label mt-2">Time</label>

        <div
          class="d-flex justify-content-center counter col-6 col-lg-11 col-md-4 col-sm-4 my-0 mx-auto"
        >
          <button type="button" class="btn btn-danger" @click="subsTime">
            -
          </button>
          <div class="col-12 col-lg-8 col-md-6 col-sm-8 mx-5">
            <!-- <label for="duration" class="form-label">Duration</label> -->
            <input
              type="input"
              class="form-control"
              id="duration"
              v-model.trim="task.duration"
            />
          </div>

          <button type="button" class="btn btn-primary" @click="addTime">
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
      <div class="input-group">
        <textarea
          class="form-control"
          v-model="task.description"
          aria-label="With textarea"
        />
      </div>

      <div class="col-12">
        <button @click="updateTask" type="submit" class="btn btn-primary">
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
</style>
