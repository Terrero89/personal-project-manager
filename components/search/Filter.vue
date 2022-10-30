<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const props = defineProps([ "modelValue"]);
const emit = defineEmits(['update:modelValue']);
const store = useTest();
const { projects } = storeToRefs(store);


// const searchedProjects = computed(() => {
//   return store.projects.filter((p) => {
//     return (
//       p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
//     );
//   });
// });
</script>

<template>
  <!-- search bar starts here -->
  <div>
    <div>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-7">
          <!-- search button here, emit event soon to be set up -->
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
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>

        <!--  -->

        <div class="col-lg-4 col-md-4 col-sm-4 col-5">
          <nuxt-link
            type="button"
            class="d-flex justify-content-end mx-3"
            to="/projects/addproject"
          >
            <button class="btn btn-md btn-primary">+ Project</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
