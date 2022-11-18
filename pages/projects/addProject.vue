<script setup>
import { useTest } from "@/store/test";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
</script>

<template>
  <div>
    <ProjectForm :param="param"/>
  </div>
</template>
  