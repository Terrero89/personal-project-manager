<script setup>
import { useTest } from "@/store/test";
const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);
</script>

<template>
  <div>
    <TaskForm :paramId="param"/>
  </div>
</template>
