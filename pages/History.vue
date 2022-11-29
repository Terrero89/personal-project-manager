<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(["search"]);

const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem,fetchHistory,fetchActions,fetchProjects,fetchTasks, taskHistoryList } = store;
const { projects, actions, history } = storeToRefs(store);
const searchInput = ref("");
const searchedProjects = computed(() => {
  return store.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

onMounted(() => {
fetchHistory()
fetchActions()
fetchProjects()
fetchTasks()
  console.log("Fetching projects  and tasks in project/details");

});


</script>

<template>
  <div>
    <UICard>
      <UITitle title="History" />
   <UICategoryFilter/>
    </UICard>

  
    <UICard>
      <HistoryItem
        v-for="item in history"
        :key="item.id"
        :id="item.id"
        :project="item.projectName"
        :task="item.taskName"
        :category="item.category"
        :description="item.description"
        :status="item.isComplete"
        :technologies="item.technologies"
        :task-name="item.taskName"
        :date-modified="useDate(item.dateModified)"
        :start-date="useDate(item.startDate)"
      />
    </UICard>
  

    

    <UICard>
      <ActionsItems
        v-for="action in actions"
        :key="action.id"
        :id="action.id"
        :type="action.type"
        :name="action.name"
        :category="action.category"
        :parent-id="action.parentId"
        :date-modified="useFormatted(action.dateModified)"
      />
    </UICard>
  </div>
</template>
