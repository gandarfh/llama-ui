import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { Colors, CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from './'

export interface BackgroundProps {
  /**
   * The CSS `background` property
   */
  bg?: CSSResponsive<CSS.Property.BackgroundColor | Colors>
  /**
   * The CSS `background` property
   */
  background?: CSSResponsive<CSS.Property.BackgroundColor | Colors>
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: CSSResponsive<CSS.Property.BackgroundColor | Colors>
  /**
   * The CSS `background-color` property
   */
  bgColor?: CSSResponsive<CSS.Property.BackgroundColor | Colors>
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: CSSResponsive<CSS.Property.BackgroundImage>
  /**
   * The CSS `background-image` property
   */
  bgImage?: CSSResponsive<CSS.Property.BackgroundImage>
  /**
   * The CSS `background-image` property
   */
  bgGradient?: CSSResponsive<CSS.Property.BackgroundImage>
  /**
   * The CSS `background-position` property
   */
  bgPosition?: CSSResponsive<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: CSSResponsive<CSS.Property.BackgroundPosition>
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: CSSResponsive<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: CSSResponsive<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: CSSResponsive<CSS.Property.BackgroundSize>
  /**
   * The CSS `background-size` property
   */
  bgSize?: CSSResponsive<CSS.Property.BackgroundSize>
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: CSSResponsive<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: CSSResponsive<CSS.Property.BackgroundAttachment>
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: CSSResponsive<CSS.Property.BackgroundClip>
  /**
   * The CSS `background-clip` property
   */
  bgClip?: CSSResponsive<CSS.Property.BackgroundClip>
}

const background = ({ theme, ...props }: ThemeCSS<BackgroundProps>) =>
  css(
    responsive(theme, 'background', props.bg),
    responsive(theme, 'background-color', props.bgColor),
    responsive(theme, 'background-image', props.bgImage),
    responsive(theme, 'background-image', props.bgGradient),
    responsive(theme, 'background-position', props.bgPosition),
    responsive(theme, 'background-repeat', props.bgRepeat),
    responsive(theme, 'background-size', props.bgSize),
    responsive(theme, 'background-attachment', props.bgAttachment),
    responsive(theme, 'background-clip', props.bgClip),
    responsive(theme, 'background', props.background),
    responsive(theme, 'background-color', props.backgroundColor),
    responsive(theme, 'background-image', props.backgroundImage),
    responsive(theme, 'background-position', props.backgroundPosition),
    responsive(theme, 'background-repeat', props.backgroundRepeat),
    responsive(theme, 'background-size', props.backgroundSize),
    responsive(theme, 'background-attachment', props.backgroundAttachment),
    responsive(theme, 'background-clip', props.backgroundClip)
  )

export default background
