import { css } from '@emotion/react'
import * as CSS from 'csstype'

import { CSSResponsive, ThemeCSS } from '../type/theme'
import { responsive } from './'

export interface GridProps {
  /**
   * The CSS `grid-template-columns` property
   */
  columns?: CSSResponsive<CSS.Property.GridTemplateColumns>
  /**
   * The CSS `grid-template-columns` property
   */
  gridTemplateColumns?: CSSResponsive<CSS.Property.GridTemplateColumns>
  /**
   * The CSS `grid-template-rows` property
   */
  rows?: CSSResponsive<CSS.Property.GridTemplateRows>
  /**
   * The CSS `grid-template-rows` property
   */
  gridTemplateRows?: CSSResponsive<CSS.Property.GridTemplateRows>
  /**
   * The CSS `grid-template-areas` property
   */
  gridTemplateAreas?: CSSResponsive<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-area` property
   */
  gridArea?: CSSResponsive<CSS.Property.GridArea>
  /**
   * The CSS `grid-auto-rows` property
   */
  gridAutoRows?: CSSResponsive<CSS.Property.GridAutoRows>
  /**
   * The CSS `grid-auto-columns` property
   */
  gridAutoColumns?: CSSResponsive<CSS.Property.GridAutoColumns>
  /**
   * The CSS `grid-row-start` property
   */
  gridRowStart?: CSSResponsive<CSS.Property.GridRowStart>
  /**
   * The CSS `grid-row-end` property
   */
  gridRowEnd?: CSSResponsive<CSS.Property.GridRowEnd>
  /**
   * The CSS `grid-column-start` property
   */
  gridColumnStart?: CSSResponsive<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-column-end` property
   */
  gridColumnEnd?: CSSResponsive<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column` property
   */
  gridColumn?: CSSResponsive<CSS.Property.GridColumn>
  /**
   * The CSS `grid-row` property
   */
  gridRow?: CSSResponsive<CSS.Property.GridRow>
}

const grid = ({ theme, ...props }: ThemeCSS<GridProps>) =>
  css(
    responsive(theme, 'grid-template-columns', props.columns),
    responsive(theme, 'grid-template-rows', props.rows),
    responsive(theme, 'grid-template-columns', props.gridTemplateColumns),
    responsive(theme, 'grid-template-rows', props.gridTemplateRows),
    responsive(theme, 'grid-template-areas', props.gridTemplateAreas),
    responsive(theme, 'grid-area', props.gridArea),
    responsive(theme, 'grid-auto-rows', props.gridAutoRows),
    responsive(theme, 'grid-auto-columns', props.gridAutoColumns),
    responsive(theme, 'grid-row-start', props.gridRowStart),
    responsive(theme, 'grid-row-end', props.gridRowEnd),
    responsive(theme, 'grid-column-end', props.gridColumnEnd),
    responsive(theme, 'grid-column-start', props.gridColumnStart),
    responsive(theme, 'grid-column', props.gridColumn),
    responsive(theme, 'grid-row', props.gridRow)
  )

export default grid
