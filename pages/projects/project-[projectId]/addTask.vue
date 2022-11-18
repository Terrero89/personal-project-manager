<script setup>
import { useTest } from "@/store/test";
import { onMounted } from "vue";

const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const { fetchProjects, fetchTasks } = store;
onMounted(() => {
  fetchTasks();
  fetchProjects();
});
</script>

<template>
  <div>
    <TaskForm :paramId="param" />
  </div>
</template>
