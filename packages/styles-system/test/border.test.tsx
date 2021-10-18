/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { border } from '../src'

expect.extend(matchers)

describe('System/Border', () => {
  it('should return the border radius css properties', () => {
    const radiusStyle = border({
      theme,
      radius: '20px',
      radiusTop: '10px',
      radiusBottom: '5px',
      radiusLeft: '8px',
      radiusRight: '12px',
    })

    render(<div data-testid="radius-test" css={radiusStyle} />)

    const received = screen.getByTestId('radius-test')

    expect(received).toHaveStyleRule('border-radius', '20px')
    // received radiusTop: 10px
    expect(received).toHaveStyleRule('border-top-left-radius', '10px')
    expect(received).toHaveStyleRule('border-top-right-radius', '10px')

    // received radiusBottom: 5px
    expect(received).toHaveStyleRule('border-bottom-left-radius', '5px')
    expect(received).toHaveStyleRule('border-bottom-right-radius', '5px')
  })

  it('should return the border style css properties', () => {
    const radiusStyle = border({
      theme,
      border: 'solid 1px #dd2',
      borderStyle: 'dashed',
    })

    render(<div data-testid="border-style-test" css={radiusStyle} />)

    const received = screen.getByTestId('border-style-test')

    expect(received).toHaveStyleRule('border-style', 'dashed')
  })
})
