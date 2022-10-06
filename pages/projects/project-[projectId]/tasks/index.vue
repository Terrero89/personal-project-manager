<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);

const { taskList, projectList } = store;
const tasksOfParents = taskList.filter((task) => task.parentId == param); //needs fix
const getParent = projectList.filter((p) => p.id == param); //needs fix
const seeDetail = (parameter) => {
  return parameter;
}; //will make the id selectec the currect id to navigate
const length = store.hasTasks;

</script>

<template>
  <div class="tasks-wrapper table-responsive">
    <div class="task-list">
      <UITitle title="Tasks" class="border-bottom" />
      <div>add task feature</div>
      <div>search bar</div>
      <div>filtering</div>
      back to parent-
      <nuxt-link to="/projects">projects</nuxt-link>

      <h3
        style="color: black; font-size: size 1.5rem"
        v-for="parent in getParent"
        :key="parent.id"
      >
        {{ parent.projectName }}
      </h3>
    
      <table class="table ">
        <thead>
          <tr class="table-header">
            <th>ID</th>

            <th>TASK NAME</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="table-content"
            v-for="task in tasksOfParents"
            :key="task.id"
          >
            <td>{{ task.id }}</td>

            <td>
            
              {{task.taskName}}
              
            </td>
         

            <td v-if="task.isComplete">Complete</td>
            <td v-if="!task.isComplete">In Progress</td>
            <td>
              <nuxt-link
                :to="`/projects/project-${param}/tasks/task-${seeDetail(
                  task.id
                )}`"
                >Details</nuxt-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="(length(param)) < 1">No tasks available at this moment</div>
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

  padding: 1rem 1rem  ;

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
