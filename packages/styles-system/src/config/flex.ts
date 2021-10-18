import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface FlexProps {
  /**
   * The CSS `flex-wrap` property
   */
  flexWrap?: CSSResponsive<CSS.Property.FlexWrap>
  /**
   * The CSS `flex-direction` property
   */
  flexDirection?: CSSResponsive<CSS.Property.FlexDirection>
  /**
   * The CSS `flex` property
   */
  flex?: CSSResponsive<CSS.Property.Flex>
  /**
   * The CSS `flex-flow` property
   */
  flexFlow?: CSSResponsive<CSS.Property.FlexFlow>
  /**
   * The CSS `flex-grow` property
   */
  flexGrow?: CSSResponsive<CSS.Property.FlexGrow>
  /**
   * The CSS `flex-shrink` property
   */
  flexShrink?: CSSResponsive<CSS.Property.FlexShrink>
  /**
   * The CSS `flex-basis` property
   */
  flexBasis?: CSSResponsive<CSS.Property.FlexBasis>
  /**
   * The CSS `order` property
   */
  order?: CSSResponsive<CSS.Property.Order>
}

const flex = ({ theme, ...props }: ThemeCSS<FlexProps>) =>
  css(
    responsive(theme, 'flex', props.flex),
    responsive(theme, 'flex-basis', props.flexBasis),
    responsive(theme, 'flex-direction', props.flexDirection),
    responsive(theme, 'flex-flow', props.flexFlow),
    responsive(theme, 'flex-grow', props.flexGrow),
    responsive(theme, 'flex-shrink', props.flexShrink),
    responsive(theme, 'flex-wrap', props.flexWrap),
    responsive(theme, 'order', props.order)
  )

export default flex
