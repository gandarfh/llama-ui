import '@emotion/react'

import { theme } from './packages/theme-system/lib'

type ThemeCustom = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {}
}
