import { css, CSSObject, Global, Theme } from '@emotion/react'
import React from 'react'

interface GlobalStylesPRops {
  styles?: (theme: Theme) => CSSObject
}

const GlobalStyles = ({ styles }: GlobalStylesPRops) => (
  <Global
    styles={(theme) => css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');

      body {
        font-family: ${theme.fonts.family.body};
        transition: background 0.5s;
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.primary[50]};
        color: ${theme.colors.black[700]};
        font-size: ${theme.fonts.sizes.xs};
        font-weight: ${theme.fonts.weights.regular};
      }
      :is(h1, h2, h3, h4, h5, h6) {
        font-family: ${theme.fonts.family.heading};
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
