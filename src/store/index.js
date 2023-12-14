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
    // 点击画布时是否点中组件, 主要用于取消选中组件用
    // 如果没有点中组件, 并且在画布空白处弹起鼠标, 则取消当前组件的选中状态
    isClickComponent: false,
    // 是否在编辑器中,用于判断复制,粘贴组件时是否生效, 如果在编辑器外, 则无视这些操作
    isInEditor: false,
  }),
  actions: {
    isShowRightList() {
      this.rightList = !this.rightList
    },
    // 添加组件
    addComponent({ component, index }) {
      console.log(index)
      if (index !== undefined) {
        this.componentData.splice(index, 0, component)
      } else {
        this.componentData.push(component)
      }
    },
    // 设置选中组件状态
    setClickComponentStatus(status) {
      this.isClickComponent = status
    },
    // 设置组件在编辑器中的状态
    setInEditorStatus(status) {
      this.isInEditor = status
    },
    // 设置组件数据
    setCurComponent({ component, index }) {
      this.curComponent = component
      this.curComponentIndex = index
    },
    // 重置componentData
    setComponentData(componentData) {
      this.componentData = componentData
    },
  },
  persist: true,
})
