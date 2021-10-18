/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { pseudos } from '../src'

expect.extend(matchers)

describe('System/Pseudos', () => {
  it('should create a pseudo if have properties', async () => {
    const pseudoHover = pseudos({
      theme,
      _hover: { bg: 'primary.400' },
    })

    render(<div css={pseudoHover} data-testid="pseudos-test" />)
    const received = screen.getByTestId('pseudos-test')

    expect(received).toBeTruthy()
  })
})
