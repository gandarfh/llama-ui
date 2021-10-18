/** @jsx jsx */
import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { jsx } from '@emotion/react'
import { theme } from '@llama-ui/theme-system'
import { render, screen } from '@testing-library/react'

import {
  background,
  border,
  color,
  flex,
  grid,
  layout,
  positions,
  pseudos,
  spaces,
  styles,
  transforms,
  typography,
} from '../src'

expect.extend(matchers)

describe('System/Styles', () => {
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

  it('should return margin properties in spaces', () => {
    const mStyle = spaces({
      theme,
      m: '20px',
      mTop: '10px',
      mBottom: '10px',
      mLeft: '12px',
      mRight: '5px',
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
      pTop: '10px',
      pBottom: '10px',
      pLeft: '12px',
      pRight: '5px',
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

  it('should return font/text css properties', () => {
    const textStyle = typography({
      theme,
      fontFamily: ['sans-serif'],
      fontSize: '20px',
      fontWeight: [500, 'bold'],
      letterSpacing: '0.2px',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'lowercase',
      whiteSpace: 'normal',
    })

    render(<div data-testid="text-test" css={textStyle} />)

    const received = screen.getByTestId('text-test')

    expect(received).toHaveStyleRule('font-family', 'sans-serif')
    expect(received).toHaveStyleRule('font-size', '20px')
    expect(received).toHaveStyleRule('font-weight', '500')
    expect(received).toHaveStyleRule('letter-spacing', '0.2px')
    expect(received).toHaveStyleRule('font-style', 'normal')
    expect(received).toHaveStyleRule('line-height', 'normal')
    expect(received).toHaveStyleRule('text-align', 'left')
    expect(received).toHaveStyleRule('text-transform', 'lowercase')
    expect(received).toHaveStyleRule('white-space', 'normal')
  })

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

  it('should return the border color with and without theme css properties', () => {
    const radiusStyle = border({
      theme,
      borderColor: 'black.200',
      borderTopColor: '#dd2',
    })

    render(<div data-testid="border-color-test" css={radiusStyle} />)

    const received = screen.getByTestId('border-color-test')

    expect(received).toHaveStyleRule('border-color', theme.colors.black[200])
    expect(received).toHaveStyleRule('border-top-color', '#dd2')
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

  it('should return all styles css properties', () => {
    const styleConfig = styles({
      theme,
      position: 'absolute',
      background: 'primary.400',
      color: '#dd2',
      outline: 'solid 1px #dd2',
      radius: '10px',
      display: 'flex',
      transform: 'rotate(180deg)',
      transition: 'all 0.4s',
    })

    render(<div data-testid="style-test" css={styleConfig} />)

    const received = screen.getByTestId('style-test')

    expect(received).toHaveStyleRule('position', 'absolute')
    expect(received).toHaveStyleRule('background', theme.colors.primary[400])
    expect(received).toHaveStyleRule('color', '#dd2')
    expect(received).toHaveStyleRule('outline', 'solid 1px #dd2')
    expect(received).toHaveStyleRule('border-radius', '10px')
    expect(received).toHaveStyleRule('display', 'flex')
    expect(received).toHaveStyleRule('transform', 'rotate(180deg)')
    expect(received).toHaveStyleRule('transition', 'all 0.4s')
  })

  // TODO: Finish tests to pseudos selectors
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
