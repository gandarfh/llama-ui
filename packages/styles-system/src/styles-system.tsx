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

  // const Tag = ({ children }: any) =>
  //   React.createElement('div', { ref }, children)

  return (
    <llama.div ref={ref} border="1px solid primary.800" {...rest}>
      {/* <Tag>asasdassd</Tag> */}
      {children}
    </llama.div>
  )
}

export default StylesSystem
