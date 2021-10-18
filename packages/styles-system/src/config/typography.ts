import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, Fonts, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface TypographyProps {
  /**
   * The CSS `font-weight` property
   */
  fontWeight?: CSSResponsive<CSS.Property.FontWeight | number>
  /**
   * The CSS `line-height` property
   */
  lineHeight?: CSSResponsive<CSS.Property.LineHeight | number>
  /**
   * The CSS `letter-spacing` property
   */
  letterSpacing?: CSSResponsive<CSS.Property.LetterSpacing | number>
  /**
   * The CSS `font-size` property
   */
  fontSize?: CSSResponsive<CSS.Property.FontSize | Fonts | number>
  /**
   * The CSS `font-family` property
   */
  fontFamily?: CSSResponsive<CSS.Property.FontFamily>
  /**
   * The CSS `text-align` property
   */
  textAlign?: CSSResponsive<CSS.Property.TextAlign>
  /**
   * The CSS `font-style` property
   */
  fontStyle?: CSSResponsive<CSS.Property.FontStyle>
  /**
   * The CSS `text-transform` property
   */
  textTransform?: CSSResponsive<CSS.Property.TextTransform>
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: CSSResponsive<CSS.Property.WhiteSpace>
  /**
   * The CSS `white-space` property
   */
  textDecoration?: CSSResponsive<CSS.Property.TextDecoration>
  /**
   * The CSS `white-space` property
   */
  textShadow?: CSSResponsive<CSS.Property.TextShadow>
}

const typography = ({ theme, ...props }: ThemeCSS<TypographyProps>) =>
  css(
    responsive(theme, 'font-family', props.fontFamily),
    responsive(theme, 'font-weight', props.fontWeight),
    responsive(theme, 'font-size', props.fontSize),
    responsive(theme, 'font-style', props.fontStyle),
    responsive(theme, 'letter-spacing', props.letterSpacing),
    responsive(theme, 'line-height', props.lineHeight),
    responsive(theme, 'white-space', props.whiteSpace),
    responsive(theme, 'text-align', props.textAlign),
    responsive(theme, 'text-transform', props.textTransform),
    responsive(theme, 'text-decoration', props.textDecoration),
    responsive(theme, 'text-shadow', props.textShadow)
  )

export default typography
