<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);


const { taskList, projectList } = store;
const tasksOfParents = taskList.filter((task) => task.parentId == param); //needs fix
const getParent = projectList.filter((p) => p.id == param); //needs fix
const seeDetail = ((parameter)=> { return parameter}) //will make the id selectec the currect id to navigate


// const taskDetailLink = computed(()=> `/projects/project-${param}/tasks/task-${seeDetail}`)
</script>



<template>
  <div class="tasks-wrapper">
    <div class="task-list">
      <UITitle title="Tasks " />
      <div>add task feature</div>
      <div>search bar</div>
      <div>filtering</div>
      back to parent-

      <h3
        style="color: black; font-size: size 1.5rem"
        v-for="parent in getParent"
        :key="parent.id"
      >
        {{ parent.projectName }}
      </h3>
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
          <tr class="breaker">
            <td></td>
          </tr>
          <tr
            class="table-content"
            v-for="task in tasksOfParents"
            :key="task.id"
          >
            <td>{{ task.id }}</td>

            <td>{{ task.taskName }}</td>

            <td v-if="task.isComplete">Complete</td>
            <td v-if="!task.isComplete">In Progress</td>
            <td ><nuxt-link   :to="`/projects/project-${param}/tasks/task-${seeDetail(task.id)}`">DEtails</nuxt-link></td>
            <td >.</td>
            <td >.</td>         
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
