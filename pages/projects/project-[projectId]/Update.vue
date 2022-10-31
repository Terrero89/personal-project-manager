<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);

const { addHistory, projectAddedToActions, editProject } = store;
const { projects, history } = storeToRefs(store);

/// i need to create an object that can be compared to the current project that will be edited

// const editedProject =
 //initialize project object from pinia project
 const project = store.editProject(param) //find the specific project to be in the v-model
const editedProject =  store.projects ? store.projects :{
   id: '',
  user: '',
  category: "",
  projectName: "",
  // start: project.startDate,
  // end: project.endDate,
  projectAge: "",
  totalDuration:"",
  projectName: "",
  isComplete: ""
  
}
// let oldProject ={
//   id: param,
//   user: project.user,
//   category: project.category,
//   name: project.projectName,
//   //  start: project.startDate,
//   //  end: project.endDate,
//   age: project.projectAge,
//   time: project.totalDuration,
//   description: project.projectDescription,
//   status: true,
// };

// let edited = reactive({
//   id: param,
//   user: oldProject.user,
//   category: oldProject.category,
//   projectName: oldProject.name,
//   // start: project.startDate,
//   // end: project.endDate,
//   projectAge: oldProject.age,
//   totalDuration: oldProject.time,
//   projectName: oldProject.description,
//   isComplete: oldProject.status,
// });

const updateProject = () => {
  let index = store.projects.findIndex((project) => project.id === param); //find index to be replaced
const newProject = {
  id: '',
  user: '',
  category: "",
  projectName: "",
  // start: project.startDate,
  // end: project.endDate,
  projectAge: "",
  totalDuration:"",
  projectName: "",
  isComplete: ""
}
  // console.log({...projects})
  console.log(store.projects[index]);

  // let compare = store.projects.find(p => p.id === param)

  // console.log(store.projects.find(p => p.id === param))
  // console.log(compare === store.editProject(1))
  // console.log(store.editProject(param))
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
      <div></div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Project Name</label>
        <input
          type="input"
          v-model.trim="project.projectName"
          class="form-control"
          id="inputPassword4"
        />
      </div>

      <!-- <div class="col-md-6">
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
      </div> -->

      <div class="col-12">
        <label for="inputAddress2" class="form-label">Duration</label>
        <input
          type="number"
          class="form-control"
          id="inputAddress2"
          placeholder="Enter Time"
          v-model.trim="project.totalDuration"
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
          Submit
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
