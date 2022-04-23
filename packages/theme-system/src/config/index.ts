import { CSSObject } from '@emotion/react'

import { Theme } from '..'
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
    justifyContent: 'flex-start',
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

const global = (theme: Theme): CSSObject => ({
  body: {
    fontFamily: theme.fonts.family.body,
    margin: 0,
    padding: 0,
    color: theme.colors.black[700],
    fontSize: theme.fonts.sizes.m,
    fontWeight: theme.fonts.weights.regular,
  },
  ':is(h1, h2, h3, h4, h5, h6)': {
    fontFamily: theme.fonts.family.heading,
  },
  '*': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'border-box',
    color: theme.colors.black[700],
    margin: 0,
    padding: 0,
  },
})

const { tokensWithVars, cssVars } = createToken(tokens, config)

const theme = {
  ...tokensWithVars,
  breakpoints,
  config,
  components,
  global,
  cssVars,
}

export type ThemeCustom = typeof theme

export default theme
