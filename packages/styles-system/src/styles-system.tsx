import { LlamaProvider } from '@llama-ui/theme-system'
import React from 'react'

import { llama } from '.'

export interface StylesSystemProps {
  children?: React.ReactNode
}

const StylesSystem: (props: StylesSystemProps) => JSX.Element = ({
  children,
  ...rest
}) => {
  const ref = React.useRef(null)

  return (
    <LlamaProvider>
      <llama.div
        ref={ref}
        bg="primary.700/5"
        border="1px solid primary.800"
        mx={0}
        {...rest}
      >
        {children}
      </llama.div>
    </LlamaProvider>
  )
}

export default StylesSystem
