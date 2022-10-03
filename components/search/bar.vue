<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(["customChange"]);

const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem } = store;
const { projects } = storeToRefs(store);

const searchInput = ref("");

const searchedProjects = computed(() => {
  return store.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

const searchBar = (event) => emit("customChange", searchedProjects);
</script>

<template>
  <!-- search bar starts here -->
  <div>
    <div class="mb-3">
      <div class="row">
        <div class="col-lg-8 col-md-6 col-sm-6 col-7 my-2">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                /></svg
            ></span>

            <input
              type="text"
              class="form-control"
              placeholder="Search by.."
              v-model="searchInput"
              @input="searchBar"
            />
          </div>
        </div>
        <SearchDates />
        
      </div>
    </div>
  </div>
</template>
