<script setup>
const props = defineProps({
  currPage: { type: Number, required: true },
  buttonsNumber: { type: Number, required: false, default: 3 },
  perPage: { type: Number, required: true },
  currentPoint: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});
const emit = defineEmits(["pageChanged"]);

const onPageChange = (page) => {
  console.log(page);
  props.currPage  = page;
};

const isInLastPage = computed(() => props.currPage === last());
const lastPage = computed(() =>
  Math.ceil([...projectStore.projects].length / itemPerPage.value)
);
// const arrLength = computed(() => [...projectStore.projects].length);
const firstPage = computed(() => ([...projectStore.projects].length = 1));

const startPage = computed(() => {
  if (props.currPage === 1) {
    return 1;
  }

  if (props.currPage === lastPage.value) {
    // return lastPage.value - pagesForDisplay.value + 1;
    const start = lastPage.value - pagesForDisplay.value + 1;
    if (start === 0) {
      return 1;
    } else {
      return lastPage.value;
    }
  }

  return props.currPage - 1;
});

const endPage = computed(() =>
  Math.min(startPage.value + pagesForDisplay.value - 1, lastPage.value)
);

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isActive: i ===props.currPage 
    });
  }

  return range;
});

//?FUNCTIONS AND HANDLERS

const next = () => {
  props.currPage ++;
  currStartingItem.value = currStartingItem.value + itemPerPage.value; // will increase it by 5 each click
  if (currPage.value === lastPage.value) {
   
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
</script>

<template>
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
        <li class="page-btn" type="button" v-for="page in pages" :key="page">
          <button
            type="button"
            @click="onClickPage(page.name)"
            :class="{ active: page.name === currPage }"
          >
            {{ page.name }}
          </button>
        </li>
        <button
          class="page-btn"
          type="button"
          :disabled="currPage === lastPage"
          :class="{ disabled: currPage === lastPage }"
          @click="next"
        >
          Next
        </button>
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
  background-color: #4aae9b;
  color: #ffffff;
}

.page-btn {
  border-radius: 5px;
  margin: 0.1rem;
  border: solid rgb(151, 151, 151) 1px;
  padding: 0.1rem 0.3rem;
}
</style>
