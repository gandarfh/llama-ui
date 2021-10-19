import '@emotion/react'

import { ThemeCustom } from './packages/theme-system/lib'

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {}
}
