<script setup>
import { useTest } from "@/store/test";
import { count } from "console";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);

const { addHistory, projectAddedToActions, editProject, editMethod } = store;
const { projects, projectId, historyId, history } = storeToRefs(store);

/// i need to create an object that can be compared to the current project that will be edited

const project = store.editProject(param); //initialize project object from pinia project

let oldProject ={
  id: param,
  user: project.user,
  category: project.category,
  name: project.projectName,
  //  start: project.startDate,
  //  end: project.endDate,
  age: project.projectAge,
  time: project.totalDuration,
  description: project.projectDescription,
  status: true,
};

let edited = {
  id: param,
  user: oldProject.user,
  category: oldProject.category,
  name: oldProject.name,
  // start: project.startDate,
  // end: project.endDate,
  age: oldProject.age,
  time: oldProject.time,
  description: oldProject.description,
  status: oldProject.status,
};


const obj = {...edited} = {...oldProject} 

// console.log({ ...edited } == { ...edited });

const compare = oldProject === oldProject 









const updateProject = () => {

  if(edited === oldProject){
    return edited
  }else{
    return oldProject
  }
};
</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Add Project</p>
     <p>{{obj}}</p> 
     <p> {{compare}}</p>
     <p>{{updateProject()}}</p>
     <p>{{editProject(1)}}</p>
    >
      <div class="input-group mb-3">
        <select
          class="form-select"
          v-model="oldProject.user"
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
          v-model="oldProject.category"
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
          v-model.trim="oldProject.name"
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
          v-model.trim="oldProject.time"
        />
      </div>
      <div class="input-group">
        <textarea
          class="form-control"
          v-model="oldProject.description"
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
