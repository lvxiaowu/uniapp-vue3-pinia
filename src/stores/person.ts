import { defineStore } from "pinia";

export const useStudentStore = defineStore("student", {
  state: () => {
    return { age: 18 };
  },
  getters: {
    doubleCount: (state) => state.age * 2,
  },
  actions: {
    increment() {
      this.age++;
    },
  },
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
});
