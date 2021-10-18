/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { flex, grid, interactions, layout, positions, transforms } from '../src'
import getFontTheme from '../src/utils/get-font-theme'

expect.extend(matchers)

describe('System/Layout', () => {
  it('should return flex properties', () => {
    const flexStyle = flex({
      theme,
      flex: '1',
      flexDirection: 'column',
    })

    render(<div data-testid="flex-test" css={flexStyle} />)

    const received = screen.getByTestId('flex-test')

    expect(received).toHaveStyleRule('flex', '1')
    expect(received).toHaveStyleRule('flex-direction', 'column')
  })

  it('should return grid properties', () => {
    const flexStyle = grid({
      theme,
      columns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(4, 20px)',
    })

    render(<div data-testid="grid-test" css={flexStyle} />)

    const received = screen.getByTestId('grid-test')

    expect(received).toHaveStyleRule('grid-template-columns', 'repeat(4, 1fr)')
    expect(received).toHaveStyleRule('grid-template-rows', 'repeat(4, 20px)')
  })

  it('should return layout properties', () => {
    const flexStyle = layout({
      theme,
      d: 'flex',
    })

    render(<div data-testid="layout-test" css={flexStyle} />)

    const received = screen.getByTestId('layout-test')

    expect(received).toHaveStyleRule('display', 'flex')
  })

  it('should return the interactive css properties', () => {
    const interactionsStyle = interactions({
      theme,
      cursor: 'pointer',
      outline: 'solid #dd2',
      outlineColor: 'primary.400',
      userSelect: 'none',
      outlineOffset: '2px',
    })

    render(<div data-testid="interactions-test" css={interactionsStyle} />)

    const received = screen.getByTestId('interactions-test')

    expect(received).toHaveStyleRule('cursor', 'pointer')
    expect(received).toHaveStyleRule('outline', 'solid #dd2')
    expect(received).toHaveStyleRule('outline-color', theme.colors.primary[400])
    expect(received).toHaveStyleRule('outline-offset', '2px')
    expect(received).toHaveStyleRule('user-select', 'none')
  })

  it('should return the position css properties', () => {
    const positionsStyle = positions({
      theme,
      position: 'absolute',
      bottom: '100px',
      top: '100px',
      right: '23px',
      left: '23px',
    })

    render(<div data-testid="positions-test" css={positionsStyle} />)

    const received = screen.getByTestId('positions-test')

    expect(received).toHaveStyleRule('position', 'absolute')
    expect(received).toHaveStyleRule('top', '100px')
    expect(received).toHaveStyleRule('bottom', '100px')
    expect(received).toHaveStyleRule('right', '23px')
    expect(received).toHaveStyleRule('left', '23px')
  })
  it('should return the transform and transition css properties', () => {
    const positionsStyle = transforms({
      theme,
      transform: 'rotate(180deg)',
      transition: 'all 0.4s',
    })

    render(<div data-testid="transform-test" css={positionsStyle} />)

    const received = screen.getByTestId('transform-test')

    expect(received).toHaveStyleRule('transform', 'rotate(180deg)')
    expect(received).toHaveStyleRule('transition', 'all 0.4s')
  })

  it('should return font size with theme', () => {
    const received = getFontTheme(theme, 'xl')

    expect(received).toMatch(theme.fonts.sizes.xl)
  })
  it('should return a font size value with px unit if provide number property', () => {
    const received = getFontTheme(theme, 2)

    expect(received).toBe(2)
  })
  it('should return the same value if dont provided the key values heading or paragraph', () => {
    const received = getFontTheme(theme, '24px')

    expect(received).toMatch('24px')
  })
  it('should return undefined if dont provide a property value', () => {
    const received = getFontTheme(theme)

    expect(received).toBeUndefined()
  })
})
