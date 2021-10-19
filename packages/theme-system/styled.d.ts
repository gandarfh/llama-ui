import '@emotion/react'

import { ThemeCustom } from './src'

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {}
}
