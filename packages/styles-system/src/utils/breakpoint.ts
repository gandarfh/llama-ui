import { Theme } from '@emotion/react'

const breakpoint = (breakpoint: string, theme: Theme) => {
  const size = theme.breakpoints[breakpoint]

  return `@media screen and (min-width: ${size})`
}

export default breakpoint
