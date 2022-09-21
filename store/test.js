// store/test.ts

import {
  defineStore
} from "pinia";

export const useTest = defineStore({
  id: "test",

  state: () => ({
    actions: [],

    projects: [{
        id: 1,
        user: "Sergioxx",
        category: "Frontend Development",
        projectName: "Web Development",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 14,
        totalDuration: 15,
        isComplete: true,
      },
      {
        id: 2,
        user: "Sergioo",
        category: "Backend Development",
        projectName: "Python Authentication",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 12,
        totalDuration: 15,
        isComplete: false,
      },
      {
        id: 3,
        user: "Jackie",
        category: "Backend Development",
        projectName: "Backend Project",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 12,
        totalDuration: 15,
        isComplete: true,
      },

      {
        id: 4,
        user: "Sergio",
        category: "School Assignment",
        projectName: "Rest Api Project",
        projectDescription: "Homework about..",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 1,
        totalDuration: 3,
        isComplete: true,
      },
    ],

    tasks: [{
        id: 1,
        parentId: 1,
        taskName: "Navbar fix",
        description: "This task was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 10,
        duration: 1,
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
        description: "Footer Section for website.",
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
    projectList: (state) => state.projects,
    taskList: (state) => state.tasks,
    filterItemById(state) {
      const prj = state.projects.filter((p) => p.id)
      return (id) => prj.filter(p => p.id === id)
    },


    // filterItemById: (state) => (id) =>
    // state.projects.filter((p) => p.id === id),
    tasksUnderProject(state) {
      const task = state.tasks.filter(t => t.parentId)
      return (id) => task.filter((task) => task.id === id)
    },

    // tasksUnderProject: (state) => (id) =>
    // state.tasks.filter((task) => task.parentId === id),
    detailOfTask(state) {
      const item = state.tasks.filter((task) => task.id)
      return (id) => item.filter(task => task.id === id)
    },
    // detailOfTask: (state) => (id) =>
    // state.tasks.filter((task) => task.id === id),
    findParentChild(state){
      const parent = state.projects.filter((task) => task.parentId)
      return (id) => parent.filter((task) => task.parentId === id)
    },
      // findParentChild: (state) => (id) =>
      // state.projects.filter((task) => task.parentId === id),
    //?finding specific project tasks total hours
    totalTaskDuration: (state) => {
      //?find all tasks by ids
      const tasks = state.tasks.filter((p) => p.id);
      //?Filter tasks parentID that are equal to parameter
      //?calculates the total of the hours by id with reduce
      return (id) => tasks.filter((p) => p.parentId === id)
        .reduce((accumulator, object) => {
          return accumulator + object.duration;
        }, 0);
    },
  },
  actions: {
    addProject(item) {
      this.projects.push({
        ...item
      });
    },
    addTask(item) {
      this.projects.push({
        ...item
      });
    },
    deleteProject(itemID) {
      this.projects = this.projects.filter((object) => {
        return object.id !== itemID;
      });
    },

    deleteProject(itemID) {
      this.tasks = this.tasks.filter((object) => {
        return object.id !== itemID;
      });
    },
  },
});