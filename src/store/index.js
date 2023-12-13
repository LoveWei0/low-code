import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => ({
    rightList: true,
    count: 0,
    componentData: [],
    curComponent: null,
    curComponentIndex: null,
    isDarkMode: false,
  }),
  actions: {
    isShowRightList() {
      this.rightList = !this.rightList
    },
  },
  persist: true,
})
