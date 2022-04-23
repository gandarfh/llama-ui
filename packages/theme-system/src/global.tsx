import { css, Global } from '@emotion/react'
import React from 'react'

const GlobalStyles = () => (
  <Global
    styles={(theme) =>
      css(
        `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');` as any,
        theme.global(theme) as any
      )
    }
  />
)

export default GlobalStyles
