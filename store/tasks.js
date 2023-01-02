// store/test.ts

import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "tasks",

  state: () => ({
    editedTask: {},
    tasks: [],
  }),

  getters: {
    taskList: (state) => state.tasks,

    hasActions: (state) => state.actions.length > 0,
    filterItemById(state) {
      const prj = state.projects.filter((p) => p.id);
      return (id) => prj.filter((p) => p.id === id);
    },
    hasTasks(state) {
      const tasks = state.tasks.filter((t) => t.parentId);
      return (id) =>
        tasks.filter((t) => t.parentId === id).map((t) => t.length).length;
    },

    tasksUnderProject(state) {
      const task = state.tasks.filter((t) => t.parentId);
      return (id) => task.filter((task) => task.id === id);
    },

    detailOfTask(state) {
      const item = state.tasks.filter((task) => task.id);
      return (id) => item.filter((task) => task.id === id);
    },

    taskOfParents: (state) => (id) =>
      state.tasks.filter((task) => task.parentId === id), //finds tasks specific of a project

    //?finding specific project tasks total hours
    totalTaskDuration: (state) => {
      //?find all tasks by ids
      const tasks = state.tasks.filter((p) => p.id);
      //?Filter tasks parentID that are equal to parameter
      //?calculates the total of the hours by id with reduce
      return (id) =>
        tasks
          .filter((p) => p.parentId === id)
          .reduce((accumulator, item) => {
            return accumulator + item.duration;
          }, 0);
    },

    //?WILL CHECK IF ALL TASKS UNDER SPECIFIC PROJECT ARE COMPLETED OR NOT.
    testing(state, id) {
      const tasks = state.tasks.filter((t) => t.id); //get all the tasks
      const checkTasks = (id) =>
        tasks
          .filter((t) => t.parentId === id)
          .every((v) => v.isComplete === true); //get the tasks that parent id === id array with all tasks =
      return checkTasks;
    },
    // projectComplete: (state) => {},
    // projectInProgressPercent: (state) => {},
    // projectDue: (state) => {},
  },

  // https://project-manager-app-f9829-default-rtdb.firebaseio.com/
  actions: {
    async fetchTasks() {
      const response = await fetch(
        "https://project-manager-app-f9829-default-rtdb.firebaseio.com/tasks.json"
      );
      const responseData = await response.json();
      this.tasks = responseData;

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const tasks = [];

      for (const key in this.tasks) {
        const task = {
          id: key,
          parentId: responseData[key].parentId,
          taskName: responseData[key].taskName,
          description: responseData[key].description,
          startDate: responseData[key].startDate,
          endDate: responseData[key].endDate,
          age: responseData[key].age,
          duration: responseData[key].duration,
          isComplete: responseData[key].isComplete,
        };
        tasks.push(task);
      }
      this.tasks = tasks;
      return tasks;
    },

    async addTask(item) {
      this.tasks.push({
        ...item,
        // id: this.taskId++,
        startDate: new Date(),
        age: 0,
      });

      const taskUrl = {
        ...item,
        startDate: new Date(),
        age: 0,
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/tasks.json`,
        {
          method: "POST",
          body: JSON.stringify(taskUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR TASKS");
      }
    },

    async deleteTask(itemID) {
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/tasks/${itemID}/.json`,
        {
          method: "DELETE",
          "Content-type": "application/json",
        }
      );
      if (!response.ok) {
        console.log("Error, request failed");
      }
    },

    async addHistory(data) {
      const historyUrl = {
        ...data,
        startDate: new Date(),
        age: 0,
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/history.json`,
        {
          method: "POST",
          body: JSON.stringify(historyUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR HISTORY");
      }
    },

    async deletedHistory(data, id) {
      const historyUrl = {
        ...data,
        parentId: id,
        id: this.historyId++,
        dateModified: new Date(),
      };

      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/history.json`,
        {
          method: "POST",
          body: JSON.stringify(historyUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR HISTORY");
      }
    },

    editTask(param) {
      //trick, if project is not eqwual to edit project, then edited project will be equal to what ever is changed to
      let foundTask = this.tasks.find((task) => task.id === param); //finds the project from the
      return foundTask;
    },

    async updateTaskRequest(id) {
      const url = `https://project-manager-app-f9829-default-rtdb.firebaseio.com/tasks/${id}.json`;
      const payload = this.editedTask; // payload will be equal to the new updated task
      const options = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(url, options).then((response) => console.log(response.status));

      if (!response.ok) {
        console.log("Super error 400");
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

    async deletedToActions(parent, child) {
      const actionUrl = {
        parentId: parent,
        type: "Task",
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
      }
    },

    async taskUpdatedToActions(parent) {
      const actionUrl = {
        parentId: parent,
        type: "Task",
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
  },
});
