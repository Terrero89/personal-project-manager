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

const pagesForDisplay = ref(3); //amount of pages i want the BUTTONSto display
const itemPerPage = ref(5); //FIXED AMOUNT // amount of items i want to display per page
const showDisplayButtons = ref(3); //amount of buttons i want to display for click
const currStartingItem = ref(0);
const currentValue = ref(0);
const lastPage = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);
const arrLength = computed(() => [...projectStore.projects].length);
const firstPage = computed(() => ([...projectStore.projects].length = 1));

// const endPage = computed(() =>
//   Math.min(firstPage.value + showDisplayButtons.value - 1, lastPage.value)
// );

const pages = computed(() => {
  const range = [];

  for (let i = firstPage.value; i <= lastPage.value; i++) {
    range.push({
      name: i,
      isActive: i === currPage.value,
    });
  }

  return range;
});

//findRange to display
const findRange = (start, end) => {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
    
  }
  return ans;
};
const next = () => {
  let counter = itemPerPage.value; // 5
  let initialCounter = 1;
  const preValue = showDisplayButtons.value; // 3
  console.log("preValue" + preValue);
  currPage.value++;
  console.log(currPage.value + " page number");
  // console.log(counter + " counter");
  currStartingItem.value = currStartingItem.value + itemPerPage.value; // will increase it by 5 each click
  if (currPage.value === lastPage.value - 1) {
    initialCounter++;
    console.log("initial " + initialCounter);
    console.log("LAST PAGE");
    let currVal = pagesForDisplay.value + 2; // 4
    console.log(currVal + " currVal + 1");
    pagesForDisplay.value = currVal;
    console.log(pagesForDisplay.value + " currVal + 1");
    console.log(pagesForDisplay.value);
    pagesForDisplay.value = currVal;
    console.log(currVal + "curr");
  }
};

const prev = () => {
  //currStatinItem = 3
  let counter = itemPerPage.value; // 3
  currPage.value--;
  currStartingItem.value = currStartingItem.value - itemPerPage.value;
  if (currPage.value === firstPage.value) {
    console.log("FIRST PAGE");
  }
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
      <div class="">Range {{ findRange(currPage, lastPage) }}</div>
      <div class="">{{ pages }}</div>
      <div>{{ currPage }}</div>
      <div>firstPage = {{ firstPage }}</div>
      <div>totalPages = {{ lastPage }}</div>
      <div>items Per Page = {{ itemPerPage }}</div>
      <div>total Items = {{ searchedProjects.length }}-</div>
      <div>current Value = {{ currentValue }}-</div>
      <div>currStartingPoint = {{ currStartingItem }}</div>
      <div>showButtonCounter = {{ showDisplayButtons }}</div>
      <div>pages for display {{ pagesForDisplay }}</div>
      <div
        class="d-flex justify-content-center"
        v-for="i in findRange(currPage, lastPage)"
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
        <button
          type="button"
          :class="{ disabled: currPage === 1 }"
          @click="first"
        >
          |--
        </button>
        <button
          type="button"
          :class="{ disabled: currPage === 1 }"
          @click="prev"
        >
          Prev
        </button>
        <button
          type="button"
          v-for="page in findRange(currPage, lastPage)"
          :key="page"
        >
          <div type="button" :class="{ active: page === currPage }">
            {{ page }}
          </div>
        </button>
        <button
          type="button"
          :class="{ disabled: currPage === lastPage }"
          @click="next"
        >
          Next</button
        >{{ last() }}
        <button
          type="button"
          :class="{ disabled: currPage === lastPage }"
          @click="last"
        >
          --|
        </button>
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
