const filterKeys = ['width', 'height', 'scale']
/**
 * getCanvasStyle获取canvas样式
 */
export function getCanvasStyle(canvasStyleData) {
  const result = {}
  Object.keys(canvasStyleData)
    .filter((key) => !filterKeys.includes(key))
    .forEach((key) => {
      result[key] = canvasStyleData[key]
      if (key === 'fontSize') {
        result[key] += 'px'
      }
    })
  return result
}

const needUnit = [
  'fontSize',
  'width',
  'height',
  'top',
  'left',
  'borderWidth',
  'letterSpacing',
  'borderRadius',
]

/**
 * getStyle 过滤 component 样式
 */
export const getStyle = (style, filter = []) => {
  const result = {}
  Object.keys(style).forEach((key) => {
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        if (style[key] !== '') {
          result[key] = style[key]
          if (needUnit.includes(key)) {
            result[key] += 'px'
          }
        }
      } else {
        result.transform = key + '(' + style[key] + 'deg)'
      }
    }
  })
  return result
}

/**
 * getSvgStyle过滤svg样式
 */
export const getSvgStyle = (style, filter = []) => {
  const result = {}
  const styleTypeList = [
    'opacity',
    'width',
    'height',
    'top',
    'left',
    'rotate',
    'fontSize',
    'fontWeight',
    'lineWeight',
    'letterSpacing',
    'textAlign',
    'color',
  ]
  styleTypeList.forEach((key) => {
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        if (style[key] !== '') {
          result[key] = style[key]
          if (needUnit.includes(key)) {
            result[key] += 'px'
          }
        }
      } else {
        result.transform = key + '(' + style[key] + 'deg)'
      }
    }
  })
  return result
}
