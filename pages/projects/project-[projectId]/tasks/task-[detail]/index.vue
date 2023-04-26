<!-- details task page -->
<script setup>
import { useTest } from "@/store/test";
import { onMounted, onBeforeMount } from "vue";
const store = useTest();
const route = useRoute(); //route object
const router = useRouter(); //route object
const param = route.params.projectId;
const taskParam = route.params.detail;
const props = defineProps(["id"]);
const {
  tasks,
  projects,
  deletedToActions,
  history,
  taskList,
  findLength,
  findActionsByTask,
  fetchTasks,
  fetchProjects,
  findTaskActions
} = store;
const updateLink = computed(() => `/projects/project-${param}/tasks/task-${taskParam}/u/update`);
const projectParent = computed(() => store.filterItemById);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
const findActionsForTask = computed(() => store.findTaskActions(taskParam));
const length = store.hasTasks;

//function that deletes the item and return to projects page.
function removeTask(id) {
  store.deletedToActions(param); //will redirect to tasks, or projects tasks depending on tasks length of the tasks
  store.deleteTask(id); //executes the delete action in pinia
  if (length(param) - 1 < 1) {
    return navigateTo(`/projects/project-${param}`);
  } else {
    //will push to history those that match
    history.push(tasks.find((t) => t.id === id)); //needs to e fixed
    //after action is pushed to actions, navigate to project's tasks page
    return navigateTo(`/projects/project-${param}/tasks`)
  }
}
onBeforeMount(() => {
  fetchTasks();
  fetchProjects();
  console.log("printed out from tasks/details");
});
</script>

<template>
  <div>
   
    <TaskDetails :id="taskParam" />
    <!-- <UICard>
       <h5>task related actions</h5>
       <ActionsItems 
         v-for="action in findActionsForTask"
         :key="action.id"
         :id="action.id"
         :type="action.type"
         :name="action.name"
         :category="action.category"
         :date-modified="useFormatted(action.dateModified)"
       /> 
     </UICard> -->
  
  </div>
</template>

<style scoped>

.remover {
  list-style: none;
}
.btn {
  margin-right: 1rem;
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

</style>
