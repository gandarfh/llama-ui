/* eslint-disable @typescript-eslint/no-namespace */
import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

type TransformProperties =
  | 'rotate()'
  | 'rotateX()'
  | 'rotateY()'
  | 'scale()'
  | 'scaleX()'
  | 'scaleY()'
  | 'matrix()'
  | 'translate()'
  | 'translateX()'
  | 'translateY()'
  | 'perspective()'

export interface TransformsProps {
  /**
   * The CSS `transform` property
   */
  transform?: CSSResponsive<CSS.Property.Transform | TransformProperties>
  /**
   * The CSS `transition` property
   */
  transition?: CSSResponsive<CSS.Property.Transition>
  /**
   * The CSS `transition-delay` property
   */
  transitionDelay?: CSSResponsive<CSS.Property.TransitionDelay>
  /**
   * The CSS `transform: transition-property` property
   */
  transitionProperty?: CSSResponsive<CSS.Property.TransitionProperty>
  /**
   * The CSS `transform: transition-duration` property
   */
  transitionDuration?: CSSResponsive<CSS.Property.TransitionDuration>
}

const transforms = ({ theme, ...props }: ThemeCSS<TransformsProps>) =>
  css(
    responsive(theme, 'transform', props.transform),
    responsive(theme, 'transition', props.transition),
    responsive(theme, 'transition-delay', props.transitionDelay),
    responsive(theme, 'transition-property', props.transitionProperty),
    responsive(theme, 'transition-duration', props.transitionDuration)
  )

export default transforms
