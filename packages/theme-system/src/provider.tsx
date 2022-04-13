import { Theme, ThemeProvider } from '@emotion/react'
import React from 'react'

import { theme as defaultTheme } from './config'
import createToken from './css-vars/create-token'
import setVars from './css-vars/set-vars'
import GlobalStyles from './global'
export { useTheme } from '@emotion/react'

export interface LlamaProviderProps {
  children?: React.ReactNode
  theme?: Theme
}

const LlamaProvider = ({ children, theme }: LlamaProviderProps) => {
  if (!theme) {
    theme = defaultTheme
  }

  const { config, components, breakpoints, ...rest } = theme

  const { themeWithVars, cssVars } = createToken(rest, config)

  setVars(cssVars)

  return (
    <ThemeProvider
      theme={{
        ...themeWithVars,
        components,
        breakpoints,
        cssVars,
      }}
    >
      {children} <GlobalStyles />
    </ThemeProvider>
  )
}

export default LlamaProvider
