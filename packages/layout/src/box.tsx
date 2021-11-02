import { llama, LlamaProps } from '@llama-ui/styles-system'
import React from 'react'

export interface BoxProps extends LlamaProps<'div'> {}

const Box = React.forwardRef<React.ElementRef<'div'>, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <llama.div w="100%" ref={ref} {...rest}>
        {children}
      </llama.div>
    )
  }
)

export default Box
