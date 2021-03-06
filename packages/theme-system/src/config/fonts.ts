export type FontsType = Record<string, unknown>

export const fonts = {
  family: {
    heading:
      "Cal Sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    body: "Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  },
  weights: {
    thin: 100,
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
  },
  sizes: {
    xxl: '36px',
    xl: '32px',
    l: '24px',
    m: '20px',
    s: '16px',
    xs: '14px',
    xxs: '12px',
  },
}
