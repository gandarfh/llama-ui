import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { Colors, CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface BorderProps {
  /**
   * The CSS `border` property
   */
  border?: CSSResponsive<CSS.Property.Border>
  /**
   * The CSS `border-top` property
   */
  borderTop?: CSSResponsive<CSS.Property.BorderTop>
  /**
   * The CSS `border-right` property
   */
  borderRight?: CSSResponsive<CSS.Property.BorderRight>
  /**
   * The CSS `border-bottom` property
   */
  borderBottom?: CSSResponsive<CSS.Property.BorderBottom>
  /**
   * The CSS `border-left` property
   */
  borderLeft?: CSSResponsive<CSS.Property.BorderLeft>

  /**
   * The CSS `border-width` property
   */
  borderWidth?: CSSResponsive<CSS.Property.BorderWidth>
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: CSSResponsive<CSS.Property.BorderTopWidth>
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: CSSResponsive<CSS.Property.BorderBottomWidth>
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: CSSResponsive<CSS.Property.BorderLeftWidth>
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: CSSResponsive<CSS.Property.BorderRightWidth>

  /**
   * The CSS `border-radius` property
   */
  borderRadius?: CSSResponsive<CSS.Property.BorderRadius>
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: CSSResponsive<CSS.Property.BorderTopLeftRadius>
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: CSSResponsive<CSS.Property.BorderTopRightRadius>
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: CSSResponsive<CSS.Property.BorderBottomLeftRadius>
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: CSSResponsive<CSS.Property.BorderBottomRightRadius>

  /**
   * The CSS `border-radius` property
   */
  radius?: CSSResponsive<CSS.Property.BorderRadius | number>
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property
   */
  radiusTop?: CSSResponsive<CSS.Property.BorderTopLeftRadius | number>
  /**
   * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property
   */
  radiusBottom?: CSSResponsive<CSS.Property.BorderTopLeftRadius | number>
  /**
   * The CSS `border-bottom-left-radius` and `border-top-left-radius` property
   */
  radiusLeft?: CSSResponsive<CSS.Property.BorderTopLeftRadius | number>
  /**
   * The CSS `border-bottom-right-radius` and `border-top-right-radius` property
   */
  radiusRight?: CSSResponsive<CSS.Property.BorderTopLeftRadius | number>
  /**
   * The CSS `border-top-left-radius` property
   */
  radiusTopLeft?: CSSResponsive<CSS.Property.BorderTopLeftRadius | number>
  /**
   * The CSS `border-top-right-radius` property
   */
  radiusTopRight?: CSSResponsive<CSS.Property.BorderTopRightRadius | number>
  /**
   * The CSS `border-bottom-left-radius` property
   */
  radiusBottomLeft?: CSSResponsive<CSS.Property.BorderBottomLeftRadius | number>
  /**
   * The CSS `border-bottom-right-radius` property
   */
  radiusBottomRight?: CSSResponsive<
    CSS.Property.BorderBottomRightRadius | number
  >

  /**
   * The CSS `border-color` property
   */
  borderColor?: CSSResponsive<CSS.Property.BorderColor | Colors>
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: CSSResponsive<CSS.Property.BorderTopColor | Colors>
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: CSSResponsive<CSS.Property.BorderBottomColor | Colors>
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: CSSResponsive<CSS.Property.BorderLeftColor | Colors>
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: CSSResponsive<CSS.Property.BorderRightColor | Colors>

  /**
   * The CSS `border-style` property
   */
  borderStyle?: CSSResponsive<CSS.Property.BorderStyle>
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: CSSResponsive<CSS.Property.BorderTopStyle>
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: CSSResponsive<CSS.Property.BorderBottomStyle>
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: CSSResponsive<CSS.Property.BorderLeftStyle>
  /**
   * The CSS `border-right-style` property
   */
  borderRightStyle?: CSSResponsive<CSS.Property.BorderRightStyle>
}

const border = ({ theme, ...props }: ThemeCSS<BorderProps>) =>
  css(
    responsive(theme, 'border', props.border),
    responsive(theme, 'border-top', props.borderTop),
    responsive(theme, 'border-bottom', props.borderBottom),
    responsive(theme, 'border-left', props.borderLeft),
    responsive(theme, 'border-right', props.borderRight),
    responsive(theme, 'border', props.borderWidth),
    responsive(theme, 'border-top-width', props.borderTopWidth),
    responsive(theme, 'border-bottom-width', props.borderBottomWidth),
    responsive(theme, 'border-left-width', props.borderLeftWidth),
    responsive(theme, 'border-right-width', props.borderRightWidth),
    responsive(theme, 'border-radius', props.borderRadius),
    responsive(theme, 'border-top-left-radius', props.borderTopLeftRadius),
    responsive(theme, 'border-top-right-radius', props.borderTopRightRadius),
    responsive(
      theme,
      'border-bottom-left-radius',
      props.borderBottomLeftRadius
    ),
    responsive(
      theme,
      'border-bottom-right-radius',
      props.borderBottomRightRadius
    ),
    responsive(theme, 'border-radius', props.radius),
    responsive(theme, 'border-top-left-radius', props.radiusTopLeft),
    responsive(theme, 'border-top-right-radius', props.radiusTopRight),
    responsive(theme, 'border-bottom-left-radius', props.radiusBottomLeft),
    responsive(theme, 'border-bottom-right-radius', props.radiusBottomRight),
    responsive(theme, 'border-top-left-radius', props.radiusTop),
    responsive(theme, 'border-top-right-radius', props.radiusTop),
    responsive(theme, 'border-bottom-left-radius', props.radiusBottom),
    responsive(theme, 'border-bottom-right-radius', props.radiusBottom),
    responsive(theme, 'border-color', props.borderColor),
    responsive(theme, 'border-top-color', props.borderTopColor),
    responsive(theme, 'border-bottom-color', props.borderBottomColor),
    responsive(theme, 'border-left-color', props.borderLeftColor),
    responsive(theme, 'border-right-color', props.borderRightColor),
    responsive(theme, 'border-style', props.borderStyle),
    responsive(theme, 'border-top-style', props.borderTopStyle),
    responsive(theme, 'border-bottom-style', props.borderBottomStyle),
    responsive(theme, 'border-left-style', props.borderLeftStyle),
    responsive(theme, 'border-right-style', props.borderRightStyle)
  )

export default border
