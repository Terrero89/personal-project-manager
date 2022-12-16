<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const { addHistory, taskAddedToActions, addTask } = store;
const { tasks, taskId, history } = storeToRefs(store);
const props = defineProps(["paramId"]);

const category = ref("");
const name = ref("");
const description = ref("");

const submitForm = () => {
  const taskData = {
    parentId: props.paramId,
    category: category.value,
    taskName: name.value,
    age: 1,
    duration: 0,
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
  <div class="form-wrapper ">
   
    <form class="row g-3" @submit.prevent="submitForm">
      <h3 class="mb-4">Add Task</h3>
      <div>
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

      <div>
        <label for="inputPassword4" class="form-label">Task Name</label>
        <input
          type="input"
          v-model.trim="name"
          class="form-control"
          id="inputPassword4"
        />
      </div>
      <div>
        <label for="inputPassword4" class="form-label">Description</label>
        <textarea
          class="form-control"
          v-model="description"
          aria-label="With textarea"
        />
      </div>

      <div>
        <button type="submit" class="btn btn-primary py-2 px-4">Submit</button>
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
