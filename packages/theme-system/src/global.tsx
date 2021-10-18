import { css, CSSObject, Global, Theme } from '@emotion/react'
import React from 'react'

interface GlobalStylesPRops {
  styles?: (theme: Theme) => CSSObject
}

const GlobalStyles = ({ styles }: GlobalStylesPRops) => (
  <Global
    styles={(theme) => css`
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
      body {
        font-family: ${theme.fonts.family};
        transition: background 0.5s;
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.primary[50]};
        color: ${theme.colors.black[700]};
        font-size: ${theme.fonts.sizes.xs};
        font-weight: ${theme.fonts.weights.regular};
      }
      * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        color: ${theme.colors.black[700]};
        margin: 0;
        padding: 0;
      }
      ${styles && styles(theme)}
    `}
  />
)

export default GlobalStyles
