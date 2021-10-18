import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface SpacesProps {
  /**
   * The CSS `margin` property
   */
  m?: CSSResponsive<CSS.Property.Margin | number>
  /**
   * The CSS `margin-right` and `margin-left` property
   */
  mX?: CSSResponsive<CSS.Property.MarginRight | number>
  /**
   * The CSS `margin-top` and `margin-bottom` property
   */
  mY?: CSSResponsive<CSS.Property.MarginTop | number>
  /**
   * The CSS `margin-top` property
   */
  mTop?: CSSResponsive<CSS.Property.MarginTop | number>
  /**
   * The CSS `margin-right` property
   */
  mRight?: CSSResponsive<CSS.Property.MarginRight | number>
  /**
   * The CSS `margin-bottom` property
   */
  mBottom?: CSSResponsive<CSS.Property.MarginBottom | number>
  /**
   * The CSS `margin-left` property
   */
  mLeft?: CSSResponsive<CSS.Property.MarginLeft | number>
  /**
   * The CSS `margin` property
   */
  margin?: CSSResponsive<CSS.Property.Margin | number>
  /**
   * The CSS `margin-top` property
   */
  marginTop?: CSSResponsive<CSS.Property.MarginTop | number>
  /**
   * The CSS `margin-right` property
   */
  marginRight?: CSSResponsive<CSS.Property.MarginRight | number>
  /**
   * The CSS `margin-bottom` property
   */
  marginBottom?: CSSResponsive<CSS.Property.MarginBottom | number>
  /**
   * The CSS `margin-left` property
   */
  marginLeft?: CSSResponsive<CSS.Property.MarginLeft | number>
  /**
   * The CSS `margin-right` and `margin-left` property
   */
  marginX?: CSSResponsive<CSS.Property.MarginRight | number>
  /**
   * The CSS `margin-top` and `margin-bottom` property
   */
  marginY?: CSSResponsive<CSS.Property.MarginTop | number>
  /**
   * The CSS `padding` property
   */
  p?: CSSResponsive<CSS.Property.Padding | number>
  /**
   * The CSS `padding-left` and `padding-right` property
   */
  pX?: CSSResponsive<CSS.Property.PaddingRight | number>
  /**
   * The CSS `padding-top` and `padding-bottom` property
   */
  pY?: CSSResponsive<CSS.Property.PaddingTop | number>
  /**
   * The CSS `padding-top` property
   */
  pTop?: CSSResponsive<CSS.Property.PaddingTop | number>
  /**
   * The CSS `padding-right` property
   */
  pRight?: CSSResponsive<CSS.Property.PaddingRight | number>
  /**
   * The CSS `padding-bottom` property
   */
  pBottom?: CSSResponsive<CSS.Property.PaddingBottom | number>
  /**
   * The CSS `padding-left` property
   */
  pLeft?: CSSResponsive<CSS.Property.PaddingLeft | number>
  /**
   * The CSS `padding` property
   */
  padding?: CSSResponsive<CSS.Property.Padding | number>
  /**
   * The CSS `padding-top` property
   */
  paddingTop?: CSSResponsive<CSS.Property.PaddingTop | number>
  /**
   * The CSS `padding-right` property
   */
  paddingRight?: CSSResponsive<CSS.Property.PaddingRight | number>
  /**
   * The CSS `padding-bottom` property
   */
  paddingBottom?: CSSResponsive<CSS.Property.PaddingBottom | number>
  /**
   * The CSS `padding-left` property
   */
  paddingLeft?: CSSResponsive<CSS.Property.PaddingLeft | number>
  /**
   * The CSS `padding-left` and `padding-right` property
   */
  paddingX?: CSSResponsive<CSS.Property.PaddingRight | number>
  /**
   * The CSS `padding-top` and `padding-bottom` property
   */
  paddingY?: CSSResponsive<CSS.Property.PaddingTop | number>
  /**
   * The CSS `column-gap` property
   */
  columnGap?: CSSResponsive<CSS.Property.ColumnGap | number>
  /**
   * The CSS `row-gap` property
   */
  rowGap?: CSSResponsive<CSS.Property.RowGap | number>
  /**
   * The CSS `gap` property
   */
  gap?: CSSResponsive<CSS.Property.Gap | number>
}

const spaces = ({ theme, ...props }: ThemeCSS<SpacesProps>) =>
  css(
    responsive(theme, 'margin', props.m),
    responsive(theme, 'margin-left', props.mX),
    responsive(theme, 'margin-right', props.mX),
    responsive(theme, 'margin-top', props.mY),
    responsive(theme, 'margin-bottom', props.mY),
    responsive(theme, 'margin-left', props.marginX),
    responsive(theme, 'margin-right', props.marginX),
    responsive(theme, 'margin-top', props.marginY),
    responsive(theme, 'margin-bottom', props.marginY),
    responsive(theme, 'margin-top', props.mTop),
    responsive(theme, 'margin-bottom', props.mBottom),
    responsive(theme, 'margin-left', props.mLeft),
    responsive(theme, 'margin-right', props.mRight),
    responsive(theme, 'margin', props.margin),
    responsive(theme, 'margin-top', props.marginTop),
    responsive(theme, 'margin-bottom', props.marginBottom),
    responsive(theme, 'margin-left', props.marginLeft),
    responsive(theme, 'margin-right', props.marginRight),
    responsive(theme, 'padding', props.p),
    responsive(theme, 'padding-top', props.pTop),
    responsive(theme, 'padding-bottom', props.pBottom),
    responsive(theme, 'padding-left', props.pLeft),
    responsive(theme, 'padding-right', props.pRight),
    responsive(theme, 'padding', props.padding),
    responsive(theme, 'padding-top', props.paddingTop),
    responsive(theme, 'padding-bottom', props.paddingBottom),
    responsive(theme, 'padding-left', props.paddingLeft),
    responsive(theme, 'padding-right', props.paddingRight),
    responsive(theme, 'padding-left', props.pX),
    responsive(theme, 'padding-right', props.pX),
    responsive(theme, 'padding-top', props.pY),
    responsive(theme, 'padding-bottom', props.pY),
    responsive(theme, 'padding-left', props.paddingX),
    responsive(theme, 'padding-right', props.paddingX),
    responsive(theme, 'padding-top', props.paddingY),
    responsive(theme, 'padding-bottom', props.paddingY),
    responsive(theme, 'column-gap', props.columnGap),
    responsive(theme, 'row-gap', props.rowGap),
    responsive(theme, 'gap', props.gap)
  )

export default spaces
