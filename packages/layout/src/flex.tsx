import { llama, LlamaProps } from '@llama-ui/styles-system'
import { Theme, useStyle } from '@llama-ui/theme-system'
import React from 'react'

export interface FlexProps extends LlamaProps<'div'> {
  variant?: keyof Theme['components']['Flex']['variants']
  state?: keyof Theme['components']['Flex']['states']
  size?: keyof Theme['components']['Flex']['sizes']
  direction?: FlexProps['flexDirection']
}

const Flex = React.forwardRef<React.ElementRef<'div'>, FlexProps>(
  ({ children, ...rest }, ref) => {
    const { baseStyle, states, variants } = useStyle('Flex')

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

export default Flex
