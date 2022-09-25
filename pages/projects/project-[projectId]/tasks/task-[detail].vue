<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//should show all tasks details for specific task
=======
=======
>>>>>>> styling
=======
>>>>>>> delete-feature
<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
<<<<<<< HEAD
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { tasks, projects } = store;

// const taskDetail = taskList.filter((task) => task.parentId == param);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
</script>

<<<<<<< HEAD
>>>>>>> styling
=======
>>>>>>> styling
<template>
  <div class="tasks-wrapper">
    <div class="task-list">
      <UITitle title="Task Detail" />
 

=======
const router = useRouter(); //route object
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { tasks, projects, history, taskList, findLength } = store;
const projectParent = computed(() => store.filterItemById);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details

//function that deletes the item and return to projects page.
function deleteTask(id, parent) {

  //received the id and parentId, and push it to actions state.
  //action that push the action to actions state
  store.deletedToActions(id, parent);
  //will redirect to tasks, or projects tasks depending on tasks length of the tasks
  if (store.findLength(param) < 1) {
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
>>>>>>> delete-feature
      <div
        class="project-detail"
        v-for="project in findTaskDetail(taskParam)"
        :key="project.id"
      >
<<<<<<< HEAD
        <div class="container detail-container">
          <UITitle title="Project Details" />
=======
      
        <div class="container detail-container">
          <UITitle title="Task Details" />
>>>>>>> delete-feature

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
<<<<<<< HEAD
                    v-for="parent in projects"
=======
                    v-for="parent in projectParent(param)"
>>>>>>> delete-feature
                    :key="parent.id"
                  >
                    {{ parent.projectName }}
                  </p>
<<<<<<< HEAD
                 
=======

>>>>>>> delete-feature
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
<<<<<<< HEAD
              <button type="button" class="btn btn-danger mr-5">X</button>
              <button type="button" class="btn btn-outline-primary">
                Primary
=======
              <button
                type="button"
                @click="deleteTask(taskParam, project.parentId)"
                class="btn btn-danger"
              >
                X
              </button>
              <button type="button" class="btn btn-outline-primary">
                Update
>>>>>>> delete-feature
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <h2>parent project params-> {{ $route.params.projectId }}</h2>
    <TaskList />
  </div>
</template>

<script></script>

//should sow all task for one project

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
=======
  </div>
</template>

<style scoped>
=======
  </div>
</template>

<style scoped>
.btn {
  margin-right: 2rem;
}
>>>>>>> delete-feature
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
  color: rgb(129, 129, 129);
}
<<<<<<< HEAD

>>>>>>> styling
=======
  </div>
</template>

<style scoped>
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
  color: rgb(129, 129, 129);
}

>>>>>>> styling
=======
>>>>>>> delete-feature
</style>
