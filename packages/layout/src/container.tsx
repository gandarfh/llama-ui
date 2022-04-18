import { llama, LlamaProps } from '@llama-ui/styles-system'
import { Theme, useStyle } from '@llama-ui/theme-system'
import React from 'react'

export interface ContainerProps extends LlamaProps<'main'> {
  variant?: keyof Theme['components']['Container']['variants']
  state?: keyof Theme['components']['Container']['states']
  size?: keyof Theme['components']['Container']['sizes']
}

const Container = React.forwardRef<React.ElementRef<'main'>, ContainerProps>(
  ({ children, ...rest }, ref) => {
    const { baseStyle, states, variants } = useStyle('Container')

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

export default Container
