<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useProjectStore } from "@/store/projects";
import { storeToRefs } from "pinia";

const route = useRoute(); //route object

const projectStore = useProjectStore(); //projects store
const { fetchProjects } = projectStore;
const { projects} = storeToRefs(projectStore);
const searchInput = ref("");

const searchedProjects = computed(() => {
  return projectStore.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});
onMounted(() => {
  fetchProjects();
});
fetchProjects();
</script>

<template>
  <div class="projects">
    <UITitle title="Projects" class="container border-bottom" />
    <!-- Filter selections soon to be in component -->
    <ProjectCategories />
    <!-- filter selection for projects ends -->
    <UICard>
      <SearchFilter v-model="searchInput" />
    </UICard>
    <UICard>
      <!-- search bar starts here should be emitted from component-->
      <div class="container">
        <div class="page-top">
          <div class="row mb-3">
            <div class="col"></div>
          </div>
        </div>

        <div class="row">
          <div class="">
            <ProjectListItem
              v-for="project in searchedProjects"
              :key="project.id"
              :id="project.id"
              :project="project.projectName"
              :category="project.category"
              :description="project.projectDescription"
              :status="project.isComplete"
            />
          </div>

          <div v-if="!projectStore.projectList.length > 0">
            No Projects available at this moment
          </div>
        </div>
      </div>
    </UICard>
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
  min-height: 100vh;
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
</style>
