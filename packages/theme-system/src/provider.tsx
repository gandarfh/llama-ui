import { Theme, ThemeProvider } from '@emotion/react'
import React from 'react'

import { theme as defaultTheme } from './config'
export { useTheme } from '@emotion/react'

export interface LlamaProviderProps {
  children?: React.ReactNode
  theme?: Theme
}

const LlamaProvider = ({ children, theme }: LlamaProviderProps) => {
  if (!theme) {
    theme = defaultTheme
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default LlamaProvider
