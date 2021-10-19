import { breakpoints } from './breakpoints'
import { colorsLight } from './colors'
import { fonts } from './fonts'

export * from './breakpoints'
export * from './colors'
export * from './fonts'

export const theme = {
  breakpoints,
  colors: colorsLight,
  fonts,
}

export type ThemeCustom = typeof theme
