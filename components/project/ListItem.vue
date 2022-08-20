<script setup>
const props = defineProps([
  "id",
  "project",
  "user",
  "description",
  "taskNumber",
  "status",
]);

const isComplete = ref(true);

const currStatus = computed(() => {
  if(props.status === "true")
   {return 'btn-success'}
   if(props.status == "false"){
    return "btn-warning"}
});

const detailsLink = computed(() => {
  return `/projects/project-${props.id}`;
});
</script>

<template>
  <div>

    <div class="project-item">
      <p>id: {{ props.id }}</p>
      <h2>{{ props.project }}</h2>
      <p>Description: {{ props.description }}</p>
      <p>Tasks: {{ props.taskNumber }}</p>

      <div class="button-status">
        <button
          type="button"
          class="btn"
          :class="currStatus">
          {{ props.status === "true" ? 'Complete' : 'In Progress' }}
        </button>

        <nuxt-link :to="detailsLink"
          ><button type="button" class="btn-sm btn btn-outline-primary mr">
            Details
          </button></nuxt-link
        >

        <div class="button-updates">
          <button type="button" class="btn-sm btn btn-primary">Update</button>
          <button type="button" class="btn-sm btn btn-danger">X</button>
        </div>
      </div>
    </div>
    <!-- <div class="project-item">
      <p>id: 2</p>
      <h2>Project: Python Game</h2>
      <p>
        Project description: Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit
        amet consectetur adipisicing.
      </p>
      <p>Tasks: 2</p>

      <div class="button-status">
        <button type="button" class="btn-sm btn btn-warning">
          In Progress
        </button>

        <button type="button" class="btn-sm btn btn-outline-primary mr">
          Details
        </button>
        <div class="button-updates">
          <button type="button" class="btn-sm btn btn-primary">Update</button>
          <button type="button" class="btn-sm btn btn-danger">X</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.mr {
  margin-left: auto;
}
.projects {
  display: flex;
  justify-content: center;
}
.project-item {
  border: solid red 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
}
.button-status {
  display: flex;
  justify-content: flex-end;
}

.button-status .button {
  margin-right: 0.4rem;
}

.wrapper {
  border: solid rgb(0, 81, 255) 1px;
  padding: 2rem;
  margin: 0 auto;
}

.actions {
  border: solid red 1px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
}
.actions-section {
  border: solid rgb(0, 0, 0) 1px;

  padding: 1rem;

  margin: 0.5rem 0;
}
</style>
