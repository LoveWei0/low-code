import { multiply, divide } from 'mathjs'
// store
import { useStore } from '@store/index'
// pinia
import { storeToRefs } from 'pinia'

export function changeStyleWithScale(value) {
  const store = useStore()
  return multiply(value, divide(parseInt(store.canvasStyleData.scale), 100))
}
