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

const currPage = ref(1); //shows me the current page im in
const prevPage = ref(0)
const pagesForDisplay = ref(3); //amount of pages i want the BUTTONSto display
const itemPerPage = ref(5); // amount of items i want to display per page
const showDisplayButtons = ref(3); //amount of buttons i want to display for click
const currStartingItem = ref(0);
const currentValue = ref(0);
const totalPages = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);
const lastPage = computed(() => [...projectStore.projects].length);
const firstPage = computed(() => ([...projectStore.projects].length = 1));

const next = () => {
  let counter = itemPerPage.value; // 5
  const preValue = showDisplayButtons.value; // 5
  console.log("preValue" + preValue);
  currPage.value++;
  console.log(currPage.value + " page number");
  // console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value + counter; //
  pagesForDisplay.value = currStartingItem.value + showDisplayButtons.value;
  // console.log(currStartingItem.value + " currStartingItem");
};

const prev = () => {
  //currStatinItem = 3
  let counter = itemPerPage.value; // 3
  currPage.value--;
  console.log(currPage.value + " page number");
  // console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value - counter; //
  pagesForDisplay.value = currPage.value * itemPerPage.value;
  // console.log(currStartingItem.value + " currStartingItem");
};

const last = () => {
  Math.ceil([...projectStore.projects].length / itemPerPage.value);
};

onMounted(() => {
  fetchProjects();
});
fetchProjects();
</script>

<template>
  <div class="projects">
    <UITitle title="Projects" class="container border-bottom" />
    <ProjectCategories />
    <UICard>
      <SearchFilter v-model="searchInput" />
    </UICard>

    <UICard>
      <div>{{ currPage }}</div>
      <div>firstPage = {{ firstPage }}</div>
      <div>totalPages = {{ totalPages }}</div>
      <div>items Per Page = {{ itemPerPage }}</div>
      <div>total Items = {{ searchedProjects.length }}-</div>
      <div>current Value = {{ currentValue }}-</div>
      <div>currStartingPoint = {{ currStartingItem }}</div>
      <div>showButtonCounter = {{ showDisplayButtons }}</div>
      <div
        class="d-flex justify-content-center"
        v-for="i in pagesForDisplay"
        :key="i"
      >
        <p>{{ i }}</p>
      </div>

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
      <div class="d-flex justify-content-center">
        <button @click="first">|--</button>
        <button @click="prev">Prev</button>
        <button v-for="page in pagesForDisplay" :key="page">
          <div>{{ page }}</div>
        </button>
        <button @click="next">Next</button>{{ last() }}
        <button @click="last">--|</button>
      </div>
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
