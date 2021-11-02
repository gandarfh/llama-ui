import { css, SerializedStyles } from '@emotion/react'

import { StylesConfigProps, StylesProps } from '../type/styles'
export type { StylesConfigProps, StylesProps } from '../type/styles'
import { ThemeCSS } from '../type/theme'
import * as config from '.'
import pseudos from './pseudos'

export const stylesConfig = (props: ThemeCSS<StylesConfigProps>) =>
  css(
    config.background(props),
    config.border(props),
    config.color(props),
    config.alignment(props),
    config.flex(props),
    config.grid(props),
    config.interactions(props),
    config.layout(props),
    config.positions(props),
    config.spaces(props),
    config.typography(props),
    config.transforms(props),
    config.list(props)
  )

const styles = (props: ThemeCSS<StylesProps>): SerializedStyles =>
  css(pseudos(props), stylesConfig(props))

export default styles
