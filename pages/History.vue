<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(["search"]);

const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem } = store;
const { projects, actions, history } = storeToRefs(store);
const searchInput = ref("");
const searchedProjects = computed(() => {
  return store.projects.filter((p) => {
    return (
      p.projectName.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1
    );
  });
});

//SEARCH WORKING, APPLY EMIT EVENT TO DO IT V-MODEL WAY
</script>

<template>
<div>
    <UICard> 
<UITitle title="history"/>

    </UICard>
    <UICard>
      <ProjectHistory
        v-for="project in history"
        :key="project.id"
        :id="project.id"
        :project="project.projectName"
        :category="project.category"
        :description="project.projectDescription"
        :status="project.isComplete"
        :technologies="project.technologies"
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
