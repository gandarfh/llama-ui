import { llama, LlamaProps, propsToResponsive } from '@llama-ui/styles-system'
import { CSSResponsive } from '@llama-ui/styles-system/lib/type/theme'
import { Theme, useStyle } from '@llama-ui/theme-system'
import React from 'react'

export interface GridProps extends LlamaProps<'div'> {
  variant?: keyof Theme['components']['Grid']['variants']
  state?: keyof Theme['components']['Grid']['states']
  size?: keyof Theme['components']['Grid']['sizes']
  cols?: CSSResponsive<number | string>
}

const Grid = React.forwardRef<React.ElementRef<'div'>, GridProps>(
  ({ children, cols, ...rest }, ref) => {
    const { baseStyle, states, variants } = useStyle('Grid')

    return (
      <llama.div
        ref={ref}
        {...baseStyle}
        {...(rest.variant && variants[rest.variant])}
        {...(rest.state && states[rest.state])}
        columns={propsToResponsive(cols, 'repeat({{ value }}, 1fr)')}
        {...rest}
      >
        {children}
      </llama.div>
    )
  }
)

export default Grid
