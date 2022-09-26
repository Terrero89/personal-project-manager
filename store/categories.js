// store/test.ts

import {
    defineStore
  } from "pinia";
  
  export const useCategories = defineStore({
    id: "categories",
  
    state: () => ({
    AddProjectCategories:["Frontend Development", "Backend Development","Fullstack Development", "Python Project", "Node/Express Project", "MongoDB" ]
   
    
   
    })
  });