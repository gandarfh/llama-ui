import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface PositionsProps {
  /**
   * The CSS `top` property
   */
  top?: CSSResponsive<CSS.Property.Top | number>
  /**
   * The CSS `bottom` property
   */
  bottom?: CSSResponsive<CSS.Property.Bottom | number>
  /**
   * The CSS `top` property
   */
  left?: CSSResponsive<CSS.Property.Left | number>
  /**
   * The CSS `bottom` property
   */
  right?: CSSResponsive<CSS.Property.Right | number>
  /**
   * The CSS `position` property
   */
  pos?: CSSResponsive<CSS.Property.Position>
  /**
   * The CSS `position` property
   */
  position?: CSSResponsive<CSS.Property.Position>
}

const positions = ({ theme, ...props }: ThemeCSS<PositionsProps>) =>
  css(
    responsive(theme, 'position', props.pos),
    responsive(theme, 'position', props.position),
    responsive(theme, 'top', props.top),
    responsive(theme, 'bottom', props.bottom),
    responsive(theme, 'left', props.left),
    responsive(theme, 'right', props.right)
  )

export default positions
