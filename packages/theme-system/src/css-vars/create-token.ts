const tokensWithVars = {} as any

const cssVars = {} as any

const concatToken = (...args: string[]) => {
  let str = ''
  for (const item of args) {
    if (typeof item === 'string') {
      str += `-${item}`
    }
  }
  return str
}

const createToken = <Theme>(
  theme: Theme,
  config: Record<string, any>,
  prefix?: [string | undefined, string | undefined]
): { tokensWithVars: Theme; cssVars: Record<string, string> } => {
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
      tokensWithVars[old] = {
        ...tokensWithVars[old],
        [current]: {
          ...(tokensWithVars[old] &&
            tokensWithVars[old][current] &&
            tokensWithVars[old][current]),
          [token]: `var(${key})`,
        },
      }
    }

    if (!old && current) {
      tokensWithVars[current] = {
        ...tokensWithVars[current],
        [token]: `var(${key})`,
      }
    }

    cssVars[key] = theme[token]
  }

  return { tokensWithVars, cssVars }
}

export default createToken
