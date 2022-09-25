<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList, hasActions } = store;
const toggleActions = ref(false);
const toggle = ()=> toggleActions.value = !toggleActions.value;
</script>

<template>
  <div >
    <div @click="toggle"> See action <i class="fa-sharp fa-solid fa-house"></i></div>
    <div v-if="toggleActions">
    <div class="actions-section">
      <h3 style="padding: 0 0.7rem">Actions Section</h3>
      <div class="actions" v-for="action in store.actions" :key="action.id">
        <p class="action-name">
          {{ action.type }} Id#{{ action.id }} {{ action.name }}
        </p>

        <div class="actions-date">
          <div v-if="action.category === 'Update'" class="color update"></div>
          <div v-if="action.category === 'Delete'" class="color delete"></div>
          <div v-if="action.category === 'Add'" class="color added"></div>
          <div class="date">05/07/2022</div>
        </div>
      </div>
      <div v-if="!hasActions">No Actions available at this moment</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.color {
  position: absolute;

  width: 1%;
  height: 100%;
  left: 0;

  bottom: 0;
}
.added {
  background-color: rgb(0, 115, 255);
}
.delete {
  background-color: red;
}

.update {
  background-color: rgb(177, 134, 212);
}
.action-name {
  margin: auto 0;
  color: black;
  font-size: 1.2rem;
  margin-right: auto;
}
.actions-date {
  border-radius: 3px;
  background-color: rgb(127, 176, 244);
  padding: 0.7rem;
}
.actions-date .date {
  color: white;
}

.actions {
  position: relative;
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
