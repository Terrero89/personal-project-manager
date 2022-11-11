<script setup>
// const dataList = [...projects];
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const { projectList, hasActions } = store;
const toggleActions = ref(false);
const toggle = () => (toggleActions.value = !toggleActions.value);
const props = defineProps([
  "id",
  "parentId",
  "type",
  "name",
  "staticId",
  "category",
  "dateModified",
]);
const action = computed(() => {
  if (props.category === "Update") {
    return "text-success";
  }
  if (props.category === "Delete") {
    return "text-danger";
  }
  if (props.category === "Add") {
    return "text-primary";
  }
});
</script>

<template>
  <div class="row">
    <div class="col">
      <a> </a>
      <div>
        <div class="actions-section">
          <div class="actions">
            <!-- <div :class="action"></div> -->

            <div v-if="props.type !== 'Task'" class="action-name">
              <!-- <h5> -->
              <h5>
                Project <span class="mx-1 text-primary">{{ props.parentId }}</span> has
                been
                <span class="fw-bold" :class="action"> {{ props.name }}</span>
              </h5>

              <div class="action-category">
                <h4>{{ props.name }}</h4>
              </div>
            </div>
            <div v-if="props.type === 'Task'" class="action-name">
              <!-- <h5> -->
              <h5>
                Project <span class="mx-1 text-primary">{{ props.parentId }}</span> has
                <span  :class="action"> {{ props.name }}</span> Task 
                <span class="mx-1 text-primary"> {{ props.id }}</span>
              </h5>

              <div class="action-category">
                <h4>{{ props.name }}</h4>
              </div>
            </div>
            <div class="actions-date">
              <div class="date">{{ props.dateModified }}</div>
            </div>
          </div>

          <div v-if="!hasActions">No Actions available at this moment</div>
        </div>
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

.actions-date .date {
  border-radius: 3px;
  border: solid rgb(127, 176, 244) 1px;
  /* background-color: rgb(127, 176, 244); */
  padding: 0.7rem;
}

.actions-date .date {
  color: rgb(63, 132, 222);
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
