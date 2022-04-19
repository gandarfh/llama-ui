import { Theme, ThemeProvider } from '@emotion/react'
import React from 'react'

import defaultTheme from './config'
import generateVars from './css-vars/generate-vars'
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

  generateVars(defaultTheme.cssVars)

  return (
    <ThemeProvider theme={theme}>
      {children} <GlobalStyles />
    </ThemeProvider>
  )
}

export default LlamaProvider
