/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { spaces } from '../src'

expect.extend(matchers)

describe('System/Spaces', () => {
  it('should return margin properties in spaces', () => {
    const mStyle = spaces({
      theme,
      m: '20px',
      mt: '10px',
      mb: '10px',
      ml: '12px',
      mr: '5px',
    })

    const marginStyle = spaces({
      theme,
      margin: '20px',
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: '12px',
      marginRight: '5px',
    })

    render(<div data-testid="m-test" css={mStyle} />)
    render(<div data-testid="margin-test" css={marginStyle} />)

    const mExpected = screen.getByTestId('m-test')
    const marginExpected = screen.getByTestId('margin-test')

    expect(mExpected).toHaveStyleRule('margin', '20px')
    expect(mExpected).toHaveStyleRule('margin-top', '10px')
    expect(mExpected).toHaveStyleRule('margin-bottom', '10px')
    expect(mExpected).toHaveStyleRule('margin-left', '12px')
    expect(mExpected).toHaveStyleRule('margin-right', '5px')

    expect(marginExpected).toHaveStyleRule('margin', '20px')
    expect(marginExpected).toHaveStyleRule('margin-top', '10px')
    expect(marginExpected).toHaveStyleRule('margin-bottom', '10px')
    expect(marginExpected).toHaveStyleRule('margin-left', '12px')
    expect(marginExpected).toHaveStyleRule('margin-right', '5px')
  })

  it('should return padding properties in spaces', () => {
    const pStyle = spaces({
      theme,
      p: '20px',
      pt: '10px',
      pb: '10px',
      pl: '12px',
      pr: '5px',
    })

    const paddingStyle = spaces({
      theme,
      padding: '20px',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '12px',
      paddingRight: '5px',
    })

    render(<div data-testid="p-test" css={pStyle} />)
    render(<div data-testid="padding-test" css={paddingStyle} />)

    const pExpected = screen.getByTestId('p-test')
    const paddingExpected = screen.getByTestId('padding-test')

    expect(pExpected).toHaveStyleRule('padding', '20px')
    expect(pExpected).toHaveStyleRule('padding-top', '10px')
    expect(pExpected).toHaveStyleRule('padding-bottom', '10px')
    expect(pExpected).toHaveStyleRule('padding-left', '12px')
    expect(pExpected).toHaveStyleRule('padding-right', '5px')

    expect(paddingExpected).toHaveStyleRule('padding', '20px')
    expect(paddingExpected).toHaveStyleRule('padding-top', '10px')
    expect(paddingExpected).toHaveStyleRule('padding-bottom', '10px')
    expect(paddingExpected).toHaveStyleRule('padding-left', '12px')
    expect(paddingExpected).toHaveStyleRule('padding-right', '5px')
  })
})
