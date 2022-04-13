import { StylesProps } from '@llama-ui/styles-system'

import { useTheme } from '.'

export type ComponentBaseType = {
  baseStyle?: StylesProps
  state?: Record<string, StylesProps>
  variants?: Record<string, StylesProps>
}

export const useStyle = () => {
  return useTheme()
}
