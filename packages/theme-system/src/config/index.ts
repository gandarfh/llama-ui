import { breakpoints, BreakpointsType } from './breakpoints'
import { colorsLight, ColorsType } from './colors'
import { fonts, FontsType } from './fonts'

export * from './breakpoints'
export * from './colors'
export * from './fonts'

export type ThemeCustom = {
  breakpoints: BreakpointsType
  colors: ColorsType
  fonts: FontsType
}

export const theme = {
  breakpoints,
  colors: colorsLight,
  fonts,
}
