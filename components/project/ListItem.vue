<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;

const { projects } = storeToRefs(store);

const props = defineProps([
  "id",
  "project",
  "user",
  "category",
  "description",
  "taskNumber",
  "status",
  "modified",
]);

const currStatus = computed(() => {
  if (props.status) {
    return "text-success py-2 px-1 border border-success rounded ";
  } else {
    return "text-muted py-2 px-2  border border-warning rounded";
  }
});

const detailsLink = computed(() => {
  return `/projects/project-${props.id}`;
});
</script>

<template>
  <div>
    <div class="project-item">
      <div class="item">
        <!-- <div class="status" :class="currStatus"></div> -->
        <div class="project">
          <h1>{{ props.project }}</h1>
          <h2 class="pb-2">{{ props.category }}</h2>
          <span :class="currStatus">{{
            props.status ? "Complete" : "In Progress"
          }}</span>

          <!-- <span :class="currStatus">{{ props.modified }}</span> -->
        </div>
        <nuxt-link class="my-auto mr" :to="detailsLink"
          ><button type="button" class="btn-md px-3 btn btn-outline-primary mr">
            Details
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.complete {
  color: rgb(7, 56, 7);
}

.project {
  /* border: solid red 1px; */
  margin: 0 0.5rem;
}
.mr {
  margin-left: auto;
}
.item {
  border-bottom: solid rgb(218, 214, 214) 1px;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  margin: 0.5rem 0rem;
  display: flex;
}

.project-item h1 {
  margin: 0 2%;
  font-size: 1rem;
}
.project-item h2 {
  color: gray;
  font-size: 1rem;
  margin: 0.2rem 0;

  /* border:solid blue */
}

.project-item h5 {
  margin-right: auto;
}

.button-status .button {
  margin-top: 5rem;
  /* display:flex;
  flex-direction: column;
  justify-content: center; */
}

.wrapper {
  border: solid rgb(0, 81, 255) 1px;
  padding: 2rem;
  margin: 0 auto;
}
</style>
