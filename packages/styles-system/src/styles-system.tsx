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
    <llama.div
      bg="primary.700/5"
      ref={ref}
      border="1px solid primary.800"
      mx={0}
      {...rest}
    >
      {children}
    </llama.div>
  )
}

export default StylesSystem
