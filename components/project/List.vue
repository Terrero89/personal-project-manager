<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useProjectStore } from "@/store/projects";
import { storeToRefs } from "pinia";

const route = useRoute(); //route object

const projectStore = useProjectStore(); //projects store
const { fetchProjects } = projectStore;
const { projects } = storeToRefs(projectStore);
const searchInput = ref("");
const currentPage = ref(1);

const searchedProjects = computed(() => {
  return projectStore.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

const onPageChange = (page) => {
  console.log(page);
  currentPage.value = page;
};

const page = ref(1);
const itemPerPage = ref(3); //could be a prop later
const currStartingItem = ref(0);
const currentValue = ref(0);
const totalPages = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);
const lastPage = computed(() => [...projectStore.projects].length);
const firstPage = computed(() => ([...projectStore.projects].length = 1));



const next = () => {
  //currStatinItem = 0
  let counter = itemPerPage.value; // 3
  console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value + counter; //
  console.log(currStartingItem.value + " currStartingItem");
};

const prev = () => {
  //currStatinItem = 3
 let counter = itemPerPage.value; // 3
  console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value - counter; //
  console.log(currStartingItem.value + " currStartingItem");
};


const last = () => {
  console.log(Math.ceil([...projectStore.projects].length / itemPerPage.value));
};

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
      <div>firstPage = {{ firstPage }}</div>
      <div>totalPages = {{ totalPages }}</div>
      <div>items Per Page = {{ itemPerPage }}</div>
      <div>total Items = {{ searchedProjects.length }}-</div>
      <div>current Value = {{ currentValue }}-</div>
      <div>currStartingPoint = {{ currStartingItem }}</div>
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
              v-for="project in [...searchedProjects].splice(
                currStartingItem,
                itemPerPage
              )"
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

      <button @click="first">first Page</button>
      <button @click="prev">Previous Page</button>
      <button @click="next">Next Page</button>{{ last() }}
      <button @click="last">last Page</button>
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
