<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = ref(route.params.projectId);

const { projectList } = storeToRefs(store);

const props = defineProps([
  "id",
  "project",
  "user",
  "description",
  "taskNumber",
  "status",
]);

const isComplete = ref(true);

const currStatus = computed(() => {
  if (props.status) {
    return "btn-success";
  } else {
    return "btn-warning";
  }
});

const detailsLink = computed(() => {
  return `/projects/project-${props.id}`;
});
</script>

<template>
  <div>
    




    <div class="project-item">
     
      <h2>{{ props.project }}</h2>

      <div class="button-status">
        <nuxt-link :to="detailsLink"
          ><button type="button" class="btn-md btn btn-outline-primary mr">
            Details
          </button> </nuxt-link
        >
      </div>
      <div class="status" :class="currStatus"></div>
    </div>

    
  </div>
</template>

<style scoped>
.mr {
  margin-left: auto;
}
.projects {
  display: flex;
  justify-content: center;
}
.project-item {
  position: relative;
  border: solid rgb(218, 214, 214) 1px;
  background-color: rgb(255, 255, 255); /*color for background item */
  /* border-radius: 0.5rem; */
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  overflow: hidden;
}

.project-item h2{
margin:0 2%
}

.status {
  position: absolute;
  /* bottom: 0; */
  width: 1%;
  height: 100%;
  left: 0;
  top: 0;
}

.project-item h2 {
  margin-right: auto;
}
.button-status {
  display: flex;
  justify-content: flex-end;
}

.button-status .button {
  margin-right: 0.4rem;
}

.wrapper {
  border: solid rgb(0, 81, 255) 1px;
  padding: 2rem;
  margin: 0 auto;
}

.actions {
  border: solid rgb(191, 191, 191) 1px;
  
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
}
.actions-section {
  border: solid rgb(212, 212, 212) 1px;

  padding: 1rem;

  margin: 0.5rem 0;
}
</style>
