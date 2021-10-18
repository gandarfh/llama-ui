/**
 * Copied from isValidProps '@emotion/is-prop-valid'
 * Thank you very much for this lines.
 */

import memoize from '@emotion/memoize'

import { LlamaProps } from '../llama'
import { svgTags, TagType } from '../tags'
import { htmlValidProps, svgValidProps } from './props'

const htmlPropsRegex = new RegExp(
  `^((${Object.keys(htmlValidProps).join('|')})|data-.*|on.*|aria-.*)$`
)

const svgPropsRegex = new RegExp(
  `^((${Object.keys(svgValidProps).join('|')})|data-.*|on.*|aria-.*)$`
)

const svgTagsRegex = new RegExp(`^((${svgTags.join('|')}))$`)

const isSvgTag = memoize((prop) => svgTagsRegex.test(prop))
const isSvgPropsValid = memoize((prop) => svgPropsRegex.test(prop))
const isHtmlPropValid = memoize((prop) => htmlPropsRegex.test(prop))

const getDomProps = (element: TagType, props: LlamaProps<typeof element>) => {
  const stylesProps = {}
  const domProps = {}
  const keyProps = Object.keys(props)

  const getValidProps = (isValid: boolean, prop: string) => {
    if (!isValid) return (stylesProps[prop] = props[prop])

    return (domProps[prop] = props[prop])
  }

  if (isSvgTag(element)) {
    keyProps.forEach((prop) => {
      const isValid = isSvgPropsValid(prop)

      return getValidProps(isValid, prop)
    })

    return { stylesProps, domProps }
  }

  keyProps.forEach((prop) => {
    const isValid = isHtmlPropValid(prop)

    return getValidProps(isValid, prop)
  })

  return { stylesProps, domProps }
}

export default getDomProps
