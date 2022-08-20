<script setup>
import projects from "@/data.json";
const route = useRoute();

const dataList = [...projects];

const projectList = computed(() => {
  dataList.filter(prj => prj.id === route.params.projectId);
});
</script>

<template>
  <div>
    <p>EXPECIFIC PROJECT</p>
  
    <pre>
      {{dataList[0]}}
    </pre>
    <p> Param: {{ $route.params.projectId }}</p>
    
        <div>
          {{projectList}}
        </div>


    <!-- <div v-for="project in projectList" :key="">
        project.projectName
    
    </div> -->

   
  </div>
</template>
