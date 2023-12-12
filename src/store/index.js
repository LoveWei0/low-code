import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => ({
    rightList: true,
    count: 0,
  }),
  actions: {
    isShowRightList () {
      console.log(this.rightList)
      this.rightList = !this.rightList
    },
  },
  persist: true,
})
