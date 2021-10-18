import { Theme } from '@emotion/react'

import { Responsive } from '../config'

export type ThemeCSS<Props> = Props & {
  theme: Theme
}

type TesteColorStrings = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [keyColors in keyof Theme['colors']]: `${keyColors}.${keyof Theme['colors'][keyColors]}`
}

type ValueOf<T> = T[keyof T]

export type CSSResponsive<CSS> = Responsive<CSS>

export type Colors = ValueOf<TesteColorStrings>

export type Fonts = keyof Theme['fonts']['sizes']

export type Breakpoints = keyof Theme['breakpoints']
