import { llama, LlamaProps } from '@llama-ui/styles-system'
import React from 'react'

export interface ContainerProps extends LlamaProps<'main'> {}

const Container = React.forwardRef<React.ElementRef<'main'>, ContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <llama.main
        ref={ref}
        w="100%"
        d="flex"
        flex={1}
        pX="1rem"
        mX="auto"
        flexDirection="column"
        maxW={['calc(100% - 20px)', 'calc(100% - 40px)', '900px', '1200px']}
        {...rest}
      >
        {children}
      </llama.main>
    )
  }
)

export default Container
