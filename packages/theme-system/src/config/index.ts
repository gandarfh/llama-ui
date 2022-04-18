import createToken from '../css-vars/create-token'
import { breakpoints } from './breakpoints'
import { colorsLight } from './colors'
import { fonts } from './fonts'

export * from './breakpoints'
export * from './colors'
export * from './fonts'

const Box = {
  defaultProps: {},
  variants: {},
  states: {},
  sizes: {},
  baseStyle: {
    w: '100%',
  },
}

const Flex = {
  defaultProps: {},
  variants: {},
  states: {},
  sizes: {},
  baseStyle: {
    w: '100%',
    alignItems: 'flex-start',
    justifyContent = 'flex-start',
    d: 'flex',
    flex: 1,
  },
}

const Grid = {
  defaultProps: {},
  variants: {},
  states: {},
  sizes: {},
  baseStyle: {
    w: '100%',
    d: 'grid',
  },
}

const Container = {
  defaultProps: {},
  variants: {},
  states: {},
  sizes: {},
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

const config = {
  prefix: 'llama',
}

const tokens = {
  colors: colorsLight,
  fonts,
}

const components = {
  Container,
  Box,
  Grid,
  Flex,
}

const { tokensWithVars, cssVars } = createToken(tokens, config)

const theme = {
  ...tokensWithVars,
  breakpoints,
  config,
  components,
  cssVars,
}

export type ThemeCustom = typeof theme

export default theme
