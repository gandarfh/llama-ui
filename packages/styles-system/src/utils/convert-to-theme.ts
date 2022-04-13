import { Theme } from '@emotion/react'
import * as CSS from 'csstype'
import lodash from 'lodash'

import { ResponsiveArray } from '../config'
import { CSSResponsive } from '../type/theme'
import getColorTheme from './get-color-theme'
import getFontTheme from './get-font-theme'

const makeCssProperty = (
  cssProperty?: keyof CSS.PropertiesHyphen,
  props?: CSSResponsive<string | number>
) => {
  const property = lodash.camelCase(cssProperty)

  return props && { [property]: props }
}

const convertToTheme = (
  theme: Theme,
  cssProperty?: keyof CSS.PropertiesHyphen,
  value?: CSSResponsive<string | number>
): CSSResponsive<string | number> | undefined => {
  const isObject = typeof value === 'object'

  if (isObject) {
    return Object.keys(value).map((key) =>
      convertToTheme(theme, cssProperty, value[key])
    ) as ResponsiveArray<string>
  }

  if (cssProperty === 'font-size') {
    return makeCssProperty(cssProperty, getFontTheme(theme, value))
  }

  return makeCssProperty(cssProperty, getColorTheme(theme, value))
}

export default convertToTheme
