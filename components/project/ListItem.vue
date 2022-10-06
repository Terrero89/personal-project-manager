<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const param = route.params.projectId;

const { projectList } = storeToRefs(store);

const props = defineProps([
  "id",
  "project",
  "user",
  "category",
  "description",
  "taskNumber",
  "status",
  "arr",
]);

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
      <div class="item">
        <div class="status" :class="currStatus"></div>
        <div class="project">
          <h5>{{ props.project }}</h5>
          <span>{{ props.category }}</span>
        </div>
        <nuxt-link class="my-auto mr" :to="detailsLink"
          ><button type="button" class="btn-md btn btn-outline-primary mr">
            Details
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.project-item h5 {
  margin: 0 2%;
}
.project-item span {
  color: gray;
  /* border:solid blue */
}

.status {
  margin: auto 0;
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 50% 50%;
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
