<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const { addHistory, taskAddedToActions, addTask } = store;
const { tasks, taskId, history } = storeToRefs(store);
const props = defineProps(["paramId"]);

const category = ref("");
const name = ref("");
const age = ref(0);
const time = ref(null);
const description = ref("");
const status = ref(null);

const submitForm = () => {
  const taskData = {
    // id: taskId.value,
    parentId: props.paramId,
    category: category.value,
    taskName: name.value,
    age: age.value,
    duration: time.value,
    description: description.value,
    isComplete: false,
    startDate: new Date(),
    endDate: new Date(),
    dateModified: new Date(),
  };

  addTask(taskData); //add project to pinia
  addHistory(taskData); //add history to pinia
  taskAddedToActions(props.paramId); //add project to actions
  navigateTo(`/projects/project-${props.paramId}`); //after, go to projects
  console.log(taskData);
};
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Add Task</p>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Task Name</label>
        <input
          type="input"
          v-model.trim="name"
          class="form-control"
          id="inputPassword4"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Category</label>
        <select
          class="form-select"
          v-model="category"
          aria-label="Default select example"
        >
          <label for="inputEmail4" class="form-label">Select User</label>
          <option disabled value="">Project Category</option>
          <option value="Frontend Development">School Assignments</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>

          <option value="Data Structures and Algorithms">
            Data Structures and Algorithms
          </option>
        </select>
      </div>

      <div class="col-12">
        <label for="duration" class="form-label">Duration</label>
        <input
          type="number"
          class="form-control"
          id="duration"
          placeholder="Enter Time"
          v-model.trim="time"
        />
      </div>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Status</label>
        <select
          class="form-select"
          v-model="status"
          aria-label="Default select example"
        >
          <option :value="true">Complete</option>
          <option :value="false">In Progress</option>
        </select>
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          v-model="description"
          aria-label="With textarea"
        />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
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
