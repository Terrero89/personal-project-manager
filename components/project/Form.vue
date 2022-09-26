<script setup>
import { useTest } from "@/store/test";
const store = useTest();
const { projects,addProject } = store;


const user = ref("");
const category = ref("");
const name = ref("");
const start = ref(null);
const end = ref(null);
const age = ref(start);
const time = ref(null);
const description = ref("");
const status = ref(false);

const submitForm = () => {
  const data = {
    id: 5,
    user: user.value,
    category: category.value,
    projectName: name.value,
    startDate: start.value,
    endDate: end.value,
    age: age.value,
    totalDuration: time.value,
    projectDescription: description.value,
    isComplete: status.value,
  };

// addProject(data)
  projects.push(data );
  navigateTo('/projects')
  console.log(data);
};
</script>

<template>
  <div class="form-wrapper">
    {{ age }}
    <form class="row g-3" @submit.prevent="submitForm">
      <UITitle title="Add Project" />
      <div class="input-group mb-3">
        <select
          class="form-select"
          v-model="user"
          aria-label="Default select example"
        >
          <option disabled value="">Select User</option>
          <option>Sergio Terrero</option>
          <option>Jackie Terrero</option>
          <option>Ezra Terrero</option>
          <option>Camila Terrero</option>
        </select>
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
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Python Project">Python Project</option>
          <option value="C Language">C Project</option>
          <option value="Data Structures and Algorithms">
            Data Structures and Algorithms
          </option>
          <option value="MongoDB">MongoDB</option>
          <option value="Node/Express Js">Node/Express Js</option>
          <option value="React Js">React Js</option>
        </select>
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Project Name</label>
        <input
          type="input"
          v-model.trim="name"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Start Date</label>
        <input
          type="date"
          v-model="start"
          class="form-control"
          id="inputEmail4"
        />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">End Date</label>
        <input
          type="date"
          v-model="end"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <div class="col-12">
        <label for="inputAddress2" class="form-label">Duration</label>
        <input
          type="number"
          class="form-control"
          id="inputAddress2"
          placeholder="Enter Time"
          v-model.trim="time"
        />
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
  max-width: 32rem;
  border-radius: 7px;
  border: solid black 1px;
  margin: 1rem auto;
  padding: 2.7rem 1.5rem;
}
</style>
