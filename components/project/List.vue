<script setup>
import projects from "@/data.json";

const dataList = [...projects];
</script>

<template>
  <div class="projects">
    <div class="container wrapper">
      <div class="row">
        <div class="col-lg-6 col-md-8">
          <ProjectListItem
            v-for="project in dataList"
            :key="project.id"
            :id="project.id"
            :project="project.projectName"
            :description="project.projectDescription"
            :task-number="project.tasks.length"
            :status="project.isComplete"
            :user="project.user"
          />
       
        </div>

        <div class="col-lg-6 col-md-4">
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
  border: solid rgb(0, 81, 255) 1px;
  padding: 2rem;
  margin: 0 auto;
}

.actions {
  border: solid red 1px;
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
