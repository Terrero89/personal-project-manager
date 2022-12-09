// store/test.ts

import { defineStore } from "pinia";

export const useHistoryStore = defineStore({
  id: "history",

  state: () => ({
    history: [],
  }),

  getters: {
    async fetchHistory() {
      const response = await fetch(
        "https://project-manager-app-f9829-default-rtdb.firebaseio.com/history.json"
      );
      const responseData = await response.json();
      this.history = responseData; //array

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const histories = [];

      for (const key in this.history) {
        const history = {
          id: key,
          user: responseData[key].user,
          parentId: responseData[key].parentId,
          projectName: responseData[key].projectName,
          taskName: responseData[key].taskName,
          description: responseData[key].description,
          category: responseData[key].category,
          startDate: responseData[key].startDate,
          endDate: responseData[key].endDate,
          age: responseData[key].age,
          isComplete: responseData[key].isComplete,
          technologies: responseData[key].technologies,
          dateModified: responseData[key].dateModified,
        };
        histories.push(history);
      }
      this.history = histories;
      return histories;
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
<<<<<<< HEAD
=======

>>>>>>> testing

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
        console.log("ERROR HISTORY from history");
      }
    },
  },
});
