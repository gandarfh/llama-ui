import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface LayoutProps {
  /**
   * The CSS `display` property
   */
  d?: CSSResponsive<CSS.Property.Display>
  /**
   * The CSS `display` property
   */
  display?: CSSResponsive<CSS.Property.Display>
  /**
   * The CSS `width` property
   */
  w?: CSSResponsive<CSS.Property.Width | number>
  /**
   * The CSS `width` property
   */
  width?: CSSResponsive<CSS.Property.Width | number>
  /**
   * The CSS `min-width` property
   */
  minW?: CSSResponsive<CSS.Property.MinWidth | number>
  /**
   * The CSS `min-width` property
   */
  minWidth?: CSSResponsive<CSS.Property.MinWidth | number>
  /**
   * The CSS `max-width` property
   */
  maxW?: CSSResponsive<CSS.Property.MaxWidth | number>
  /**
   * The CSS `max-width` property
   */
  maxWidth?: CSSResponsive<CSS.Property.MaxWidth | number>
  /**
   * The CSS `height` property
   */
  h?: CSSResponsive<CSS.Property.Height | number>
  /**
   * The CSS `height` property
   */
  height?: CSSResponsive<CSS.Property.Height | number>
  /**
   * The CSS `min-height` property
   */
  minH?: CSSResponsive<CSS.Property.MinHeight | number>
  /**
   * The CSS `min-height` property
   */
  minHeight?: CSSResponsive<CSS.Property.MinHeight | number>
  /**
   * The CSS `max-height` property
   */
  maxH?: CSSResponsive<CSS.Property.MaxHeight | number>
  /**
   * The CSS `max-height` property
   */
  maxHeight?: CSSResponsive<CSS.Property.MaxHeight | number>
  /**
   * The CSS `overflow` property
   */
  overflow?: CSSResponsive<CSS.Property.Overflow>
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: CSSResponsive<CSS.Property.OverflowX>
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: CSSResponsive<CSS.Property.OverflowY>
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: CSSResponsive<CSS.Property.VerticalAlign>
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: CSSResponsive<CSS.Property.BoxSizing>
  /**
   * The CSS `object-fit` property
   */
  objectFit?: CSSResponsive<CSS.Property.ObjectFit>
  /**
   * The CSS `object-position` property
   */
  objectPosition?: CSSResponsive<CSS.Property.ObjectPosition>
  /**
   * The CSS `box-shadow` property
   */
  boxShadow?: CSSResponsive<CSS.Property.BoxShadow>
  /**
   * The CSS `box-shadow` property
   */
  shadow?: CSSResponsive<CSS.Property.BoxShadow>
}

const layout = ({ theme, ...props }: ThemeCSS<LayoutProps>) =>
  css(
    responsive(theme, 'display', props.d),
    responsive(theme, 'width', props.w),
    responsive(theme, 'min-width', props.minW),
    responsive(theme, 'max-width', props.maxW),
    responsive(theme, 'height', props.h),
    responsive(theme, 'height', props.height),
    responsive(theme, 'min-height', props.minH),
    responsive(theme, 'max-height', props.maxH),
    responsive(theme, 'display', props.display),
    responsive(theme, 'width', props.width),
    responsive(theme, 'min-width', props.minWidth),
    responsive(theme, 'max-width', props.maxWidth),
    responsive(theme, 'overflow', props.overflow),
    responsive(theme, 'overflow-x', props.overflowX),
    responsive(theme, 'overflow-y', props.overflowY),
    responsive(theme, 'vertical-align', props.verticalAlign),
    responsive(theme, 'box-sizing', props.boxSizing),
    responsive(theme, 'object-fit', props.objectFit),
    responsive(theme, 'box-shadow', props.boxShadow),
    responsive(theme, 'box-shadow', props.shadow)
  )

export default layout
