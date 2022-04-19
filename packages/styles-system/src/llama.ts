import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { theme as defaultTheme } from '@llama-ui/theme-system'
import lodash from 'lodash'
import React from 'react'

import { styles, StylesProps } from '.'
import { tags } from './tags'
import getDomProps from './utils/get-dom-props'

export type Elements = keyof JSX.IntrinsicElements

export type ElementsAttributes<T extends Elements> = JSX.IntrinsicElements[T]

export type HTMLLlama<T extends Elements> = Omit<
  ElementsAttributes<T>,
  keyof StylesProps
>

type ReactRef = {
  ref?: React.Ref<HTMLElement | SVGElement> | null | any
}

export type LlamaProps<T extends Elements> = StylesProps &
  HTMLLlama<T> &
  ReactRef & {
    as?: Elements
  }
export type LlamaComponent<T extends Elements> = (
  props: LlamaProps<T>
) => JSX.Element
export type LlamaFactoryElement = {
  [tag in Elements]: LlamaComponent<tag>
}

/**
 * > The llamaFactory work to create llama elements with styled props.
 *
 * exemple:
 * ```tsx
 *  const Div = llamaFactory('div')
 *
 *  const App = () => {
 *   return (
 *    <Div bg="primary.400">...something</Div>
 *   )
 *  }
 * ```
 */
const llamaFactory = <T extends Elements>(element: T) => {
  const component = React.forwardRef<any, LlamaProps<T>>((props, ref) => {
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
      return React.createElement(
        props?.as as string,
        {
          ...domProps,
          ref,
          className: css(classe),
        },
        props.children
      )
    }

    return React.createElement(
      element,
      {
        ...domProps,
        ref,
        className: css(classe),
      },
      props.children
    )
  })

  component.displayName = `llama.${String(element)}`
  return component
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
const llama = {}

tags.forEach((tag) => {
  return (llama[tag] = llamaFactory(tag))
})

export default llama as LlamaFactoryElement
