const generateVars = (vars?: Record<string, string>) => {
  let style = ''

  if (!vars) return

  for (const cssVar of Object.keys(vars)) {
    style += `${cssVar}: ${vars[cssVar]};\n`
  }

  const element = document.createElement('style')
  element.setAttribute('data-llama', 'css-variables')
  element.innerHTML = `:root {\n${style}\n}`

  document.head.appendChild(element)
}

export default generateVars
