<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);

const { addHistory, editProject, projectUpdatedToActions } = store;
const { projects, history, editPro } = storeToRefs(store);
const project = editProject(param); //will update via v-model the project reactively in component and pinia will
const {startDate, endDate} = project //to convert dates into correct format

//converts to formatted dates
const datesFormat = (date) => {
let formatDate = new Date(date);
let day = formatDate.getDate()
let month = formatDate.getMonth()+1
let year = formatDate.getFullYear()
return month + "/" + day + "/" + year
};

const firstDate = ref('')
const secondDate = ref('')
// ! to be able to mute vmodel value, add bind vmodel value to another variable, then make those 
//!variabkles equal to the ones from pinia {start,endproject} = project
//?function that will replace editable object in pinia reactively
const updateProject = () => {
  let index = store.projects.findIndex((project) => project.id === param); //find index to be replaced
  store.editPro = {...store.projects[index]};
  projectUpdatedToActions(store.editPro); //add to action once updated
  addHistory(store.editPro); // addded to history one updated
  // console.log(project.startDate + " " + new Date(project.endDate));
  console.log(datesFormat(project.endDate))
  console.log(datesFormat(project.startDate))
  console.log(project.startDate)
  console.log("firstDate" + " " + firstDate.value)
  console.log("secondtDate" + " " + secondDate.value)
  console.log(index)
  project.startDate = firstDate.value
  project.endDate = secondDate.value 
  navigateTo("/projects");  //redirect to projects page
};
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Add Project</p>

      <div class="input-group mb-3">
        <select
          class="form-select"
          v-model="project.user"
          aria-label="select user"
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
          v-model="project.category"
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
          v-model.trim="project.projectName"
          class="form-control"
          id="inputPassword4"
        />
      </div>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Status</label>
        <select
          class="form-select"
          v-model="project.isComplete"
          aria-label="Default select example"
        >
          <option :value="true">Complete</option>
          <option :value="false">In Progress</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Start Date</label>
        <input
          type="date"
          v-model="firstDate"
          class="form-control"
          id="inputEmail4"
        />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">End Date</label>
        <input
          type="date"
          v-model="secondDate"
          class="form-control"
          id="inputPassword4"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Previous start Date</label>
        <input
          type="input"
          v-model="firstDate"
          class="form-control"
          id="inputEmail4"
        />
      </div>
<!-- will be equal to the the project.end and start date formatted -->
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Previous End Date</label>
        <input
          type="input"
          v-model="secondDate"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <div class="input-group">
        <textarea
          class="form-control"
          v-model="project.projectDescription"
          aria-label="With textarea"
        />
      </div>

      <div class="col-12">
        <button @click="updateProject" type="submit" class="btn btn-primary">
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
