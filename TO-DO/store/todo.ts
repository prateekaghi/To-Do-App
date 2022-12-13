import { defineStore } from "pinia";

export const useToDoStore = defineStore("todo", {
  state: () => ({ items: [] }),
  getters: {
    totalTasks: (state) => state.items.length,
  },
  actions: {
    increment() {
      console.log(this.items);
    },
  },
});
