<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList } = store;
</script>

<template>
  
    <div class="actions-section">
      <h3 style="padding: 0 0.7rem ">Actions Section</h3>
      <div class="actions">
        <p class="action-name">project [name] added</p>
        <div class="actions-date">
          <div class="date">05/07/2022</div>
        </div>
      </div>
      <div class="actions">
        <p class="action-name">task [name] added</p>
        <div class="actions-date">
          <div class="date">05/07/2022</div>
          
        </div>
      </div>
    
      
    </div>

</template>

<style scoped>
.action-name {
  margin: auto 0;
  color: black;
  font-size: 1.2rem;
  margin-right: auto;
}
.actions-date {
  border-radius:3px;
  background-color:rgb(127, 176, 244) ;
  padding: 0.7rem;
}
.actions-date .date {
 color:white
}

.actions {
  border: solid rgb(179, 179, 179) 1px;

  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
  background-color: white;
}
.actions-section {
  margin: 0.5rem 0;
}
</style>
