/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { responsive } from '../src'

expect.extend(matchers)

describe('System/Responsive', () => {
  it('should return the css without responsive properties', () => {
    const background = responsive(theme, 'background', '#4DD')
    render(<div data-testid="responsive-test" css={background} />)

    const received = screen.getByTestId('responsive-test')

    expect(received).toHaveStyleRule('background', '#4DD')

    expect(received).not.toHaveStyleRule('background', '#d22', {
      media: theme.breakpoints.md,
    })
    expect(received).not.toHaveStyleRule('background', '#DD2', {
      media: theme.breakpoints.lg,
    })
  })

  it('should return the css properties with responsive using object option', () => {
    const background = responsive(theme, 'background', {
      sm: '#4DD',
      md: '#d22',
      lg: '#DD2',
      xl: '#222',
    })
    render(<div data-testid="responsive-test" css={background} />)

    const received = screen.getByTestId('responsive-test')

    expect(received).toHaveStyleRule('background', '#4DD')

    expect(received).toHaveStyleRule('background', '#d22', {
      media: theme.breakpoints.md,
    })
    expect(received).toHaveStyleRule('background', '#DD2', {
      media: theme.breakpoints.lg,
    })
    expect(received).toHaveStyleRule('background', '#222', {
      media: theme.breakpoints.xl,
    })
  })

  it('should throw if pass more than breakpoints created', () => {
    expect(() =>
      responsive(theme, 'background', [
        '#f22',
        '#ff2',
        '#123',
        '#321',
        '#524',
        '#524',
      ])
    ).toThrow()
  })
})
