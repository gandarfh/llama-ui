/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import { background, color } from '../src'
import convertToTheme from '../src/utils/convert-to-theme'
import getColorTheme, {
  convertToHex,
  getOpacity,
} from '../src/utils/get-color-theme'

expect.extend(matchers)

describe('System/Colors', () => {
  it('should test the convertToTheme function', () => {
    const colorResponsiveArray = convertToTheme(theme, 'background', [
      'primary.400',
      '#d22',
      'black.600',
    ])

    const colorResponsiveObject = convertToTheme(theme, 'background', {
      sm: 'primary.400',
      md: '#d22',
      lg: 'black.600',
    })

    const color = convertToTheme(theme, 'background', 'primary.400')

    expect(color).toMatchObject({ background: theme.colors.primary[400] })
    expect(colorResponsiveArray).toMatchObject([
      { background: theme.colors.primary[400] },
      { background: '#d22' },
      { background: theme.colors.black[600] },
    ])
    expect(colorResponsiveObject).toMatchObject([
      { background: theme.colors.primary[400] },
      { background: '#d22' },
      { background: theme.colors.black[600] },
    ])
  })

  it('should use getFontTheme in convertToTheme if provide font-size css property', () => {
    const received = convertToTheme(theme, 'font-size', 'l')

    expect(received).toMatchObject({
      fontSize: theme.fonts.sizes.l,
    })
  })

  it('should return colors properties', () => {
    const colorStyle = color({
      theme,
      color: '#DD2',
      fill: '#4DD',
      stroke: '#D22',
    })

    render(
      <div data-testid="color-test" css={colorStyle}>
        Varios texto
      </div>
    )

    const received = screen.getByTestId('color-test')

    expect(received).toHaveStyleRule('color', '#DD2')
    expect(received).toHaveStyleRule('fill', '#4DD')
    expect(received).toHaveStyleRule('stroke', '#D22')
  })

  it('should return background properties', () => {
    const backgroundStyle = background({
      theme,
      bg: '#dd2',
    })

    render(<div data-testid="background-test" css={backgroundStyle} />)

    const received = screen.getByTestId('background-test')

    expect(received).toHaveStyleRule('background', '#dd2')
  })

  it('should convert the color key to theme color', () => {
    const backgroundStyle = background({
      theme,
      bg: 'primary.400',
    })
    render(<div data-testid="convert-test" css={backgroundStyle} />)

    const received = screen.getByTestId('convert-test')

    expect(received).toHaveStyleRule('background', theme.colors.primary[400])
  })

  it('should return the property with correctly color theme', () => {
    const primaryColor = getColorTheme(theme, 'primary.400')
    const boxShadow = getColorTheme(theme, 'inset 0px 4px 8px 1px primary.400')
    const nonexistentProperty = getColorTheme(theme, 'zeca.400')
    const normalHex = getColorTheme(theme, '#DD2')

    expect(normalHex).toMatch('#DD2')

    expect(nonexistentProperty).not.toMatch(theme.colors.primary[100])
    expect(nonexistentProperty).toMatch('zeca.400')

    expect(primaryColor).toMatch(theme.colors.primary[400])
    expect(boxShadow).toMatch(
      `inset 0px 4px 8px 1px ${theme.colors.primary[400]}`
    )
  })

  it('should return all colors from any color keys', () => {
    const primaryAndBlack = getColorTheme(theme, 'primary.400 black.400')
    const primaryAndBlackWithOpa = getColorTheme(
      theme,
      'primary.400/8 black.400/4'
    )

    const primaryOpa = getOpacity(8)
    const blackOpa = getOpacity(4)

    expect(primaryAndBlack).toMatch(
      `${theme.colors.primary[400]} ${theme.colors.black[400]}`
    )
    expect(primaryAndBlackWithOpa).toMatch(
      `${theme.colors.primary[400] + primaryOpa} ${
        theme.colors.black[400] + blackOpa
      }`
    )
  })

  it('should return the color with somes opacities', () => {
    const property = getColorTheme(theme, 'primary.400/3')
    const opacity = getOpacity(3)

    expect(property).toMatch(theme.colors.primary[400] + opacity)
  })

  it('should throw the opacity if is float value', () => {
    expect(() => getOpacity(3.2)).toThrow()
  })

  it('should throw the opacity if is float value in getColorTheme', () => {
    expect(() => getColorTheme(theme, 'primary.400/3.2')).toThrow()
  })

  it('should throw the opacity if is greater than 0 or less than 10', () => {
    expect(() => getColorTheme(theme, 'primary.400/12')).toThrow()
    expect(() => getColorTheme(theme, 'primary.400/-3')).toThrow()
  })

  it('should convert the color key to hex', () => {
    const primaryColor = convertToHex(theme, 'primary.400')

    expect(primaryColor).toMatch(theme.colors.primary[400])
  })
})
