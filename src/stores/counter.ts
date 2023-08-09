import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0, items: [] };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  // persist: true,
  // persist: {
  //   key: "my_counter",
  //   storage: sessionStorage,
  //   paths: ["count"],
  // },
});
