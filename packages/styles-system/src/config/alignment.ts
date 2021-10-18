import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface AlignmentProps {
  /**
   * The CSS `align-items` property
   */
  alignItems?: CSSResponsive<CSS.Property.AlignItems>
  /**
   * The CSS `align-content` property
   */
  alignContent?: CSSResponsive<CSS.Property.AlignContent>
  /**
   * The CSS `align-self` property
   */
  alignSelf?: CSSResponsive<CSS.Property.AlignSelf>
  /**
   * The CSS `justify-items` property
   */
  justifyItems?: CSSResponsive<CSS.Property.JustifyItems>
  /**
   * The CSS `justify-content` property
   */
  justifyContent?: CSSResponsive<CSS.Property.JustifyContent>
  /**
   * The CSS `justify-self` property
   */
  justifySelf?: CSSResponsive<CSS.Property.JustifySelf>
  /**
   * The CSS `place-items` property
   */
  placeItems?: CSSResponsive<CSS.Property.PlaceItems>
  /**
   * The CSS `place-content` property
   */
  placeContent?: CSSResponsive<CSS.Property.PlaceContent>
  /**
   * The CSS `place-self` property
   */
  placeSelf?: CSSResponsive<CSS.Property.PlaceSelf>
}

const alignment = ({ theme, ...props }: ThemeCSS<AlignmentProps>) =>
  css(
    responsive(theme, 'align-items', props.alignItems),
    responsive(theme, 'align-content', props.alignContent),
    responsive(theme, 'align-self', props.alignSelf),
    responsive(theme, 'justify-items', props.justifyItems),
    responsive(theme, 'justify-content', props.justifyContent),
    responsive(theme, 'justify-self', props.justifySelf),
    responsive(theme, 'place-items', props.placeItems),
    responsive(theme, 'place-content', props.placeContent),
    responsive(theme, 'place-self', props.placeSelf)
  )

export default alignment
