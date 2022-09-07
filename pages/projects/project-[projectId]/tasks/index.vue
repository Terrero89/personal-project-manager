
<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;
const { taskList} = store;
const parentTasks = taskList.filter((task) => task.parentId == param);

</script>
<template>
  <div>
    <p>ALL TASKS FROM SPECIFIC PARAM</p>
    <p>params --> here {{ $route.params.projectId }}</p>

    <div class="task-list">

          <div v-for="task in parentTasks" :key="task.id" >
            <p>id: {{task.id}}</p>
            <p> PArent ID: {{task.parentId}}</p>
            <p>Title: {{task.taskName}}</p>
          
          </div>



    </div>
  </div>
</template>
