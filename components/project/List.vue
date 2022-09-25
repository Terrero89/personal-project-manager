<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList } = store;
</script>

<template>
  <div class="projects">
    <div class="container wrapper">
      <UITitle title="Projects" />
      <div>search bar</div>
<<<<<<< HEAD
      latest actions - filterBy - sea -
=======
      latest actions - filterBy - seach bar-
>>>>>>> delete-feature

      <!-- search bar, filter by project type, etc.. goes here. -->
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
<<<<<<< HEAD

        <div class="col-lg-12">
          <ProjectActions />
=======
        <div>paginations</div>
        <div class="col-lg-12">
          <ProjectActions />
          <div>paginations</div>
>>>>>>> delete-feature
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
