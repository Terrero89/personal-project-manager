<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList, hasActions } = store;
const toggleActions = ref(false);
const toggle = () => (toggleActions.value = !toggleActions.value);
const props = defineProps(["id", "type", "name", "date", "category", "dateModified"]);

</script>

<template>
  <div class="row">
    <div class="col">
      <a> </a>
      <div>
        <div class="actions-section">
          <div class="actions">
            <div v-if="props.category === 'Update'" class="color update"></div>
            <div v-if="props.category === 'Delete'" class="color delete"></div>
            <div v-if="props.category === 'Add'" class="color added"></div>
            <div class="action-name">
              <h5>{{ props.type }} Id[{{ props.id }}]</h5>
              
              <div class="action-category">
               <h4>{{ props.name }}</h4> 
              </div>
            </div>

            <div class="actions-date">
              <div class="date">{{props.dateModified}}</div>
            </div>
          </div>
          <div v-if="!hasActions">No Actions available at this moment</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status {
  margin: auto 0;
  width: 1rem;
  height: 1rem;
  margin-right: 0rem;
  border-radius: 50% 50%;
}

.color {
  margin: auto 0;
  width: 1rem;
  height: 1rem;
  margin-right: 1.5rem;
  border-radius: 50% 50%;
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

.actions-date .date {
  border-radius: 3px;
  border:solid rgb(127, 176, 244) 1px;
  /* background-color: rgb(127, 176, 244); */
  padding: 0.7rem;
}

.actions-date .date {
  color:  rgb(63, 132, 222);
}

.actions {
  position: relative;
  background-color: rgb(127, 176, 244);

  padding: 1rem;
  display: flex;
  margin: 0.5rem 0.5rem;
  background-color: white;
}

.actions-section {
  margin: 0.5rem 0;
}

.actions h5 {

  font-size: 1rem;
}
.actions h4 {
  color: gray;
  font-size: 1rem;
  margin: 0.2rem 0;
  /* border:solid blue */
}
</style>
