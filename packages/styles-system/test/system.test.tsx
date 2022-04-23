/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { LlamaProvider, theme } from '@llama-ui/theme-system'
import createToken from '@llama-ui/theme-system/lib/css-vars/create-token'
import { render, screen } from '@testing-library/react'

import { llama } from '../src'

expect.extend(matchers)
const { fonts, colors, config } = theme
const { tokensWithVars, cssVars } = createToken({ fonts, colors }, config)

const customRender = (component: JSX.Element) =>
  render(<LlamaProvider>{component}</LlamaProvider>)

describe('System/System', () => {
  it('should create a component with llama', () => {
    customRender(
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
    customRender(
      <LlamaProvider>
        <llama.div bgColor="black.50" data-testid="black-50-test" />
        <llama.div bgColor="black.500" data-testid="black-500-test" />
      </LlamaProvider>
    )

    const received50 = screen.getByTestId('black-50-test')
    const received500 = screen.getByTestId('black-500-test')

    expect(received50).toHaveStyleRule(
      'background-color',
      tokensWithVars.colors.black[50]
    )
    expect(received500).toHaveStyleRule(
      'background-color',
      tokensWithVars.colors.black[500]
    )
  })

  it('should change to another html element when use `as` property', () => {
    customRender(<llama.div as="span" data-testid="another-element-test" />)

    const received = screen.getByTestId('another-element-test')

    expect(received.tagName).toBe('SPAN')
  })

  it('should use llama without llama provider', () => {
    customRender(
      <llama.div
        shadow="inset 0px 4px 8px 1px black.400"
        data-testid="shadow-test"
      />
    )

    const received = screen.getByTestId('shadow-test')

    expect(received).toHaveStyleRule(
      'box-shadow',
      `inset 0px 4px 8px 1px ${cssVars['--llama-colors-black-400']}`
    )
  })

  it('should render a svg element', () => {
    customRender(
      <llama.svg data-testid="svg-test">
        <llama.path data-testid="path-test">asda</llama.path>
      </llama.svg>
    )

    const received = screen.getByTestId('svg-test')

    expect(received).toBeTruthy()
  })
})
