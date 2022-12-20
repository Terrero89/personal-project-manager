// store/test.ts

import { defineStore } from "pinia";

export const useProjectStore = defineStore({
  id: "projects",

  state: () => ({
    editPro: {},
    projects: [],
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

    // hasActions: (state) => state.actions.length > 0,
    filterItemById(state) {
      const prj = state.projects.filter((p) => p.id);
      return (id) => prj.filter((p) => p.id === id);
    },

    findParentChild(state) {
      const parent = state.projects.filter((task) => task.parentId);
      return (id) => parent.filter((task) => task.parentId === id);
    },

    taskOfParents: (state) => (id) => state.tasks.filter((task) => task.parentId === id), //finds tasks specific of a project

    getParentName: (state) => (id) => state.projects.filter((p) => p.id === id),
    projectActive: (state) =>
      state.projects.filter((project) => project.isComplete),
    projectInProgress: (state) => state.projects.filter((project) => !project.isComplete),

    projectCompletionAvg() {
      const active = this.projectActive.length;
      const notActive = this.projectInProgress.length;
      const calculation = (notActive / (active + notActive)) * 100;
      return parseFloat(calculation.toFixed(2));
    },

    projectTotals() {
      const active = this.projectActive.length;
      const notActive = this.projectInProgress.length;
      const calculation = active + notActive;
    return parseFloat(calculation.toFixed(2));
    },
    projectInProgressPercent() {
      const calculation = 100 - this.projectCompletionAvg;

      return parseFloat(calculation.toFixed(2));
  
    },
    //?calculates the percentage of projects not completed that are under 15 days old
    projectsSuccess: (state) => {
      const allInProgressProjects = state.projects.filter((project) => !project.isComplete) //all projects in progress
      const overdueProjects = allInProgressProjects.filter((p) => p.projectAge > 15).length; // all projects over age 15
      const notOverdueProjects = allInProgressProjects.filter((p) => p.projectAge < 15).length; // all projects under age 15
      const calculation = (notOverdueProjects/ (overdueProjects + notOverdueProjects)) * 100 //calculation for percentage calculation
     
      return parseFloat(calculation.toFixed(2));
    },
  //?average days completed is the total days of all completed proeject between completed projects
    completeAverageDays() {
      //reducer that will calculate the number of days in completed projects
      const sum = this.projectActive.reduce((acc, obj) => {
        return acc + obj.projectAge
      }, 0)
      return Math.ceil(sum / this.projectActive.length)
    }
  

 
  },

  
  // https://project-manager-app-f9829-default-rtdb.firebaseio.com/
  actions: {
    // async fetchPosts() {
    //   this.projects = []

    //   try {
    //     this.projects = await fetch('https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects.json')
    //     .then((response) => response.json())
    //   } catch (error) {
    //     this.error = error
    //   } finally {
    //     this.loading = false
    //   }
    // },
    async fetchProjects() {
      const response = await fetch(
        "https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects.json"
      );
      const responseData = await response.json();
      this.projects = responseData;

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const projects = [];

      for (const key in this.projects) {
        const project = {
          id: key,
          user: responseData[key].user,
          category: responseData[key].category,
          projectName: responseData[key].projectName,
          description: responseData[key].description,
          startDate: responseData[key].startDate,
          endDate: responseData[key].endDate,
          technologies: responseData[key].technologies,
          projectAge: responseData[key].projectAge,
          isComplete: responseData[key].isComplete,
          dateModified: responseData[key].dateModified,
        };
        projects.push(project);
      }
      this.projects = projects;
    },

    async addProject(data) {
      const projectUrl = {
        ...data,
        startDate: new Date(),
        projectAge: 1,
        // projectId: this.projectId,
      };
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects.json`,
        {
          method: "POST",
          body: JSON.stringify(projectUrl),
        }
      );
      this.projectId++;

      if (!response.ok) {
        console.log("ERROR PROJECTS");
      }
    },

    async deleteProject(itemID) {
      let response = await fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects/${itemID}/.json`,
        {
          method: "DELETE",
          "Content-type": "application/json",
        }
      );
      if (!response.ok) {
        console.log("Error, request failed");
      }

      // console.log(response)
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

    editProject(param) {
      //trick, if project is not eqwual to edit project, then edited project will be equal to what ever is changed to
      let foundProject = this.projects.find((project) => project.id === param); //finds the project from the
      return foundProject;
    },

    async updateProjectRequest(id) {
      const url = `https://project-manager-app-f9829-default-rtdb.firebaseio.com/projects/${id}.json`;
      const payload = this.editPro; // payload will be equal to the new updated task
      const options = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(url, options).then((response) =>
        console.log("response from pinia " + response.status)
      );

      if (!response.ok) {
        console.log("Super error 400");
      }
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
  },
});
