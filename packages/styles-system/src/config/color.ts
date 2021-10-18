import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { Colors, CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface ColorProps {
  /**
   * The CSS `color` property
   */
  color?: CSSResponsive<CSS.Property.Color | Colors>
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: CSSResponsive<CSS.Property.Fill | Colors>
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: CSSResponsive<CSS.Property.Stroke | Colors>
}

const color = ({ theme, ...props }: ThemeCSS<ColorProps>) =>
  css(
    responsive(theme, 'color', props.color),
    responsive(theme, 'fill', props.fill),
    responsive(theme, 'stroke', props.stroke)
  )

export default color
