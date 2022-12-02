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

const hero = computed(() => [...searchedProjects].splice(0, 8));

const onPageChange = (page) => {
  console.log(page);
  currentPage.value = page;
};

const currPage = ref(1); //shows me the current page im in
const prevPage = ref(0);
const pagesForDisplay = ref(3); //FIXED AMOUNT - amount of pages i want the BUTTONS to display
const itemPerPage = ref(5); // amount of items i want to display per page
const currStartingItem = ref(0);

const lastPage = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);
// const lastPage = computed(() => [...projectStore.projects].length);
const firstPage = computed(() => ([...projectStore.projects].length = 1));

const next = () => {
  let counter = itemPerPage.value; // 5
  let preValue = pagesForDisplay.value; // 3 dont change
  console.log("preValue" + preValue);
  currPage.value++; // INCREASE WITH EVERY CLICK
  console.log(currPage.value + " page number");
  currStartingItem.value = itemPerPage.value + itemPerPage.value; //
  if (currPage.value === lastPage.value) {
    console.log("LAST PAGE");
  }
};

const prev = () => {
  //currStatinItem = 3
  let counter = itemPerPage.value; // 5
  currPage.value--;
  console.log(currPage.value + " page number");
  // console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value - itemPerPage.value; // //
  if (currPage.value === firstPage.value) {
    console.log("FIRST PAGE");
  }
};

const first = () => {
  if (currPage.value === 1) {
  }
};

const last = () => {
  currPage.value;
  if (currPage.value === lastPage) {
    currPage.value = lastPage;
    Math.ceil([...projectStore.projects].length / itemPerPage.value);
  }
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
      <div>Current Page= {{ currPage }}</div>
      <div>firstPage = {{ firstPage }}</div>

      <div>Last Page = {{ lastPage }}</div>
      <div>items Per Page = {{ itemPerPage }}</div>
      <div>total Items = {{ searchedProjects.length }}-</div>

      <div>currStartingPoint = {{ currStartingItem }}</div>

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
        <button :class="{ disabled: currPage === 1 }" @click="first">
          |--
        </button>
        <button :class="{ disabled: currPage === 1 }" @click="prev">
          Prev
        </button>
        <button v-for="page in pagesForDisplay" :key="page">
          <div :class="{ active: page === currPage }">{{ page }}</div>
        </button>
        <button :class="{ disabled: currPage === lastPage }" @click="next">
          Next</button
        >{{ last() }}
        <button :class="{ disabled: currPage === lastPage }" @click="last">
          --|
        </button>
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

.disabled {
  color: red;
}

.active {
  background-color: rgb(0, 26, 255);
  color: rgb(236, 236, 236);
}
</style>
