import { css, Theme } from '@emotion/react'
import * as CSS from 'csstype'
import lodash from 'lodash'

import { Breakpoints, CSSResponsive } from '../type/theme'
import breakpoint from './breakpoint'
import convertToTheme from './convert-to-theme'

export type ResponsiveObject<T = Record<string, unknown>> = {
  [key in Breakpoints]?: T
}

export type ResponsiveArray<T = Record<string, unknown>> = T[]

export type Responsive<T> = T | ResponsiveObject<T> | ResponsiveArray<T>

const responsive = (
  theme: Theme,
  cssProperty?: keyof CSS.PropertiesHyphen,
  props?: CSSResponsive<string | number>
) => {
  if (lodash.isUndefined(props)) return

  const breakpoints = Object.keys(theme.breakpoints) as Breakpoints[]

  if (Array.isArray(props)) {
    const isMoreThanBreakpoints = props.length > breakpoints.length

    if (isMoreThanBreakpoints) {
      throw new Error(
        'You provided more than breakpoints you created. Please remove the unnecessary or create more breakpoints.'
      )
    }

    let style = css(convertToTheme(theme, cssProperty, props[0]))

    props.forEach((prop, index) => {
      const mediaQuery = breakpoint(breakpoints[index], theme)

      const styleBreakpoint = {
        [mediaQuery]: convertToTheme(theme, cssProperty, prop),
      }

      style = css(style, styleBreakpoint)
    })

    return style
  }

  if (typeof props === 'object') {
    const propsKeys = Object.keys(props)

    let style = css(convertToTheme(theme, cssProperty, props[propsKeys[0]]))

    propsKeys.forEach((prop, index) => {
      const mediaQuery = breakpoint(breakpoints[index], theme)

      const styleBreakpoint = {
        [mediaQuery]: convertToTheme(theme, cssProperty, props[prop]),
      }

      style = css(style, styleBreakpoint)
    })

    return style
  }

  return css(convertToTheme(theme, cssProperty, props))
}

export default responsive
