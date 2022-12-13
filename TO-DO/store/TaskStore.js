import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
  state: () => ({
    task: [
      {
        name: "Complete Project",
        completed: true,
        createdAt: "",
        completedAt: "",
        createdBy: "",
        assignedTo: "",
      },
      {
        name: "Create portfolio",
        completed: false,
        createdAt: "",
        completedAt: "",
        createdBy: "",
        assignedTo: "",
      },
    ],
  }),
  getters: {
    totalTask() {
      this.task.length;
    },
  },
});
