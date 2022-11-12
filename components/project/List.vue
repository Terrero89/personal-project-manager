<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem, history } = store;
const { projects, actions } = storeToRefs(store);
const searchInput = ref("");
const searchedProjects = computed(() => {
  return store.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

//SEARCH WORKING, APPLY EMIT EVENT TO DO IT V-MODEL WAY
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
            <div class="col "></div>
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
          <div v-if="!hasProjects">No Projects available at this moment</div>
        </div>
      </div>
    </UICard>
    <UICard> history </UICard>
    <UICard>
      <div class="row">
        <div class=" mx-auto">
          <ActionsItems
        v-for="action in actions"
        :key="action.id"
        :id="action.id"
        :parent-id="action.parentId"
        :type="action.type"
        :name="action.name"
        :category="action.category"
        :date-modified="useFormatted(action.dateModified)"
      />
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
