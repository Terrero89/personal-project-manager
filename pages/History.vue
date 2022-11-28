<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(["search"]);

const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem,fetchHistory } = store;
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
  console.log("Fetching projects  and tasks in project/details");

});

//SEARCH WORKING, APPLY EMIT EVENT TO DO IT V-MODEL WAY
</script>

<template>
  <div>
    <UICard>
      <UITitle title="History" />
   <UICategoryFilter/>
    </UICard>

    <UICard>
      <pre>
        {{history}}
      </pre>
    </UICard>
    <UICard>
      <HistoryItem
        v-for="project in history"
        :key="project.id"
        :id="project.id"
        :project="project.projectName"
        :category="project.category"
        :description="project.description"
        :status="project.isComplete"
        :technologies="project.technologies"
        :taskName="project.taskName"
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
        :date-modified="useFormatted(action.dateModified)"
      />
    </UICard>
  </div>
</template>
