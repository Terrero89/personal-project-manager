<script setup>
import { useTest } from "@/store/test";
import { onMounted } from "vue";
const store = useTest();
const route = useRoute(); //route object

const param = route.params.projectId;

</script>

<template>
  <div >
    <TaskList/>
    
  </div>
</template>

