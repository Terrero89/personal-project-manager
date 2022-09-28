<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList, hasProjects } = store;
</script>

<template>
  <div class="projects">
    <div class="container wrapper">
      <UITitle title="Projects" />

      <div class="row mb-3">
      
        <div class="col d-flex justify-content-end">
          <nuxt-link type="button" to="/projects/addproject">
            <button class="btn btn-md btn-primary py-2 px-3">
          
              Add Project
            </button></nuxt-link
          >
        </div>
      </div>

      <SearchBar />

      <div class="row">
        <div class="col-lg-12">
          <ProjectListItem
            v-for="project in projectList"
            :key="project.id"
            :id="project.id"
            :project="project.projectName"
            :description="project.projectDescription"
            :status="project.isComplete"
          />
        </div>
        <div v-if="!hasProjects">No Projects available at this moment</div>

        <div>paginations</div>
        <div class="col-lg-12">
          <ProjectActions />
          <div>paginations</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-button {
  margin: 0 auto;
}
.mr {
  margin-left: auto;
}
.projects {
  display: flex;
  justify-content: center;

}
.project-item {
  border: solid red 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
}
.button-status {
  display: flex;
  justify-content: flex-end;
}

.button-status .button {
  margin-right: 0.4rem;
}

.wrapper {
  /* border: solid rgb(220, 220, 220) 1px;
  background-color: rgb(247, 247, 247); */
  /* padding: 2rem; */
  margin: 0 auto;
}
</style>
