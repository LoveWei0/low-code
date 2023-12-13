import { defineAsyncComponent } from 'vue'

const modulesAttr = import.meta.glob('@/custom-component/Attr/*.vue')
const modulesComponent = import.meta.glob('@/custom-component/Common/*.vue')
// svgS
const modulesSvg = import.meta.glob('@/custom-component/Svg/Attr/*.vue')
const modulesSvgComponent = import.meta.glob(
  '@/custom-component/Svg/Common/*.vue',
)

export const attrComponents = {
  install: function (app) {
    for (let [key, value] of Object.entries(modulesAttr)) {
      let name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(value))
    }
  },
}

export const comComponents = {
  install: function (app) {
    for (let [key, value] of Object.entries(modulesComponent)) {
      let name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(value))
    }
  },
}

export const svgAttr = {
  install: function (app) {
    for (let [key, value] of Object.entries(modulesSvg)) {
      let name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(value))
    }
  },
}

export const svgComponent = {
  install: function (app) {
    for (let [key, value] of Object.entries(modulesSvgComponent)) {
      let name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(value))
    }
  },
}
