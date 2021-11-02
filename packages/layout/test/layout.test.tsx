import { matchers } from '@emotion/jest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Box, Container, Flex, Grid } from '../src'

expect.extend(matchers)

describe('Layout', () => {
  it('should render the box component', () => {
    render(<Box data-testid="box-test" />)
    expect(screen.getByTestId('box-test')).toBeTruthy()
  })

  it('should render the flex component', () => {
    render(<Flex data-testid="flex-test" />)
    expect(screen.getByTestId('flex-test')).toBeTruthy()
  })

  it('should render the grid component', () => {
    render(<Grid data-testid="grid-test" />)
    expect(screen.getByTestId('grid-test')).toBeTruthy()
  })

  it('should render the container component', () => {
    render(<Container data-testid="container-test" />)
    expect(screen.getByTestId('container-test')).toBeTruthy()
  })

  it('should validate accessibility of box component', async () => {
    const { container } = render(<Box />)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })

  it('should validate accessibility of flex component', async () => {
    const { container } = render(<Flex />)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })

  it('should validate accessibility of grid component', async () => {
    const { container } = render(<Grid />)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })

  it('should validate accessibility of container component', async () => {
    const { container } = render(<Container />)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })
})
