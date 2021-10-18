/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { LlamaProvider, theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { llama } from '../src'

expect.extend(matchers)

describe('System/System', () => {
  it('should create a component with llama', () => {
    render(
      <llama.div
        w="100px"
        h="100px"
        bg="#dd2"
        radius="50px"
        data-testid="llama-test"
      />
    )

    const received = screen.getByTestId('llama-test')

    expect(received).toHaveStyleRule('width', '100px')
    expect(received).toHaveStyleRule('height', '100px')
    expect(received).toHaveStyleRule('border-radius', '50px')
    expect(received).toHaveStyleRule('background', '#dd2')
  })

  it('should colored with black.500 and black.50', () => {
    render(
      <LlamaProvider>
        <llama.div bgColor="black.50" data-testid="black-50-test" />
        <llama.div bgColor="black.500" data-testid="black-500-test" />
      </LlamaProvider>
    )

    const received50 = screen.getByTestId('black-50-test')
    const received500 = screen.getByTestId('black-500-test')

    expect(received50).toHaveStyleRule(
      'background-color',
      theme.colors.black[50]
    )
    expect(received500).toHaveStyleRule(
      'background-color',
      theme.colors.black[500]
    )
  })

  it('should change to another html element when use `as` property', () => {
    render(<llama.div as="span" data-testid="another-element-test" />)

    const received = screen.getByTestId('another-element-test')

    expect(received.tagName).toBe('SPAN')
  })
  it('should change the color theme any where on property', () => {
    render(
      <llama.div
        boxShadow="inset 0px 4px 8px 1px black.400"
        data-testid="any-property-test"
      />
    )

    const received = screen.getByTestId('any-property-test')

    expect(received).toHaveStyleRule(
      'box-shadow',
      `inset 0px 4px 8px 1px ${theme.colors.black[400]}`
    )
  })

  it('should use llama without llama provider', () => {
    render(
      <llama.div
        boxShadow="inset 0px 4px 8px 1px primary.400"
        data-testid="any-property-test"
      />
    )

    const received = screen.getByTestId('any-property-test')

    expect(received).toHaveStyleRule(
      'box-shadow',
      `inset 0px 4px 8px 1px ${theme.colors.primary[400]}`
    )
  })

  it('should render a svg element', () => {
    render(
      <llama.svg data-testid="svg-test">
        <llama.path data-testid="path-test">asda</llama.path>
      </llama.svg>
    )

    const received = screen.getByTestId('svg-test')

    expect(received).toBeTruthy()
  })
})
