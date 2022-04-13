import { matchers } from '@emotion/jest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import createToken from '../src/css-vars/create-token'
expect.extend(matchers)

const { themeWithVars } = createToken(theme, theme.config)

import { Global, LlamaProvider, theme } from '../src'

describe('ThemeSystem', () => {
  it('should render the provider', () => {
    render(
      <LlamaProvider>
        <div data-testid="provider-test">ThemeSystem</div>
      </LlamaProvider>
    )
    const received = screen.getByTestId('provider-test')
    expect(received).toBeTruthy()
  })

  it('should render the provider with custom theme', () => {
    render(
      <LlamaProvider theme={theme}>
        <div data-testid="provider-test">ThemeSystem</div>
      </LlamaProvider>
    )
    const received = screen.getByTestId('provider-test')
    expect(received).toBeTruthy()
  })

  it('should apply global styles for all elements', () => {
    render(
      <LlamaProvider theme={theme}>
        <Global />
        <div data-testid="provider-test">ThemeSystem</div>
      </LlamaProvider>
    )
    const received = screen.getByTestId('provider-test')
    expect(received).toBeTruthy()
    expect(received).toHaveStyle({
      color: (themeWithVars as any).colors.black[700],
    })
  })

  it('should apply custom global styles for all elements', () => {
    render(
      <LlamaProvider theme={theme}>
        <Global styles={() => ({ div: { background: '#ff2' } })} />
        <div data-testid="provider-test">ThemeSystem</div>
      </LlamaProvider>
    )
    const received = screen.getByTestId('provider-test')
    expect(received).toBeTruthy()
    expect(received).toHaveStyle({
      color: (themeWithVars as any).colors.black[700],
      background: '#ff2',
    })
  })

  it('should validate accessibility', async () => {
    const { container } = render(
      <LlamaProvider>
        <Global />
        <div data-testid="provider-test">ThemeSystem</div>
      </LlamaProvider>
    )
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })
})
