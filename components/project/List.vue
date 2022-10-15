<script setup>
import { useTest } from "@/store/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(["search"]);
const currPage = ref(1);
const store = useTest();
const route = useRoute(); //route object
const { hasProjects, searchItem, actions } = store;
const { projects } = storeToRefs(store);

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
  <div class="projects">
    <UITitle title="Projects" class="container border-bottom" />
    <!-- Filter selections soon to be in component -->
    <ProjectCategories />
    <!-- filter selection for projects ends -->
    <UICard>
      <!-- search bar starts here should be emitted from component-->
      <div>
        <div >
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-7">
              <!-- search button here, emit event soon to be set up -->
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg></span>

                <input type="text" class="form-control" placeholder="Search by.." v-model="searchInput" />
              </div>
            </div>

            <!--  -->

            <div class="col-lg-4 col-md-4 col-sm-4 col-5">
              <nuxt-link type="button" class="d-flex justify-content-end mx-3" to="/projects/addproject">
                <button class="btn btn-md btn-primary">+ Project</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </UICard>
    <UICard>
      <!-- search bar starts here should be emitted from component-->
      <div class="container">
        <div class="page-top">
          <div class="row mb-3">
            <div class="col d-flex justify-content-end"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <ProjectListItem v-for="project in searchedProjects" :key="project.id" :id="project.id"
              :project="project.projectName" :category="project.category" :description="project.projectDescription"
              :status="project.isComplete" />
          </div>
          <div v-if="!hasProjects">No Projects available at this moment</div>
        </div>
      </div>
    </UICard>
    <UICard>
      <ActionsProjects v-for="action in actions" :key="action.id" :id="action.id" :type="action.type" :name="action.name"
        :category="action.category" />
    </UICard>
  </div>
</template>

<style scoped>
.add-button {
  margin: 0 auto;
}

.mr {
  margin-left: auto;
}

.projects {
  min-height: 100vh;
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
</style>
