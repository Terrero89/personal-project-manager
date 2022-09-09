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
      <UITitle title="Projects"/>
   <div>   search bar</div>
      latest actions - filterBy - sea - 

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
      <div>action section here</div>
        <div class="col-lg-12">
          <div class="actions-section">
            <h3>Actions Section</h3>
            <div class="actions">
              <h3>Project added</h3>
              <p>Date: 7/7/22</p>
            </div>
            <div class="actions">
              <h3>Project added</h3>
              <p>Date: 7/7/22</p>
            </div>
          </div>
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

.actions {
  border: solid rgb(179, 179, 179) 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
}
.actions-section {
  border: solid rgb(0, 0, 0) 1px;

  padding: 1rem;

  margin: 0.5rem 0;
}
</style>
