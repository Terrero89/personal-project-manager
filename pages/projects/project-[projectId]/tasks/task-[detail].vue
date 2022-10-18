<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const router = useRouter(); //route object
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { tasks, projects, history, taskList, findLength, findActionsByTask} = store;

const projectParent = computed(() => store.filterItemById);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
const length = store.hasTasks
//function that deletes the item and return to projects page.
function deleteTask(id, parent) {
store.deleteTask(id) //executes the delete action in pinia
store.deletedToActions(id, parent);//will redirect to tasks, or projects tasks depending on tasks length of the tasks
 
  if ((length(param)-1) < 1) {

    return navigateTo(`/projects/project-${param}`);
  } else {
    //will push to history those that match
    history.push(tasks.find((t) => t.id === id)); //needs to e fixed
   
   

    //after action is pushed to actions, navigate to project's tasks page

    return navigateTo(`/projects/project-${param}/tasks`);
  }
}
</script>

<template>
  <div class="tasks-wrapper">
    <div class="task-list">
      <div
        class="project-detail"
        v-for="project in findTaskDetail(taskParam)"
        :key="project.id"
      >
      
        <div class="container detail-container">
          <UITitle title="Task Details" class="border-bottom"/>
          
          <div class="row">
            <div class="header">
              <h3
                style="color: black; font-size: size 1.5rem"
                v-for="task in findTaskDetail(taskParam)"
                :key="task.id"
              >
                {{ task.taskName }}
              </h3>
            </div>

            <div class="col">
              <div class="detail">
                <div class="content">
                  <div class="item">Task ID</div>
                  <p class="item-desc">{{ project.id }}</p>

                  <div class="item">Parent Name</div>
                  <p
                    class="item-desc"
                    v-for="parent in projectParent(param)"
                    :key="parent.id"
                  >
                    {{ parent.projectName }}
                  </p>

                  <div class="item">Description</div>
                  <p class="item-desc">{{ project.description }}</p>
                  <div class="item">Start Date</div>
                  <p class="item-desc">{{ project.startDate }}</p>
                  <div class="item">End Date</div>
                  <p class="item-desc">{{ project.endDate }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="item">Task Duration</div>
              <p class="item-desc">{{ project.duration }} hours</p>
              <div class="item">Task Age</div>
              <p class="item-desc">{{ project.age }} days</p>
              <div class="item">Task Status</div>
              <p v-if="project.isComplete">Complete</p>
              <p v-if="!project.isComplete">In Progress</p>
            </div>
            <div class="header">
              <button
                type="button"
                @click="deleteTask(taskParam, project.parentId)"
                class="btn btn-danger"
              >
                X
              </button>
              <button type="button" class="btn btn-outline-primary">
                Update
              </button>
            </div>
          </div>
        </div>
        <UICard>
      <!-- {{findActionsByTask(param)}} -->
      <ActionsItems v-for="action in findActionsByTask(taskParam)" :key="action.id" :id="action.id" :type="action.type" :name="action.name"
        :category="action.category"/>
    </UICard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin-right: 2rem;
}
.col {
  background-color: rgb(255, 255, 255);
  padding: 1rem 0;
}
.header {
  background-color: rgb(227, 239, 253);
  /* border: solid rgb(205, 205, 205) 1px ; */
  padding: 0.5rem 0rem;
}
.item-desc {
  padding: 0 rem;
  border-bottom: solid rgb(155, 155, 155, 0.3) 1px;
  color: rgb(88, 88, 88);
  width: 90%;
}
.item {
 
  
}
</style>
