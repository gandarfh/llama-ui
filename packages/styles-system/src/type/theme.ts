import { Theme } from '@llama-ui/theme-system'

import { Responsive } from '../config'

export type ThemeCSS<Props> = Props & {
  theme: Theme
}

type ValueOf<T> = T[keyof T]

type Keys = {
  [key in keyof ValueOf<Theme['colors']>]: key
}

export type CSSResponsive<CSS> = Responsive<CSS>

export type Colors = `${keyof Theme['colors']}.${ValueOf<Keys>}`

export type Fonts = keyof Theme['fonts']['sizes']

export type Breakpoints = keyof Theme['breakpoints']
