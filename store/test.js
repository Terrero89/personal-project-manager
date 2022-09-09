// store/test.ts

import {
  defineStore
} from 'pinia'

export const useTest = defineStore({
  id: 'test',

  state: () => ({

    actions:[],
    
    projects: [{
        id: 1,
        user: "Sergio",
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
        projectName: "Python ",
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
        projectName: "Backend Project",
        projectDescription: "Web application that will....",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        projectAge: 12,
        totalDuration: 15,
        isComplete: true,
      },

    ],

    tasks: [{
        id: 1,
        parentId: 1,
        taskName: "Navbar fix",
        description: 'This task was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },
      {
        id: 2,
        parentId: 1,
        taskName: "Testimonial Section",
        description: 'The purpose of this task is...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },
      {
        id: 3,
        parentId: 2,
        taskName: "About content",
        description: 'About content was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },
      {
        id: 4,
        parentId: 3,
        taskName: "Hero Section",
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },

      {
        id: 5,
        parentId: 2,
        taskName: "Hero Section",
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },
      {
        id: 6,
        parentId: 3,
        taskName: "Hero Section",
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },

      {
        id: 7,
        parentId: 3,
        taskName: "Hero Section",
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },

      {
        id: 8,
        parentId: 1,
        taskName: "Hero Section",
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age:14,
        duration: 4,
        isComplete: true,
      },
    ],

  }),

  getters: {

    projectList: state => state.projects,
    taskList: state => state.tasks,

    //todo: getter that will find list of tasks for specific project id
    findTaskById(state) {
      //project will find project by id
      const parentId = (id) =>  state.projects.filter((project) => project.id === id ) //? find parent id by project id's
      return (taskId) => this.taskList.filter((task) => taskId === task.parentId) //? accepts arg and filter tasksList by project id === parentId.
    },
//todo:will find the project by id to be rende it in the details page
    getProjectById: (state) => {
      return (projectId) => state.projects.filter((project) => project.id === projectId)
    },

  
 
  },
  actions: {

  }
})