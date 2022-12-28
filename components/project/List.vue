<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useProjectStore } from "@/store/projects";
import { storeToRefs } from "pinia";

//?STORE INITIALIZATION
const route = useRoute(); //route object
const projectStore = useProjectStore(); //projects store
//?PROPERTIES DESTRUCTURING
const { fetchProjects } = projectStore;
const { projects } = storeToRefs(projectStore);

//?REFS AND PROPERTIES
const searchInput = ref("");
const currPage = ref(1); //shows me the current page im in
const pagesForDisplay = ref(3); //amount of pages i want the BUTTONSto display
const itemPerPage = ref(5); //FIXED AMOUNT // amount of items i want to display per page
const currStartingItem = ref(0);

//?COMPUTED PROPERTIES
const searchedProjects = computed(() => {
  return projectStore.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

const onPageChange = (page) => {
  console.log(page);
  currPage.value = page;
};

const lastPage = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);

const firstPage = computed(() => ([...projectStore.projects].length = 1));

const startPage = computed(() => {
  if (currPage.value === 1) {
    return 1;
  }

  if (currPage.value === lastPage.value) {
    const start = lastPage.value - pagesForDisplay.value + 1;
    if (start === 0) {
      return 1;
    } else {
      return lastPage.value;
    }
  }

  return currPage.value - 1;
});

const endPage = computed(() =>
  Math.min(startPage.value + pagesForDisplay.value - 1, lastPage.value)
);

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isActive: i === currPage.value,
    });
  }

  return range;
});

//?FUNCTIONS AND HANDLERS

const next = () => {
  currPage.value++;
  currStartingItem.value = currStartingItem.value + itemPerPage.value; // will increase it by 5 each click
  if (currPage.value === lastPage.value) {
    console.log("LAST PAGE");
    let currVal = pagesForDisplay.value + 2; // 4
    pagesForDisplay.value = currVal;
  }
};

const prev = () => {
  // let counter = itemPerPage.value; // 3
  currPage.value--;
  currStartingItem.value = currStartingItem.value - itemPerPage.value;
  if (currPage.value === firstPage.value) {
  }
};

const first = () => {
  let changed = (currPage.value = 1);
  currStartingItem.value = 0;
  return changed;
};

//FIX THIS PART RIGHT
const last = (page) => {
  let changed = (page * itemPerPage.value) - itemPerPage.value;
  itemPerPage.value = page;
  currPage.value = page;
  currStartingItem.value = changed;
  return changed;
};

const onClickPage = (page) => {
  let changed = (page * itemPerPage.value) - itemPerPage.value; //multiply by the value of the amount of items i want to see.
  currPage.value = page;
  currStartingItem.value = changed;
  return changed;
};

//?HOOKS
onMounted(() => {
fetchProjects();
  fetchProjects();
});

</script>

<template>
  <div class="projects">
    <UITitle title="Projects" class="container border-bottom" />
    <!-- <ProjectCategories /> -->
    <UICard>
      <SearchFilter v-model="searchInput" />
    </UICard>

    <UICard>
 

      <!-- search bar starts here should be emitted from component-->
      <div class="container">
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
          class="page-btn"
          type="button"
          :disabled="currPage === 1"
          :class="{ disabled: currPage === 1 }"
          @click="first"
        >
          |--
        </button>
        <button
          class="page-btn"
          type="button"
          :disabled="currPage === 1"
          :class="{ disabled: currPage === 1 }"
          @click="prev"
        >
          Prev
        </button>
        <li
          class="page-btn border-dark"
          :class="{ active: page.name === currPage }"
          type="button"
          v-for="page in pages"
          :key="page"
        >
          <div type="button" @click="onClickPage(page.name)">
            {{ page.name }}
          </div>
        </li>
        <div
          class="page-btn"
          type="button"
          :disabled="currPage === lastPage"
          :class="{ disabled: currPage === lastPage }"
          @click="next"
        >
          Next
        </div>
        <button
          class="page-btn"
          type="button"
          :disabled="currPage === lastPage"
          :class="{ disabled: currPage === lastPage }"
          @click="last(lastPage)"
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
.button-status {
  display: flex;
  justify-content: flex-end;
}
.button-status .button {
  margin-right: 0.4rem;
}

.disabled {
  color: rgb(187, 185, 185);
}

.active {
  background-color: rgba(104, 134, 255, 0.5);
  color: #ffffff;
}

.page-btn {
  border-radius: 5px;
  margin: 0.1rem;
  border: solid rgb(151, 151, 151) 1px;
  padding: 0.1rem 0.3rem;
}
</style>
