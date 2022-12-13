import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: [
      {
        name: "Prateek Aghi",
        username: "prateekaghi",
        password: "prateekaghi10@",
        image: "~/assets/image/users/user.jpg",
      },
      {
        name: "Aastha Gulati",
        username: "aasthagulati",
        password: "prateekaghi10@",
        image: "~/assets/image/users/user.jpg",
      },
    ],
  }),
  getters: {
    totalUsers() {
      this.user.length;
    },
  },
});
