<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;

const {
  addHistory,
  editProject,
  projectUpdatedToActions,
  historyByProject,
  updateProjectRequest,
} = store;
const { projects, history, editPro } = storeToRefs(store);
const project = editProject(param); //will update via v-model the project reactively in component and pinia will
// const { startDate, endDate } = project; //to convert dates into correct format

const firstDate = ref("");
const secondDate = ref("");

//converts to formatted dates, will convert the dates to a readable format.

//?function that will replace editable object in pinia reactively
const updateProject = () => {
  let index = store.projects.findIndex((project) => project.id === param); //find index to be replaced
  store.editPro = { ...store.projects[index], dateModified: new Date() }; //will catch the old entire project information before updated, including the dates
  projectUpdatedToActions(store.editPro); //add to actions once updated
  addHistory(store.editPro); // added to history once updated
  if (project.isComplete) {
    project.endDate = new Date();
  } else {
    project.endDate = secondDate.value; //project.startDate will change to the value entered on firstDate in pinia
  }
  project.startDate = firstDate.value; //project.startDate will change to the value entered on firstDate in pinia

  project.projectAge = useDateAge(firstDate.value, new Date()); //composable that return the age of the project
  updateProjectRequest(param);
  navigateTo("/projects"); //redirect to projects page
};


</script>

<template>
  <div class="form-wrapper">
    <form class="row g-3" @submit.prevent="submitForm">
      <p>Update Project</p>
    

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
        <label for="inputPassword4" class="form-label">Project Name</label>
        <input
          type="input"
          v-model.trim="project.projectName"
          class="form-control"
          id="inputPassword4"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Category</label>
        <select
          class="form-select"
          v-model="project.category"
          aria-label="Default select example"
          
        >
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Backend Development">Full Stack</option>
          <option value="Backend Development">School Assignments</option>
        </select>
      </div>
      <div class="col">
        <label for="inputEmail4" class="form-label">Technologies</label>
        <select
          class="form-select"
          v-model="project.technologies"
          aria-label="Default select example"
          multiple
        >
          <label for="inputEmail4" class="form-label">Select User</label>

          <option value="React js">React Js</option>
          <option value="Next js">Next Js</option>
          <option value="Vue js">Vue Js</option>
          <option value="Html">Html</option>
            <option value="CSS">Css</option>
          <option value="Nuxt js">Nuxt Js</option>
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
          <option value="Go">Go</option>
          <option value="Firebase">Firebase</option>
          <option value="Bootstrap">Boostrap</option>
          <option value="Tailwind">Tailwind</option>
          <option value="Sass">Saas</option>
        </select>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="inputEmail4" class="form-label">Start Date</label>
          <input
            type="input"
            v-model="project.startDate"
            class="form-control"
            id="inputEmail4"
          />
        </div>

        <div class="col-6">
          <label for="inputPassword4" class="form-label"> End Date</label>
          <input
            type="input"
            v-model="project.endDate"
            class="form-control"
            id="inputPassword4"
          />
        </div>

        <!-- will be equal to the the project.end and start date formatted -->
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

      <div class="input-group">
        <textarea
          class="form-control"
          v-model="project.description"
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
