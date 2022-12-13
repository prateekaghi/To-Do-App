import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
  state: () => ({
    task: [
      {
        tasks: "Complete Project",
        createdOn: "",
        assignedTo: "",
        completed: true,
      },
      {
        tasks: "Create portfolio",
        createdOn: "",
        assignedTo: "",
        completed: false,
      },
    ],
  }),
  getters: {
    totalTask() {
      this.task.length;
    },
  },
  actions: {
    createTask(fields) {
      let task = { completed: false };
      fields.forEach((e) => {
        task[e.name.trim(" ")] = e.value.value;
      });
      console.log(task);
      this.task.push(task);
    },

    toggleStatus(task) {
      task.completed = !task.completed;
    },
  },
});
