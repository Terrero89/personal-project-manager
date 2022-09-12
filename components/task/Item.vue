<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const store = useTest();
const route = useRoute(); //route object
const { projects, tasks } = storeToRefs(store);
const param = route.params.projectId; //param route for project
const foundTasks = computed(() => store.tasksUnderProject); //
const intParam = parseInt(param);
const getParent = store.projects.filter((p) => p.id == param);
const goBackButton = computed(() => `/projects/project-${param}`);
const taskDetailLink = computed(
  () => `/projects/project-${param}/tasks/task-${1}`
);
const detailsLink = computed(() => {
  return `/projects/project-${param}/tasks/task-${props.id}`;
});
const props = defineProps(["id", "task", "status"]);
</script>
<template>
  <div class="tasks-wrapper">
    <div class="task-list table-responsive">
      <table class="table">
        <thead>
          <tr class="table-header">
            <th>Id#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th></th>
            <th>U</th>
            <th>D</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{ props.id }}</td>
            <td>{{ props.name }}</td>
            <td v-if="task.status">Complete</td>
            <td v-if="!task.status">In Progress</td>
            <td><Nuxt-link :to="taskDetailLink">Details </Nuxt-link></td>
            <td>.</td>
            <td>.</td>
          </tr>
        </tbody>
      </table>
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
