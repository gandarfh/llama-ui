import { llama, LlamaProps } from '@llama-ui/styles-system'
import React from 'react'

export interface GridProps extends LlamaProps<'div'> {}

const Grid = React.forwardRef<React.ElementRef<'div'>, GridProps>(
  ({ children, ...rest }, ref) => {
    return (
      <llama.div d="grid" w="100%" ref={ref} {...rest}>
        {children}
      </llama.div>
    )
  }
)

export default Grid
