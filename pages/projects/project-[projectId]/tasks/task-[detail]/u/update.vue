<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object

const taskParam = parseInt(route.params.detail);
const { addHistory, taskAddedToActions, taskUpdatedToActions, editTask } =
  store;
const { tasks, taskId, history, editedTask } = storeToRefs(store);
const props = defineProps(["paramId"]);
const task = editTask(taskParam); //will update via v-model the project reactively in component and pinia will

const addTime = () => {
  task.duration++;
};

const subsTime = () => {
  task.duration--;
};

//converts to formatted dates, will convert the dates to a readable format.

//?function that will replace editable object in pinia reactively

console.log();
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
  //    taskUpdatedToActions(store.editedTask); //add to actions once updated
  addHistory(store.editedTask); // added to history once updated

  //   console.log("AT THE BEGGINING + " + task.startDate, task.endDate);
  console.log({ ...store.tasks[index] });
  console.log({ ...store.editedTask });
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

  //composable
  //   if (task.isComplete) {
  //     task.endDate = task.startDate;
  //   } else {

  //   }
  console.log(task.isComplete);
  console.log((task.age = useDateAge(task.startDate, task.endDate)));
  console.log((task.age = useDateAge(task.startDate, new Date())));
  task.age = useDateAge(task.startDate, task.endDate);

  //   navigateTo("/projects"); //redirect to projects page
};
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
        <label for="inputEmail4" class="form-label mt-2">Status</label>

        <div class="col-8 col-lg-8 col-md-6 col-sm-8">
          <!-- <label for="duration" class="form-label">Duration</label> -->
          <input
            type="number"
            class="form-control"
            id="duration"
            placeholder="Enter Time"
            v-model.trim="task.duration"
          />
        </div>
        <div class="d-flex counter col-4 col-lg-4 col-md-4 col-sm-4">
          <button type="button" class="btn btn-primary mx-2" @click="addTime">
            +
          </button>
          <button type="button" class="btn btn-danger" @click="subsTime">
            -
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
/* .counter{
     border: solid red 1px;
    display: flex;
    margin: auto 0;
    justify-content: center;
    border: solid red 1px;
} */
.form-wrapper {
  background-color: white;
  max-width: 32rem;
  border-radius: 7px;
  border: solid rgb(143, 143, 143, 0.2) 1px;
  margin: 1rem auto;
  padding: 2.7rem 1.5rem;
}
</style>
