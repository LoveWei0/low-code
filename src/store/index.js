import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => ({
    rightList: true,
    count: 0,
    componentData: [],
    curComponent: null,
    curComponentIndex: null,
    isDarkMode: false,
    // 画布全局数据
    canvasStyleData: {
      width: 1200,
      height: 740,
      scale: 100,
      color: '#000',
      opacity: 1,
      backgroundColor: '#fff',
      fontSize: 14,
    },
  }),
  actions: {
    isShowRightList() {
      this.rightList = !this.rightList
    },
  },
  persist: true,
})
