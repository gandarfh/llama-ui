import { llama, LlamaProps } from '@llama-ui/styles-system'
import React from 'react'

export interface FlexProps extends LlamaProps<'div'> {
  direction?: FlexProps['flexDirection']
}

const Flex = React.forwardRef<React.ElementRef<'div'>, FlexProps>(
  ({ children, ...rest }, ref) => {
    return (
      <llama.div
        alignItems="flex-start"
        justifyContent="flex-start"
        d="flex"
        w="100%"
        flex={1}
        ref={ref}
        {...rest}
      >
        {children}
      </llama.div>
    )
  }
)

export default Flex
