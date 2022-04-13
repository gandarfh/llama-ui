import { Theme } from '@emotion/react'

const themeWithVars = {}

const cssVars = {} as const

const concatToken = (...args: string[]) => {
  let str = ''

  for (const item of args) {
    if (typeof item === 'string') {
      str += `-${item}`
    }
  }
  return str
}

const createToken = (
  theme: Record<string, any>,
  config: Theme['config'],
  prefix?: [string | undefined, string | undefined]
) => {
  const tokens = Object.keys(theme)

  for (const token of tokens) {
    if (typeof theme[token] === 'object') {
      createToken(
        theme[token],
        config,
        prefix ? [token, prefix[0]] : [token, undefined]
      )
      continue
    }

    const [current, old] = prefix!

    const key = `-${concatToken(config.prefix, old!, current!, token)}`

    if (old && current) {
      themeWithVars[old] = {
        ...themeWithVars[old],
        [current]: {
          ...(themeWithVars[old] &&
            themeWithVars[old][current] &&
            themeWithVars[old][current]),
          [token]: `var(${key})`,
        },
      }
    }

    if (!old && current) {
      themeWithVars[current] = {
        ...themeWithVars[current],
        [token]: `var(${key})`,
      }
    }

    cssVars[key] = theme[token]
  }

  return { themeWithVars, cssVars }
}

export default createToken
