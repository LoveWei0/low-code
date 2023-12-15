import { defineStore } from 'pinia'

export const useContextMenuStore = defineStore('contextMenu', {
  state: () => ({
    menuTop: 0, // 右击菜单数据
    menuLeft: 0,
    menuShow: false,
  }),
  actions: {
    hideContextMenu() {
      this.menuShow = false
    },
  },
  persist: true,
})
