// store/test.ts

import { defineStore } from "pinia";

export const useActionsStore = defineStore({
  id: "actions",

  state: () => ({
    actions: [],
  }),

  getters: {
    findTaskActionsByProject: (state) => (id) => {
      const findChildren = state.actions.filter((task) => task.parentId === id);
      return findChildren;
    },

    findTaskActions: (state) => (id) => {
      const findActions = state.actions.filter((task) => task.id === id);
      return findActions;
    },
    actionList: (state) => state.actions,
    historyByProject: (state) => (id) =>
      state.history.filter((item) => item.parentId === id),

    hasActions: (state) => state.actions.length > 0,

    findActionsByProject(state) {
      const action = state.actions.filter((a) => a.id); // will find all ids, of the actions.

      return (id) => action.filter((t) => t.parentId === id);
    },

    findActionsByTask(state) {
      const action = state.actions.filter((a) => a.id); // will find all ids, of the actions.
      return (id) => action.filter((t) => t.id === id);
    },
  },

  // https://project-manager-app-f9829-default-rtdb.firebaseio.com/
  actions: {
    async fetchActions() {
      const response = await fetch(
        "https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json"
      );
      const responseData = await response.json();
      this.actions = responseData;

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const actions = [];

      for (const key in this.actions) {
        const action = {
          id: key,
          parentId: responseData[key].parentId,
          type: responseData[key].type,
          name: responseData[key].name,
          category: responseData[key].category,
          dateModified: responseData[key].dateModified,
        };
        actions.push(action);
      }
      this.actions = actions;
      return actions;
    },

    async projectAddedToActions(id) {
      const actionUrl = {
        parentId: id,
        type: "Project",
        name: "Added",
        category: "Add",
        dateModified: new Date(),
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json`,
        {
          method: "POST",
          body: JSON.stringify(actionUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR");
      }
    },

    async taskAddedToActions(id) {
      const actionUrl = {
        parentId: id,
        type: "Task",
        name: "Added",
        category: "Add",
        dateModified: new Date(),
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json`,
        {
          method: "POST",
          body: JSON.stringify(actionUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR");
      }
    },
  },

  async projectAddedToActions(id) {
    const actionUrl = {
      parentId: id,
      type: "Project",
      name: "Added",
      category: "Add",
      dateModified: new Date(),
    };
    let response = await fetch(
      `https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json`,
      {
        method: "POST",
        body: JSON.stringify(actionUrl),
      }
    );
    if (!response.ok) {
      console.log("ERROR");
    }
  },

  async projectDeletedToActions(id) {
    const actionUrl = {
      parentId: id,
      type: "Project",
      name: "Deleted",
      category: "Delete",
      dateModified: new Date(),
    };
    let response = await fetch(
      `https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json`,
      {
        method: "POST",
        body: JSON.stringify(actionUrl),
      }
    );
    if (!response.ok) {
      console.log("ERROR");
    }
  },

  async projectUpdatedToActions(parent) {
    const action = {
      id: this.actionsId++,
      parentId: this.projectId,
      type: "Project",
      parentId: parent.id,
      name: "Updated",
      category: "Update",
      dateModified: new Date(),
    };
    this.actions.push(action);

    const actionUrl = {
      parentId: this.projectId,
      type: "Project",
      parentId: parent.id,
      name: "Updated",
      category: "Update",
      dateModified: new Date(),
    };
    let response = await fetch(
      `https://project-manager-app-f9829-default-rtdb.firebaseio.com/actions.json`,
      {
        method: "POST",
        body: JSON.stringify(actionUrl),
      }
    );
    if (!response.ok) {
      console.log("ERROR");
    }
  },

  
});
