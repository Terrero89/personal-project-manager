<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";

const store = useTest();
const route = useRoute(); //route object
const { actions } = storeToRefs(store);
const param = route.params.projectId;
const { findActionsByProject } = store;

</script>

<template>
  <div>
    <ProjectDetails :id="param" />
   
    <UICard>
      <h3>Actions</h3>
      <ActionsItems
        v-for="action in findActionsByProject(param)" :key="action.id"
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
