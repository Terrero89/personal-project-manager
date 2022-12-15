<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const { addHistory, addProject, projectAddedToActions } = store;
const { projectId } = storeToRefs(store);
const props = defineProps(["param"]);
const user = ref("");
const category = ref("");
const name = ref("");
const technologies = ref([]);
const description = ref("");


const submitForm = () => {
  const projectData = {
    // id: projectId.value,
    user: user.value,
    category: category.value,
    projectName: name.value,
    age: 1,
    description: description.value,
    isComplete: false,
    technologies: technologies.value,
    startDate: new Date(),
    endDate: new Date(),
    dateModified: new Date(),
  };

  //will be removed once i set firebase
  addProject(projectData); //add project to pinia
  addHistory(projectData); //add history to pinia
  projectAddedToActions(props.param); //add project to actions
  navigateTo("/projects"); //after, go to projects
  console.log(projectData);
};
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Add Project</p>

      <label for="inputPassword4" class="form-label">Project Name</label>
      <input
        type="input"
        v-model.trim="name"
        class="form-control"
        id="inputPassword4"
      />
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

      <label for="categories" class="form-label">Category</label>

      <div class="row">
        <div class="col">
          <select
            class="form-select"
            v-model="category"
            aria-label="Default select example"
          >
            <option disabled value="">Project Category</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Backend Development">Full Stack</option>
            <option value="Backend Development">School Assignments</option>
          </select>
        </div>

        <div class="col">
          <select
            multiple
            class="form-select"
            v-model="technologies"
            aria-label="Default select example"
          >
            <label for="categories" class="form-label">Technologies</label>
            <option value="">none</option>
            <option value="React Js">React Js</option>
            <option value="Vue Js">Vue Js</option>
            <option value="HTML">Html</option>
            <option value="CSS">Css</option>
            <option value="Tailwind">Tailwind</option>
            <option value="bulma">Bulma</option>
            <option value="Nuxt Js">Nuxt Js</option>
            <option value="Next Js">Next Js</option>
            <option value="Python">Python</option>
            <option value="Data Structures and Algorithms">
              Data Structures and Algorithms
            </option>
            <option value="Mysql">Mysql</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Node/Express Js">Node/Express Js</option>
            <option value="Flask">Flask</option>
            <option value="Django">Django</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
          </select>
        </div>
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
