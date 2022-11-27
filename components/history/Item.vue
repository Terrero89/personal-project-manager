<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const props = defineProps([
  "id",
  "project",
  "user",
  "category",
  "description",
  "technologies",
  "status",
  "arr",
  "duration",
  "taskName"

]);

const currStatus = computed(() => {
  if (props.status) {
    return "border border-primary";
  } else {
    return "border border-warning";
  }
});

const detailsLink = computed(() => {
  return `/projects/project-${props.id}`;
});
</script>
<template>
  <div>
    <div class="project-item">
      project-item
      <div class="item row mx-2">
        <div class="project px-0">
          <div class="row">
            <div class="col-2-sm">
              <!-- <h1 class="">{{ props.id }}</h1> -->
              <h1>{{props.project ? "Project" : 'Task'}}</h1>
              <h1>{{ props.project }}</h1>
              <h2>{{ props.category }}</h2>

              <div class="col-lg-3 d-flex flex-wrap my-2">
                <div class="mar" v-for="tech in props.technologies" :key="tech">
                  <h2 class="">{{ tech }}</h2>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              {{ props.description }}
            </div>

            <div class="col-auto d-flex align-items-center">
              <h2 class="border border-1 rounded py-2 px-2" :class="currStatus">
                {{ props.status ? "Complete" : "In progress" }}
              </h2>
            </div>
            <div class="col-auto my-auto mr">
              <div class="date border border-1 rounded py-2 px-2 my-auto mr">
                <h2 class="align-items-end">05/10/2022</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date {
}

.mar {
  margin-right: 0.3rem;
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
  font-size: 1rem;
}
.project-item h2 {
  color: gray;
  font-size: 1rem;
  margin: 0.2rem 0;

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
