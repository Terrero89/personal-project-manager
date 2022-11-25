<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeMount } from "vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const store = useTest();
const { projects } = storeToRefs(store);
const { fetchProjects, fetchTasks } = store;

// const searchedProjects = computed(() => {
//   return store.projects.filter((p) => {
//     return (
//       p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
//     );
//   });
// });

onBeforeMount(() => {
  fetchProjects();
  // console.log("Fetching projects  and tasks in project/details");
  fetchTasks();
});
</script>

<template>
  <!-- search bar starts here -->
  <div>
    <div>
     
      <div class="row d-flex justify-content-end">
        <div class="col">
          <!-- search button here, emit event soon to be set up -->
          <div class="input-group">
            <input
              type="button"
              class="btn-link"
              value="adds"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>

        <div class="col">
          <!-- search button here, emit event soon to be set up -->
          <div class="input-group">
            <input
              type="button"
              class="btn-link"
              value="Deleted"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>

        <div class="col">
          <!-- search button here, emit event soon to be set up -->
          <div class="input-group">
            <input
              type="button"
              class="btn-link"
              value="Updated"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>

        <!--  -->

        <!-- <div class="col-lg-4 col-md-4 col-sm-4 col-5">
          <nuxt-link
            type="button"
            class="d-flex justify-content-end mx-3"
            to="/projects/addproject"
          >
            <button class="btn btn-md btn-primary">+ Project</button>
          </nuxt-link>
        </div> -->
      </div>
    </div>
  </div>
</template>
