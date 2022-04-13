import { StylesProps } from '@llama-ui/styles-system'

import { breakpoints } from './breakpoints'
import { colorsLight } from './colors'
import { fonts } from './fonts'

export * from './breakpoints'
export * from './colors'
export * from './fonts'

type ComponentBaseType = {
  baseStyle?: StylesProps
  state?: Record<string, StylesProps>
  variants?: Record<string, StylesProps>
}

const Box: ComponentBaseType = {
  baseStyle: {
    w: '100%',
  },
}

const Container: ComponentBaseType = {
  baseStyle: {
    w: '100%',
    d: 'flex',
    flex: 1,
    px: '16px',
    mx: 'auto',
    flexDirection: 'column',
    maxW: ['calc(100% - 20px)', 'calc(100% - 40px)', '956px', '1200px'],
  },
}

export const theme = {
  breakpoints,
  colors: colorsLight,
  config: {
    prefix: 'llama',
  },
  fonts,
  components: {
    Container,
    Box,
  },
  cssVars: {},
}

export type ThemeCustom = typeof theme
