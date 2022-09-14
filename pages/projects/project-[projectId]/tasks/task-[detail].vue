<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { taskList, projectList } = store;

// const taskDetail = taskList.filter((task) => task.parentId == param);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details


</script>

<template>
  <div class="tasks-wrapper">
    <div class="task-list">
      <UITitle title="details tasks " />
      <div>add task feature</div>
      <div>search bar</div>
      <div>filtering</div>
      back to parent-
      <div>parentID: {{ route.params.projectId }}</div>
      <div>Child id for details: {{ route.params.detail }}</div>

      <h3
        style="color: black; font-size: size 1.5rem"
        v-for="task in findTaskDetail(taskParam)"
        :key="task.id"
      >
        {{ task.taskName }}
      </h3>
      <table class="table">
        <thead>
          <tr class="table-header">
            <th>Id#</th>
            
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Task Age</th>
            <th>Duration</th>
            <th>Status</th>
            <th>U</th>
            <th>D</th>
          </tr>
        </thead>

        <tbody>
          <tr class="breaker">
            <td></td>
          </tr>
          <tr
            class="table-content"
            v-for="task in findTaskDetail(taskParam)"
            :key="task.id"
          >
            <td>{{ task.id }}</td>

              
            <td>{{ task.description }}</td>
            <td>{{ task.startDate }}</td>
            <td>{{ task.endDate}}</td>
            <td>{{ task.duration }} hours</td>
            <td>{{ task.age }} days</td>
            <td v-if="task.isComplete">Complete</td>
            <td v-if="!task.isComplete">In Progress</td>
            <td>.</td>
            <td>.</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.breakers {
  margin: 1rem 0;
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
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
}

.table-header {
  padding: auto;
  background-color: rgb(169, 188, 201);
  border: solid rgb(159, 159, 159) 1px;
}

.table-header th {
  font-size: 1.2rem;
  border-right: solid rgb(159, 159, 159) 1px;
}
.table-content {
  color: rgb(84, 84, 84);
  border: solid rgb(159, 159, 159) 0.5px;
  text-align: center;
}
.table-content td {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  padding: 0 auto;
  color: rgb(84, 84, 84);
  border: solid rgb(159, 159, 159) 0.5px;
}
.table-content {
  /* padding:2rem; */
  /* background-color: rgb(74, 159, 149); */
  background-color: white;
}
</style>
