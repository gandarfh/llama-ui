import React from 'react'

import { llama } from '.'

export interface StylesSystemProps {
  children?: React.ReactNode
}

const StylesSystem: (props: StylesSystemProps) => JSX.Element = ({
  children,
  ...rest
}) => {
  return (
    <llama.div border="1px solid primary.800" fontSize={16} {...rest}>
      {children}
    </llama.div>
  )
}

export default StylesSystem
