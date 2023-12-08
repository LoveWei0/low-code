import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => {
    return {
      rightList: true,
      count: 0,
    }
  },
  persist: true,
})
