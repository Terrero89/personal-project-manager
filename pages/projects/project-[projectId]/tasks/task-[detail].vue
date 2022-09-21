<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { tasks, projects } = store;
const projectParent= computed(() => store.filterItemById);
// const taskDetail = taskList.filter((task) => task.parentId == param);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
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
          <UITitle title="Task Details" />

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
              <button type="button" class="btn btn-danger mr-5">X</button>
              <button type="button" class="btn btn-outline-primary">
               Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

</style>
