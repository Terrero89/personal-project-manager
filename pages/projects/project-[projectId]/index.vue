<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
import { onBeforeMount, onMounted } from "vue";
const props = defineProps(["deletedId"])
const store = useTest();
const route = useRoute(); //route object
const { fetchActions, fetchHistory, fetchProjects, fetchTasks } = store;
const { actions } = storeToRefs(store);
const param = route.params.projectId;
const { findActionsByProject, findTaskActionsByProject } = store;
const projectActionChildren = computed(() => store.findActionsByProject(param));

const showModal = ref(false)

fetchActions();
</script>

<template>
  <div>
  <!-- <UIWarningModal v-show="showModal"   @close-modal="showModal = false" :deleted-id="param" /> -->
    <ProjectDetails :id="param" />

    <UICard>
      <h5>Project related Actions</h5>
      <ActionsItems
        v-for="action in projectActionChildren"
        :key="action.id"
        :id="action.id"
        :parent-id="param"
        :type="action.type"
        :name="action.name"
        :category="action.category"
        :date-modified="useFormatted(action.dateModified)"
      />
    </UICard>
  </div>
</template>

<style scoped></style>
