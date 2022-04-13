import { css, Theme } from '@emotion/react'
import lodash from 'lodash'

import { stylesConfig } from '../config'
import { StylesConfigProps } from '../type/styles'

export interface PseudosProps {
  /**
   * Pseudo selector `:after` css
   */
  _after?: StylesConfigProps
  /**
   * Pseudo selector `:before` css
   */
  _before?: StylesConfigProps
  /**
   * Pseudo selector `:placeholder` css
   */
  _placeholder?: StylesConfigProps
  /**
   * Pseudo selector `:active` css
   */
  _active?: StylesConfigProps
  /**
   * Pseudo selector `:checked` css
   */
  _checked?: StylesConfigProps
  /**
   * Pseudo selector `:disabled` css
   */
  _disabled?: StylesConfigProps
  /**
   * Pseudo selector `:first` css
   */
  _first?: StylesConfigProps
  /**
   * Pseudo selector `:first-letter`  css
   */
  _firstLetter?: StylesConfigProps
  /**
   * Pseudo selector `:first-of-type` css
   */
  _firstOfType?: StylesConfigProps
  /**
   * Pseudo selector `:focus` css
   */
  _focus?: StylesConfigProps
  /**
   * Pseudo selector `:focus-within` css
   */
  _focusWithin?: Record<string, StylesConfigProps>
  /**
   * Pseudo selector `:hover` css
   */
  _hover?: StylesConfigProps
  /**
   * Pseudo selector `:indeterminate` css
   */
  _indeterminate?: StylesConfigProps
  /**
   * Pseudo selector `:last-of-type` css
   */
  _lastOfType?: StylesConfigProps
  /**
   * Pseudo selector `:required` css
   */
  _required?: StylesConfigProps
}

const createPseudo = (
  pseudo: string,
  theme: Theme,
  props?: StylesConfigProps
) => {
  if (lodash.isEmpty(props)) return

  return css({ [pseudo]: stylesConfig({ theme, ...props }) })
}

const createFocusWithin = (
  pseudo: string,
  theme: Theme,
  props?: Record<string, StylesConfigProps>
) => {
  if (lodash.isEmpty(props)) return

  const elements = Object.keys(props!)

  const style = elements.reduce((acc, current) => {
    return {
      acc,
      [current]: stylesConfig({ theme, ...props![current] }),
    }
  }, {})

  return css({ [pseudo]: style })
}

const pseudos = (theme: Theme, props: PseudosProps) =>
  css(
    createPseudo('::after', theme, props?._after),
    createPseudo('::before', theme, props?._before),
    createPseudo('::placeholder', theme, props?._placeholder),
    createPseudo(':active', theme, props?._active),
    createPseudo(':checked', theme, props?._checked),
    createPseudo(':disabled', theme, props?._disabled),
    createPseudo(':first-of-type', theme, props?._firstOfType),
    createPseudo(':focus', theme, props?._focus),
    createFocusWithin(':focus-within', theme, props?._focusWithin),
    createPseudo(':hover', theme, props?._hover),
    createPseudo(':indeterminate', theme, props?._indeterminate),
    createPseudo(':last-of-type', theme, props?._lastOfType),
    createPseudo(':required', theme, props?._required)
  )

export default pseudos
