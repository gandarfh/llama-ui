import { llama, LlamaProps } from '@llama-ui/styles-system'
import { Theme, useStyle } from '@llama-ui/theme-system'
import React from 'react'

export interface BoxProps extends LlamaProps<'div'> {
  variant?: keyof Theme['components']['Box']['variants']
  state?: keyof Theme['components']['Box']['states']
  size?: keyof Theme['components']['Box']['sizes']
}

const Box = React.forwardRef<React.ElementRef<'div'>, BoxProps>(
  ({ children, ...rest }, ref) => {
    const { baseStyle, states, variants } = useStyle('Box')

    return (
      <llama.div
        ref={ref}
        {...baseStyle}
        {...(rest.variant && variants[rest.variant])}
        {...(rest.state && states[rest.state])}
        {...rest}
      >
        {children}
      </llama.div>
    )
  }
)

export default Box
