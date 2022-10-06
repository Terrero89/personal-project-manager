<script setup>
import { useTest } from "@/store/test";
const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);
const {
  taskList,
  projects,
  history,
  deletedHistory,
  deleteProject,
  projectDeletedToActions,
} = store;
</script>

<template>
  <div>
    <ProjectDetails :id="param" />

    <div>actions for this project</div>
  </div>
</template>

<style scoped></style>
