import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { Colors, CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface InteractionsProps {
  /**
   * The CSS `user-select` property
   */
  userSelect?: CSSResponsive<CSS.Property.UserSelect>
  /**
   * The CSS `cursor` property
   */
  cursor?: CSSResponsive<CSS.Property.Cursor>
  /**
   * The CSS `outline` property
   */
  outline?: CSSResponsive<CSS.Property.Outline>
  /**
   * The CSS `outline-offset` property
   */
  outlineOffset?: CSSResponsive<CSS.Property.OutlineOffset>
  /**
   * The CSS `outline-color` property
   */
  outlineColor?: CSSResponsive<CSS.Property.Color | Colors>
}

const interactions = ({ theme, ...props }: ThemeCSS<InteractionsProps>) =>
  css(
    responsive(theme, 'cursor', props.cursor),
    responsive(theme, 'outline', props.outline),
    responsive(theme, 'user-select', props.userSelect),
    responsive(theme, 'outline-offset', props.outlineOffset),
    responsive(theme, 'outline-color', props.outlineColor)
  )

export default interactions
