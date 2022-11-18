<script setup>
import { useTest } from "@/store/test";
import { onMounted } from "vue";
const store = useTest();
const route = useRoute(); //route object
// const param = parseInt(route.params.projectId);
const param = route.params.projectId;

const { taskList, projectList, fetchTasks, fetchProjects } = store;
const tasksOfParents = taskList.filter((task) => task.parentId === param); //needs fix
const getParent = projectList.filter((p) => p.id == param); //needs fix
const seeDetail = (parameter) => {
  return parameter;
}; //will make the id selectec the currect id to navigate
const length = store.hasTasks;
const firstFiveIdChar = (char) => char.substring(1, 5);

onMounted(() => {
  fetchProjects();
  console.log("Fetching projects  and tasks in tasks");
  fetchTasks();
});
</script>

<template>
  <div class="tasks-wrapper d-flex">
    <div class="task-list">
      <UITitle title="Tasks" class="border-bottom" />

      <UICard>
        <SearchFilter />
      </UICard>

      <UICard>
        <h3
          style="color: black; font-size: size 1.5rem"
          v-for="parent in getParent"
          :key="parent.id"
        >
          {{ parent.projectName }}
        </h3>
        <nuxt-link to="/projects">projects</nuxt-link>
        <div class="row mx-lg-5 mx-sx-2 border-1">
          <div class="row fw-bold header border d-inline-flex">
            <div class="col">ID</div>
            <div class="col">Task Name</div>
            <div class="col">Status</div>
            <div class="col">Details</div>
          </div>

          <div
            class="row mx-sx-2 task"
            v-for="task in tasksOfParents"
            :key="task"
          >
            <div class="col fw-bold">{{ firstFiveIdChar(task.id) }}</div>
            <div class="col flex-wrap">{{ task.taskName }}</div>
            <div class="col">
              {{ task.isComplete ? "Complete" : "Progress" }}
            </div>
            <div class="col">
              <Nuxt-Link
                class=""
                :to="`/projects/project-${param}/tasks/task-${seeDetail(
                  task.id
                )}`"
              >
                <button
                  type="button"
                  class="btn btn-outline-primary border-primary px-1 px-md-3 px-lg-3 rounded border-none"
                >
                  Details
                </button>
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </UICard>

      <div class="row"></div>

      <div v-if="length(param) < 1">No tasks available at this moment</div>
    </div>
  </div>
</template>

<style scoped>
.link {
  background-color: rgb(66, 178, 252);
}

.link:hover {
  background-color: rgb(122, 196, 245);
}
.header {
  border-bottom: solid rgb(218, 214, 214) 1px;
  background-color: rgba(104, 134, 255, 0.5);
  padding: 1rem;
  margin: 0.5rem 0rem;
  display: flex;
  min-height: 4rem;
  align-items: center;
  border-radius: 2px;
}
.task {
  border-bottom: solid rgb(218, 214, 214) 1px;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  margin: 0.2rem 0rem;
  display: flex;
  min-height: 5rem;
  align-items: center;
  border-radius: 2px;
}

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
  text-align: left;

  /* font-size: 1.2rem;*/
}

td {
}

.table-header {
  background-color: rgb(227, 239, 253);
  /* border: solid rgb(159, 159, 159) 1px; */
}

.table-header th {
  font-size: 0.8rem;
  border: none;
  padding: 0.8rem 1rem;
  /* border: solid rgb(169, 169, 169) 1px; */
}
.table-content {
  color: rgb(84, 84, 84);
  /* border: solid rgb(159, 159, 159) 0.5px; */
  text-align: center;
}
.table-content td {
  font-size: 0.8rem;
  /* padding:2rem; */

  padding: 1rem 1rem;

  color: rgb(84, 84, 84);
}
.table-content {
  background-color: white;
}
.project {
  margin: 0 auto;
  max-width: 1650px;

  padding: 2rem;
}
</style>
