import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { theme as defaultTheme } from '@llama-ui/theme-system'
import lodash from 'lodash'
import React from 'react'

import { styles, StylesProps } from '.'
import { tags, TagType } from './tags'
import getDomProps from './utils/get-dom-props'

export type HTMLLlama<Element> = Omit<
  React.AllHTMLAttributes<Element>,
  keyof StylesProps
>

export type LlamaElements = TagType

type ReactRef = {
  ref?: React.Ref<HTMLElement | SVGElement> | null
}

export type LlamaProps<T> = StylesProps & HTMLLlama<T> & ReactRef
export type LlamaComponent<T> = (props: LlamaProps<T>) => JSX.Element

export type LlamaFactoryElement = {
  [tag in LlamaElements]: LlamaComponent<tag>
}

/**
 * > The llamaFactory work to create llama elements with styled props.
 *
 * exemple:
 * ```tsx
 *  const ComponentDiv = llamaFactory('div')
 *
 *  const App = () => {
 *   return (
 *    <ComponentDiv bg="primary.400">...something</ComponentDiv>
 *   )
 *  }
 * ```
 */
const llamaFactory = (element: LlamaElements) => {
  return (props: LlamaProps<typeof element>) => {
    // get all valid dom properties.
    const { domProps } = getDomProps(element, props)

    // get theme from provider to use with styled props.
    let theme = useTheme()

    // If dont have theme will be pass a default theme
    if (lodash.isEmpty(theme)) {
      theme = defaultTheme
    }

    const classe = styles({ theme, ...props })

    classe.name = `llama-${classe.name}`

    // valid if have property `as`, this property will change the dom element selected my element argument.
    if (props?.as) {
      return React.createElement(props?.as, {
        ...domProps,
        className: css(classe),
      })
    }

    return React.createElement(element, { ...domProps, className: css(classe) })
  }
}

/**
 * llama object is a abstraction of llamaFactory to use syntax friendly.
 *
 * This factory have a lot of properties to use, check the documentation to more details.
 *
 * This line has creating this object.
 * llama = {
 *  div: llamaFactory('div'),
 *  ...
 * }
 *
 * exemple:
 * ```tsx
 *  const ComponentDiv = llama.div
 *
 *  const App = () => {
 *   return (
 *    <>
 *      <ComponentDiv bg="primary.400">something...</ComponentDiv>
 *      // or
 *      <llama.div bg="secondary.400">...another way</llama.div>
 *    </>
 *   )
 *  }
 * ```
 */
const llama = {} as LlamaFactoryElement

tags.forEach((tag) => {
  return (llama[tag] = llamaFactory(tag))
})

export default llama
