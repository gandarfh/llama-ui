import { matchers } from '@emotion/jest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
expect.extend(matchers)

import StylesSystem from '../src'

const StylesSystemRender = (
  <StylesSystem data-testid="styles-system-test">StylesSystem</StylesSystem>
)

describe('StylesSystem', () => {
  it('should render the theme-system', () => {
    render(StylesSystemRender)
    expect(screen.getByTestId('styles-system-test')).toBeTruthy()
  })
  it('should validate accessibility', async () => {
    const { container } = render(StylesSystemRender)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })
})
