<script setup>
const props = defineProps({
  MaxVisibleButtons: { type: Number, required: false, default: 3 },
  totalPages: { type: Number, required: true },
  total: { type: Number, required: true },
  perPage: { type: Number, required: true },
  currentPage: { type: Number, required: true },
});

const emit = defineEmits(["pageChanged"]);

//?COMPUTED PROPERTIES
const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }
  if (props.currentPage === props.totalPages) {
    props.totalPages - (props.maxVisibleButtons - 1);
 
  }
  // When inbetween
  return props.currentPage - 1;
});

const endPage = computed(() =>
  Math.min(startPage + props.maxVisibleButtons - 1, props.totalPages)
);

const pages = computed(() => {
  const range = [];

  for (let i = startPage; i <= endPage; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});

const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === props.totalPages);

//?METHODS OR FUNCTIONS
const onClickFirstPage = () => emit("pageChanged", 1);
const onClickPreviousPage = () => emit("pageChanged", props.currentPage - 1);
const onClickPage = (page) => emit("pageChanged", page);
const onClickNextPage = () => emit("pageChanged", props.currentPage + 1);
const onClickLastPage = () => emit("pageChanged", props.totalPages);
const isPageActive = (page) => props.currentPage === page;
</script>

<template>
  <div>
    {{pages}}
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          First 
        </button>
        
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          Previous
        </button>
      </li>

      <!-- Visible Buttons Start -->

      <li v-for="page in pages" class="pagination-item" :key="page">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <!-- Visible Buttons End -->

      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          Next
        </button>
      </li>

      <li class="pagination-item">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination {
  list-style-type: none;

}

.pagination-item {
  display: inline-block;

}

.active > button {
  background-color: #4aae9b;
  color: #ffffff;
}


</style>
