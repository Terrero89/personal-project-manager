// store/test.ts

import { defineStore } from "pinia";

export const useTest = defineStore({
  id: "test",

  state: () => ({
    projectId: 5,
    taskId: 1, //number will be zero once i start adding to firebase
    actionsId: 1,
    historyId: 1,
    editPro: {},
    editedTask: {},
    
    history: [],
    actions: [
      { id: 1, parentId: 1, type: "Task", name: "Deleted", category: "Delete" },
      { id: 2, parentId: 2, type: "Task", name: "Added", category: "Add" },
      { id: 3, parentId: 3, type: "Task", name: "Updated", category: "Update" },
      {
        id: 4,
        parentId: 4,
        type: "Project",
        name: "Deleted",
        category: "Delete",
      },
      { id: 5, parentId: 4, type: "Task", name: "Added", category: "Add" },
      { id: 6, parentId: 3, type: "Task", name: "Added", category: "Add" },
      { id: 7, parentId: 2, type: "Task", name: "Updated", category: "Update" },
      { id: 8, parentId: 1, type: "Project", name: "Added", category: "Add" },
    ],

    projects: [
      {
        id: 1,
        user: "Sergio Terrero",
        category: "Frontend Development",
        projectName: "Web Development",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        technologies: ["React Js", "Next Js", "Firebase", "Bootstrap", "C"],
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
        technologies: ["Vue Js", "Nuxt Js", "Firebase", "Tailwind"],
        projectAge: 12,

        isComplete: false,
      },
      {
        id: 3,
        user: "Jackie Terrrero",
        category: "Backend Development",
        category: "Backend Development",
        projectName: "Backend Project",
        projectDescription: "Web application that will...Web application that will.Web application that will...Web application that will. Web application that will....Web application that will...Web application that will....Web application that will.....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        technologies: [
          "Vue Js",
          "Nuxt Js",
          "Firebase",
          "Tailwind",
        
          "Pinia",
        ],
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
        technologies: ["Vue Js","Tailwind", "HTML", "CSS", "Axios", "Tailwind", "HTML", "CSS", "Axios"],
        projectAge: 1,
        isComplete: true,
      },
    ],

    tasks: [
      {
        id: 1,
        parentId: 1,
        taskName: "Navbar fix",
        description: "This task was done to...",
        startDate: "11/01/2022",
        endDate: "07/15/2022",
        age: 10,
        duration: 3,
        isComplete: true,
      },
      {
        id: 2,
        parentId: 1,
        taskName: "Testimonial Section",
        description: "The purpose of this task is...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },
      {
        id: 3,
        parentId: 2,
        taskName: "About contentt",
        description: "About content was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: false,
      },
      {
        id: 4,
        parentId: 3,
        taskName: "Hero Section",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 5,
        duration: 1,
        isComplete: true,
      },

      {
        id: 5,
        parentId: 2,
        taskName: "Bug fixing",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },
      {
        id: 6,
        parentId: 3,
        taskName: "Testimonials section",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },

      {
        id: 7,
        parentId: 3,
        taskName: "Search feature",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },

      {
        id: 8,
        parentId: 1,
        taskName: "Hero Section",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 5,
        isComplete: false,
      },
      {
        id: 9,
        parentId: 2,
        taskName: "Footer Section",
        description: "Footer Section for website..",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },
      {
        id: 10,
        parentId: 2,
        taskName: "Testimonial Section",
        description: "Testimonial Section for website.",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
        isComplete: true,
      },
      {
        id: 11,
        parentId: 4,
        taskName: "Math Assignment",
        description: "MAth assignment...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 1,
        duration: 1,
        isComplete: true,
      },
      {
        id: 12,
        parentId: 4,
        taskName: "C Project",
        description: "C Project For school Assignment",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 1,
        duration: 1,
        isComplete: true,
      },
    ],
  }),

  getters: {
    historyByProject: (state) => (id) =>
      state.history.filter((item) => item.parentId === id),

    //capture the last history by specific project
    lastHistoryDates: (state) => (id) => {
      const index = state.history.filter((item) => item.parentId === id);
      return state.history[index.length - 1];
    },

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

    tasksUnderProject(state) {
      const task = state.tasks.filter((t) => t.parentId);
      return (id) => task.filter((task) => task.id === id);
    },

    detailOfTask(state) {
      const item = state.tasks.filter((task) => task.id);
      return (id) => item.filter((task) => task.id === id);
    },

    findParentChild(state) {
      const parent = state.projects.filter((task) => task.parentId);
      return (id) => parent.filter((task) => task.parentId === id);
    },

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
    async addProject(data) {
      this.projects.push({
        ...data,
        startDate: new Date(),
        projectAge: 1,
        id: this.projectId++,
      });

      const projectUrl = {
        ...data,
        startDate: new Date(),
        projectAge: 1,
        id: this.projectId,
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects.json`,
        {
          method: "POST",
          body: JSON.stringify(projectUrl),
        }
      );
      if (!response.ok) {
        console.log("ERROR");
      }
    },
    async addTask(item) {
      this.tasks.push({
        ...item,
        id: this.taskId++,
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
        console.log("ERROR");
      }
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

    async addHistory(data) {
      this.history.push({
        ...data,
        parentId: data.id,
        id: this.historyId++,
        dateModified: new Date(),
      });

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
        console.log("ERROR");
      }
    },
    deletedHistory(data, id) {
      this.history.push({
        ...data,
        parentId: id,
        id: this.historyId++,
        dateModified: new Date(),
      });
    },

    editProject(param) {
      //trick, if project is not eqwual to edit project, then edited project will be equal to what ever is changed to
      let foundProject = this.projects.find((project) => project.id === param); //finds the project from the
      return foundProject;
    },

    editTask(param) {
      //trick, if project is not eqwual to edit project, then edited project will be equal to what ever is changed to
      let foundTask = this.tasks.find((task) => task.id === param); //finds the project from the
      return foundTask;
    },

    //completed in projects

    async projectAddedToActions(id) {
      const action = {
        id: this.actionsId++,
        parentId: id,
        type: "Project",
        name: "Added",
        category: "Add",
        dateModified: new Date(),
      };
      this.actions.push(action);

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
      const action = {
        id: this.actionsId++,
        parentId: id,
        type: "Project",
        name: "Deleted",
        category: "Delete",
        dateModified: new Date(),
      };
      this.actions.push(action);

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

    deletedToActions(parent) {
      const action = {
        id: this.actionsId++,
        parentId: this.projectId,
        type: "Task",
        parentId: parent,
        name: "Deleted",
        category: "Delete",
        dateModified: new Date(),
      };
      this.actions.push(action);
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

    async taskUpdatedToActions(parent,childId,parentId) {
      const action = {
        id: childId,
        type: "Task",
        parentId: parentId,
        name: "Updated",
        category: "Update",
        dateModified: new Date(),
      };
      this.actionsId++,
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
  
  
  }
});
