<script setup>
import { onMounted, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";

import { useHistoryStore } from "@/store/history";
const emit = defineEmits(["search"]);

//?REFS AND PROPERTIES
const searchInput = ref("");
const currPage = ref(1); //shows me the current page im in
const pagesForDisplay = ref(3); //amount of pages i want the BUTTONS to display
const itemPerPage = ref(4); //FIXED AMOUNT // amount of items i want to display per page
const currStartingItem = ref(0);
//?STORE INITIALIZATION

const route = useRoute();
const historyStore = useHistoryStore();

//?PROPERTIES DESTRUCTURING
const { fetchHistory } = historyStore;
const { history } = storeToRefs(historyStore);

//?COMPUTED PROPERTIES
const lastPage = computed(() =>
  Math.ceil([...historyStore.history].length / itemPerPage.value)
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

const lengthList = Math.ceil(history.value.length / itemPerPage.value);
const pageLength = computed(() => {
  if (length < 3) {
    console.log("lenght < " + lengthList);
  }
  pagesForDisplay.value = pagesForDisplay.value - 1;
});

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
onMounted(() => {
  fetchHistory;
});
</script>

<template>
  <div>

    <div class="container">
        <UITitle
        title="History"
        class="border-bottom"
      />
    </div>
 

    <UICard>
   
      <HistoryItem
        v-for="item in [...history].splice(currStartingItem, itemPerPage)"
        :key="item.id"
        :id="item.id"
        :project="item.projectName"
        :task="item.taskName"
        :category="item.category"
        :description="item.description"
        :status="item.isComplete"
        :technologies="item.technologies"
        :task-name="item.taskName"
        :date-modified="useDate(item.dateModified)"
        :start-date="useDate(item.startDate)"
      />

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

    <!-- <UICard>
      <ActionsItems
        v-for="action in actions"
        :key="action.id"
        :id="action.id"
        :type="action.type"
        :name="action.name"
        :category="action.category"
        :parent-id="action.parentId"
        :date-modified="useFormatted(action.dateModified)"
      />
    </UICard> -->
  </div>
</template>

<style scoped>
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
