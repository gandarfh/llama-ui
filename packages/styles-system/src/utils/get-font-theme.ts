import { Theme } from '@emotion/react'

const getFontTheme = (theme: Theme, property?: string | number) => {
  if (!property) return

  if (typeof property === 'number') return property
  const fonts = Object.keys(theme?.fonts?.sizes)

  if (!fonts.includes(property)) {
    return property
  }

  return theme?.fonts.sizes[property]
}

export default getFontTheme
