<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const { projects, tasks } = storeToRefs(store);
const param = route.params.projectId; //param route for project
const foundTasks = computed(() => store.tasksUnderProject); //
const intParam = parseInt(param);
const taskParam = route.params.detail

// const tasksOfParents = taskList.filter((task) => task.parentId == param);
const getParent = store.projects.filter((p) => p.id == taskParam);
const goBackButton = computed(() => `/projects/project-${taskParam}`);
const taskDetailLink = computed(
  () => `/projects/project-${param}/tasks/task-${1}`
);
const { taskList } = store;
</script>
<template>
  <div class="tasks-wrapper">
    <div class="task-list table-responsive">
        <table class="table"></table>
      <UITitle title="Tasks " />
      <div>add task feature</div>
      <div>search bar</div>
      <div>filtering</div>
      <div>
        <Nuxt-link :to="goBackButton">Back</Nuxt-link>
      </div>
      <!-- <h3
        style="color: black; font-size: size 1.5rem"
        v-for="parent in getParent"
        :key="parent.id"
      >
        {{ parent.projectName }}
      </h3> -->
      <TaskItem
        v-for="task in foundTasks(intParam)"
        :key="task.id"
        :id="task.id"
        :task="task.taskName"
        :status="task.isComplete"
      />
    </div>
  </div>
</template>

<style scoped>
.task-list {
  max-width: 1500px;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  /* border: 1px solid #ddd; */
}

th,
td {
  padding: 1.6rem 1rem;
  font-size: 1.2rem;
}

td {
  padding: 2rem 1rem;
  font-size: 1.3rem;
}

.table-header {
  border: solid rgb(187, 187, 187) 1px;
  color: rgb(63, 63, 63);
  text-transform: uppercase;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(100, 100, 255, 1) 0%,
    rgba(42, 168, 194, 0.4) 0%
  );
}

.table-content {
  color: rgb(84, 84, 84);
  padding: 2rem;
  background-color: white;
}
</style>
