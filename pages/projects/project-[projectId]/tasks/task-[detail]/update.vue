<script setup>
import { useTest } from "@/store/test";

const store = useTest();
const route = useRoute(); //route object
const router = useRouter(); //route object
const param = parseInt(route.params.projectId);
const taskParam = parseInt(route.params.detail);
const { tasks, projects, history, taskList, findLength, findActionsByTask } =
  store;

const projectParent = computed(() => store.filterItemById);
const findTaskDetail = computed(() => store.detailOfTask); //finds the task place for details
const length = store.hasTasks;
//function that deletes the item and return to projects page.
function deleteTask(id, parent) {
  store.deleteTask(id); //executes the delete action in pinia
  store.deletedToActions(id, parent); //will redirect to tasks, or projects tasks depending on tasks length of the tasks
  if (length(param) - 1 < 1) {
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
<div>
    Hello world 2 -{{taskParam}}
</div>

</template>