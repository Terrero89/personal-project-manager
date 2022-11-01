// store/test.ts

import { defineStore } from "pinia";

export const useProjects = defineStore({
  id: "projects",

  state: () => ({
    projectId: 5,
    projects: [
      {
        id: 1,
        user: "Sergio Terrero",
        category: "Frontend Development",
        projectName: "Web Development",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 14,
        isComplete: true,
      },
      {
        id: 2,
        user: "Sergio Terrero",
        category: "Backend Development",
        projectName: "Python Authentication",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 12,
        isComplete: false,
      },
      {
        id: 3,
        user: "Jackie Terrrero",
        category: "Backend Development",
        category: "Backend Development",
        projectName: "Backend Project",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 12,
        isComplete: true,
      },

      {
        id: 4,
        user: "Sergio Terrero",
        category: "School Assignment",
        projectName: "Rest Api Project",
        projectDescription: "Homework about..",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 1,

        isComplete: true,
      },
    ],
  }),

  getters: {
    searchItem: (state) => (item) =>
      state.projects.filter((p) => {
        return p.projectName.toLowerCase().includes(item);
      }),
    projectList: (state) => state.projects,
    taskList: (state) => state.tasks,
    hasProjects: (state) => state.projects.length > 0,
    hasTasks: (state) => state.projects.length > 0,
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

    // filterItemById: (state) => (id) =>
    // state.projects.filter((p) => p.id === id),
    tasksUnderProject(state) {
      const task = state.tasks.filter((t) => t.parentId);
      return (id) => task.filter((task) => task.id === id);
    },

    // tasksUnderProject: (state) => (id) =>
    // state.tasks.filter((task) => task.parentId === id),
    detailOfTask(state) {
      const item = state.tasks.filter((task) => task.id);
      return (id) => item.filter((task) => task.id === id);
    },

    findParentChild(state) {
      const parent = state.projects.filter((task) => task.parentId);
      return (id) => parent.filter((task) => task.parentId === id);
    },
    // findParentChild: (state) => (id) =>
    // state.projects.filter((task) => task.parentId === id),
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

    //find specific actions by specific Projects or tasks
    //will wind specific action for parent ID
    findActionsByProject(state) {
      const action = state.actions.filter((a) => a.id); // will find all ids, of the actions.

      return (id) => action.filter((t) => t.parentId === id);
    },

    //find specific actions by specific Projects or tasks
    //will wind specific action for parent ID
    //   findActionsByTask(state){
    //     const action = state.actions.filter(a => a.id) // will find all ids, of the actions.

    //     return (id)=> action.filter(t => t.parentId === id)

    // },

    findActionsByTask(state) {
      const action = state.actions.filter((a) => a.id); // will find all ids, of the actions.
      return (id) => action.filter((t) => t.id === id);
    },
  },
  actions: {
    addProject(data) {
      this.projects.push({ ...data, id: this.projectId++ });
    },
    addTask(item) {
      this.tasks.push({ ...item, id: this.taskId++ });
    },

    deleteProject(itemID) {
      this.projects = this.projects.filter((object) => {
        return object.id !== itemID;
      });
    },
    deleteTask(itemID) {
      this.tasks = this.tasks.filter((object) => {
        return object.id !== itemID;
      });
    },
    addHistory(data) {
      this.history.push({
        ...data,
        parentId: this.projectId,
        id: this.historyId++,
      });
    },
    deletedHistory(data, id) {
      this.history.push({ ...data, parentId: id, id: this.historyId++ });
    },

    editProject(param) {
      console.log(this.editPro);
      return param;
    },

    //completed in projects

    projectAddedToActions(id) {
      const action = {
        id: this.actionsId++,
        parentId: id,
        type: "Project",
        name: "Added",
        category: "Added",
      };
      this.actions.push(action);
    },

    projectDeletedToActions(id) {
      const action = {
        id: this.actionsId++,
        parentId: id,
        type: "Project",
        name: "Deleted",
        category: "Delete",
      };
      this.actions.push(action);
    },

    deletedToActions(id, parent) {
      const action = {
        id: this.actionsId++,
        parentId: this.projectId,
        type: "Task",
        parentId: parent,
        name: "Deleted",
        category: "Delete",
      };
      this.actions.push(action);
    },
  },
});
