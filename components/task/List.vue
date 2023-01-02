<script setup>
import { useTest } from "@/store/test";
import { useProjectStore } from "@/store/projects";
import { useTaskStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";



//?REFS PROPERTIES
const searchInput = ref("");
const currPage = ref(1); //shows me the current page im in
const pagesForDisplay = ref(3); //amount of pages i want the BUTTONSto display
const itemPerPage = ref(4); //FIXED AMOUNT // amount of items i want to display per page
const currStartingItem = ref(0);
//?STORE INITIALIZATION
const store = useTest();
const projectStore = useProjectStore();
const taskStore = useTaskStore();
const route = useRoute(); //route object
const param = route.params.projectId;
//?PROPERTIES DESTRUCTURING
const { fetchProjects } = projectStore;
const { getParentName } = storeToRefs(projectStore);
const { fetchTasks, tasks } = taskStore;
const { taskOfParents, hasTasks } = storeToRefs(taskStore);

//? COMPUTED PROPERTIES
const tasksOfParent = computed(() => taskOfParents.value);
const getParent = computed(() => getParentName.value);
const length = computed(() => hasTasks.value);

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

const searchedTasks = computed(() => {
  const item = store.tasks;
  const input = searchInput;
  return store.tasks.filter((p) => {
    return (
      p.taskName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});
const lengthList = Math.ceil(searchedTasks.value.length / itemPerPage.value);
const pageLength = computed(() => {
  if (length < 3) {
    console.log("lenght < " + lengthList);
  }
  pagesForDisplay.value = pagesForDisplay.value - 1;
});

//?FUNCTIONS AND HANDLERS
const parentOfChild = (parameter) => {
  return parameter;
};

//?FUNCTIONS AND HANDLERS

const onPageChange = (page) => {
  console.log(page);
  currPage.value = page;
};

const next = () => {
  currPage.value++;
  currStartingItem.value = currStartingItem.value + itemPerPage.value; // will increase it by 5 each click

  if (currPage.value === lastPage.value) {
    console.log("LAST PAGE");
    let currVal = pagesForDisplay.value + 2; // 4
    console.log(currVal + " currVal + 1");
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
  let changed = page * itemPerPage.value - itemPerPage.value;
  itemPerPage.value = page;
  currPage.value = page;
  currStartingItem.value = changed;
  return changed;
};

const onClickPage = (page) => {
  let changed = page * itemPerPage.value - itemPerPage.value; //multiply by the value of the amount of items i want to see.
  currPage.value = page;
  currStartingItem.value = changed;
  return changed;
};
//?HOOKS
onMounted(() => {
  fetchTasks();
  fetchProjects();
});
fetchTasks();
fetchProjects();

//?COMPOSABLES
//useFormatId
</script>

<template>
  <div class="tasks-wrapper d-flex">
    <div class="task-list">
      <UITitle title="Tasks" class="border-bottom" />

      <UICard>
        <SearchFilter v-model="searchInput" />
      </UICard>

      <UICard>
        <nuxt-link to="/projects">projects</nuxt-link>
        <div class="row mx-lg-5 mx-sx-2 border-1">
          <div class="row fw-bold header border d-inline-flex">
            <div class="col">ID</div>
            <div class="col">Task Name</div>
            <div class="col">Status</div>
            <div class="col">Details</div>
          </div>

          <div
            class="row mx-sx-2 task"
            v-for="task in [...searchedTasks].splice(
              currStartingItem,
              itemPerPage
            )"
            :key="task"
          >
            <div class="row">
              <h3
                class="fs-6"
                style="color: black; font-size: size 1.5rem"
                v-for="parent in getParent"
                :key="parent.id"
              >
                {{ parent.projectName }}
              </h3>
            </div>
            <div class="col fw-bold">{{ useFormatId(task.id, 15, 20) }}</div>
            <div class="col flex-wrap">{{ task.taskName }}</div>
            <div class="col">
              {{ task.isComplete ? "Complete" : "Progress" }}
            </div>

            <div class="col">
              <Nuxt-Link
                class=""
                :to="`/projects/project-${task.parentId}/tasks/task-${task.id}`"
              >
                <button
                  type="button"
                  class="
                    btn btn-outline-primary
                    border-primary
                    px-1 px-md-3 px-lg-3
                    rounded
                    border-none
                  "
                >
                  Details
                </button>
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </UICard>

      <div v-if="!length(param) < 1">No tasks available at this moment</div>
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
    </div>
  </div>
</template>

<style scoped>
.link {
  background-color: rgb(66, 178, 252);
}

.link:hover {
  background-color: rgb(122, 196, 245);
}
.header {
  border-bottom: solid rgb(218, 214, 214) 1px;
  background-color: rgba(104, 134, 255, 0.5);
  padding: 1rem;
  margin: 0.5rem 0rem;
  display: flex;
  min-height: 4rem;
  align-items: center;
  border-radius: 2px;
}
.task {
  border-bottom: solid rgb(218, 214, 214) 1px;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  margin: 0.2rem 0rem;
  display: flex;
  min-height: 5rem;
  align-items: center;
  border-radius: 2px;
}

.task-list {
  max-width: 1500px;
  margin: 0 auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  /* border: 1px solid #ddd; */
}

th,
td {
  text-align: left;

  /* font-size: 1.2rem;*/
}

.table-header {
  background-color: rgb(227, 239, 253);
  /* border: solid rgb(159, 159, 159) 1px; */
}

.table-header th {
  font-size: 0.8rem;
  border: none;
  padding: 0.8rem 1rem;
  /* border: solid rgb(169, 169, 169) 1px; */
}
.table-content {
  color: rgb(84, 84, 84);
  /* border: solid rgb(159, 159, 159) 0.5px; */
  text-align: center;
}
.table-content td {
  font-size: 0.8rem;
  /* padding:2rem; */

  padding: 1rem 1rem;

  color: rgb(84, 84, 84);
}
.table-content {
  background-color: white;
}
.project {
  margin: 0 auto;
  max-width: 1650px;

  padding: 2rem;
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
