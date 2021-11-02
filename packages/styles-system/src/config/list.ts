import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from '.'

export interface ListProps {
  /**
   * The CSS `list-style` property
   */
  listStyle?: CSSResponsive<CSS.Property.ListStyle>
  /**
   * The CSS `list-style` property
   */
  listStyleImage?: CSSResponsive<CSS.Property.ListStyleImage>
  /**
   * The CSS `list-style` property
   */
  listStylePosition?: CSSResponsive<CSS.Property.ListStylePosition>
  /**
   * The CSS `list-style` property
   */
  listStyleType?: CSSResponsive<CSS.Property.ListStyleType>
}

const list = ({ theme, ...props }: ThemeCSS<ListProps>) =>
  css(
    responsive(theme, 'list-style', props.listStyle),
    responsive(theme, 'list-style-image', props.listStyleImage),
    responsive(theme, 'list-style-position', props.listStylePosition),
    responsive(theme, 'list-style-type', props.listStyleType)
  )

export default list
