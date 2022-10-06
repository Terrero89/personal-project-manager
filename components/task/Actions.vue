<script setup>
    // const dataList = [...projects];
    import { useTest } from "@/store/test";
    
    const store = useTest();
    const route = useRoute(); //route object
    const { projectList, hasActions } = store;
    const toggleActions = ref(false);
    const toggle = () => (toggleActions.value = !toggleActions.value);
    </script>
    
    <template>
      <div>
        <a @click="toggle">
          See action
          <svg
            v-if="!toggleActions"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
    
          <svg
            v-if="toggleActions"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-down-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </a>
        <div v-if="toggleActions">
          <div class="actions-section">
            <h3 style="padding: 0 0.7rem">Actions Section</h3>
            <div class="actions" v-for="action in store.actions" :key="action.id">
              <p class="action-name">
                {{ action.type }} Id#{{ action.id }} {{ action.name }}
              </p>
    
              <div class="actions-date">
                <div v-if="action.category === 'Update'" class="color update"></div>
                <div v-if="action.category === 'Delete'" class="color delete"></div>
                <div v-if="action.category === 'Add'" class="color added"></div>
                <div class="date">05/07/2022</div>
              </div>
            </div>
            <div v-if="!hasActions">No Actions available at this moment</div>
          </div>
        </div>
      </div>
    </template>
    
    <style scoped>
    .color {
      position: absolute;
    
      width: 1%;
      height: 100%;
      left: 0;
    
      bottom: 0;
    }
    .added {
      background-color: rgb(0, 115, 255);
    }
    .delete {
      background-color: red;
    }
    
    .update {
      background-color: rgb(177, 134, 212);
    }
    .action-name {
      margin: auto 0;
      color: black;
      font-size: 1.2rem;
      margin-right: auto;
    }
    .actions-date {
      border-radius: 3px;
      background-color: rgb(127, 176, 244);
      padding: 0.7rem;
    }
    .actions-date .date {
      color: white;
    }
    
    .actions {
      position: relative;
      border: solid rgb(179, 179, 179) 1px;
    
      padding: 1rem;
      display: flex;
      margin: 0.5rem 2rem;
      background-color: white;
    }
    .actions-section {
      margin: 0.5rem 0;
    }
    </style>
    