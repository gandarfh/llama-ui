import '@emotion/react'

import { theme } from './src'

type ThemeCustom = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {}
}
