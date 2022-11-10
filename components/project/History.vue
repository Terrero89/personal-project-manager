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
    <div class="project-item ">
      <div class="item row">
        <div class="project">
          <div class="row align-items-center">
            <!-- <div class="col">
              <h1>{{ props.id }}</h1>
            </div> -->
            <div class="col">
              <h1>{{ props.project }}</h1>
              <h2>{{ props.category }}</h2>
              <div class="col d-flex flexbox ">
              <div class="my-1 flexi" v-for="tech in props.technologies" :key="tech">
                <h2 class="">{{ tech }}</h2>
              </div>
            </div>
            </div>

          
            <div class="col d-flex align-items-center">
              <h2 class="border py-2 px-2  ">{{ props.status }}</h2>
            </div>
            <div class="col  my-auto mr">
              <div class="date border py-2 px-2 my-auto mr">
                <h2 class="align-items-end">Date modified</h2>
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

.flexi {

  margin-right: .3rem;
  /* border: solid 1px rgb(0, 47, 255); */
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
