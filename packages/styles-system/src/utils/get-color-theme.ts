import { Theme } from '@emotion/react'

const clearVariable = (token: string) => {
  return token.replace(/var|\(|\)/g, '')
}

export const getOpacity = (value: number) => {
  if (value > 10 || value < 0) {
    throw new Error(
      `The opacity must be greater than 0 or less than 10. You pass: ${value}.`
    )
  }

  const isNotInteger = !Number.isInteger(value)

  if (isNotInteger) {
    throw new Error(`The opacity must be a integer value. You pass: ${value}.`)
  }

  const numberToHex = (a: number) => a.toString(16)
  const hexOfOpacity = (a: number) => numberToHex(Math.trunc((a * 255) / 10))

  const opacity = hexOfOpacity(value)

  return opacity
}

export const convertToHex = (theme: Theme, color: string) => {
  const [key, hue] = color.split('.')
  const colors = Object.keys(theme.colors)

  if (!colors.includes(key)) {
    return color
  }

  const hex = theme.colors[key][hue]

  return hex
}

const getColorTheme = (theme?: Theme, color?: string | number) => {
  if (typeof color !== 'string') return color

  const onlyColorKey = /(([a-z]+\.\d?\d?\d?)(\/\d?.?\d)?)/g
  const colorSplit = color?.match(onlyColorKey)

  let cssPropertyValue = color

  colorSplit?.forEach((item) => {
    const [key, opacity] = item.split('/')
    const hex = convertToHex(theme!, key)

    if (opacity) {
      const hexOpacity = getOpacity(Number(opacity))

      const hexWithOpacity =
        theme?.cssVars[clearVariable(hex)] ?? hex + hexOpacity

      cssPropertyValue = cssPropertyValue?.replace(item, hexWithOpacity)
      return cssPropertyValue
    }

    cssPropertyValue = cssPropertyValue?.replace(item, hex)
  })

  return cssPropertyValue
}

export default getColorTheme
