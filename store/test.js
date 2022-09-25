// store/test.ts

<<<<<<< HEAD
import {defineStore} from 'pinia'

export const useTest = defineStore({ id: 'test',
=======
import {
  defineStore
} from "pinia";

export const useTest = defineStore({
  id: "test",
>>>>>>> delete-feature

  state: () => ({
    history: [],
    actions: [
      {id: 1,parentId:1, type: "Task", name: "Deleted",category: "Delete"  },
      {id: 2,parentId:2, type: "Task", name: "Added",category: "Add"  },
      {id: 3,parentId:3, type: "Task", name: "Updated",category: "Update"  },
      {id: 4,parentId:4, type: "Project", name: "Deleted",category: "Delete"  },
    ],

<<<<<<< HEAD
    actions: [],

    projects: [{
        id: 1,
        user: "Sergioxx",
<<<<<<< HEAD
<<<<<<< HEAD
=======
        category: "Frontend Development",
>>>>>>> styling
=======
        category: "Frontend Development",
>>>>>>> styling
=======
    projects: [{
        id: 1,
        user: "Sergioxx",
        category: "Frontend Development",
>>>>>>> delete-feature
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        category: "Backend Development",
>>>>>>> styling
=======
        category: "Backend Development",
>>>>>>> styling
=======
        category: "Backend Development",
>>>>>>> delete-feature
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
<<<<<<< HEAD

=======
>>>>>>> delete-feature
    ],

    tasks: [
      {
        id: 1,
        parentId: 1,
        taskName: "Navbar fix",
        description: "This task was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        age: 14,
        duration: 4,
=======
        age: 10,
        duration: 15,
>>>>>>> styling
=======
        age: 10,
        duration: 15,
>>>>>>> styling
=======
        age: 10,
        duration: 1,
>>>>>>> delete-feature
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 4,
=======
        duration: 3,
>>>>>>> styling
=======
        duration: 3,
>>>>>>> styling
=======
        duration: 1,
>>>>>>> delete-feature
        isComplete: true,
      },
      {
        id: 3,
        parentId: 2,
        taskName: "About contentt",
<<<<<<< HEAD
        description: 'About content was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 4,
=======
        duration: 1,
>>>>>>> styling
=======
        duration: 1,
>>>>>>> styling
=======
        description: "About content was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
>>>>>>> delete-feature
        isComplete: false,
      },
      {
        id: 4,
        parentId: 3,
        taskName: "Hero Section",
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        age: 14,
        duration: 4,
=======
        age: 5,
        duration: 7,
>>>>>>> styling
=======
        age: 5,
        duration: 7,
>>>>>>> styling
=======
        age: 5,
        duration: 1,
>>>>>>> delete-feature
        isComplete: true,
      },

      {
        id: 5,
        parentId: 2,
        taskName: "Bug fixing",
<<<<<<< HEAD
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 4,
=======
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
>>>>>>> delete-feature
        isComplete: true,
      },
      {
        id: 6,
        parentId: 3,
        taskName: "Testimonials section",
<<<<<<< HEAD
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 4,
=======
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
>>>>>>> delete-feature
        isComplete: true,
      },

      {
        id: 7,
        parentId: 3,
        taskName: "Search feature",
<<<<<<< HEAD
        description: 'Hero Section was done to...',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 4,
=======
        description: "Hero Section was done to...",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
>>>>>>> delete-feature
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> styling
        duration: 4,
=======
        duration: 5,
>>>>>>> delete-feature
        isComplete: false,
      },
      {
        id: 9,
        parentId: 2,
        taskName: "Footer Section",
<<<<<<< HEAD
        description: 'Footer Section for website.',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
<<<<<<< HEAD
=======
        duration: 4,
=======
        description: "Footer Section for website.",
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
        duration: 1,
>>>>>>> delete-feature
        isComplete: true,
      },
      {
        id: 10,
        parentId: 2,
        taskName: "Testimonial Section",
<<<<<<< HEAD
        description: 'Testimonial Section for website.',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
>>>>>>> styling
        duration: 4,
        isComplete: true,
      },
      {
<<<<<<< HEAD
        id: 10,
        parentId: 2,
        taskName: "Testimonial Section",
        description: 'Testimonial Section for website.',
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 14,
>>>>>>> styling
        duration: 4,
        isComplete: false,
      },
      {
=======
>>>>>>> styling
        id: 11,
        parentId: 4,
        taskName: "Math Assignment",
        description: 'MAth assignment...',
=======
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
>>>>>>> delete-feature
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
<<<<<<< HEAD
        description: 'C Project For school Assignment',
=======
        description: "C Project For school Assignment",
>>>>>>> delete-feature
        startDate: "07/01/2022",
        endDate: "07/15/2022",
        age: 1,
        duration: 1,
        isComplete: true,
      },
    ],
  }),

  getters: {
<<<<<<< HEAD

    projectList: state => state.projects,
    taskList: state => state.tasks,
<<<<<<< HEAD
<<<<<<< HEAD
    filterItemById: (state)  => state.projects.filter((p) => p.id), //?filters all project id's
    //todo: getter that will find list of tasks for specific project id

    //todo:will find the id of the projects and will
    //todo: return the tasks under parent id
    tasksUnderProject: (state) => (id) => state.tasks.ilter((task) => task.parentId === id)f

=======
=======
>>>>>>> styling
    filterItemById: (state) => id => state.projects.filter((p) => p.id === id),
    tasksUnderProject: (state) => (id) => state.tasks.filter((task) => task.parentId === id),
    detailOfTask: (state) => (id) => state.tasks.filter((task) => task.id === id),
    findParentChild: state => id => state.projects.filter(task => task.parentId === id)
<<<<<<< HEAD
>>>>>>> styling
=======
>>>>>>> styling
=======
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
  
    //evaluates how many are in the array
    findLength(state){
     const tasks = state.tasks.filter(t => t.parentId  )
    return (id) => tasks.filter(t => t.parentId === id).map(t => t.length ===0 ).length
    },
   
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
        .reduce((accumulator, item) => {
          return accumulator + item.duration;
        }, 0);
    },
>>>>>>> delete-feature
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

    deleteTask(itemID) {
      this.tasks = this.tasks.filter((object) => {
        return object.id !== itemID;
      });
    },
    deletedToActions(id,parent){
      const action = {
        type: "Task",
        id: id,
        parentId: parent,
        name: "Deleted",
        category: "Delete",
      };
      this.actions.push(action);
    },

    projectDeletedToActions(id,parent){
      const action = {
        type: "Project",
        id: id,
        name: "Deleted",
        category: "Delete",
      };
      this.actions.push(action);
    },
    // addToHistory(id){
    //   const added = this.tasks.find((t) => t.id === id)
    //   this.history.push(added);
   
    // },
 
  },
});