// store/test.ts

import {
  defineStore
} from 'pinia'

export const useTest = defineStore({
  id: 'test',

  state: () => ({


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
        taskName: "Nvbar fix"
      },
      {
        id: 2,
        parentId: 1,
        taskName: "Testimonial Section"
      },
      {
        id: 3,
        parentId: 2,
        taskName: "About content"
      },
      {
        id: 4,
        parentId: 3,
        taskName: "About content"
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
    }
 
  },
  actions: {

  }
})