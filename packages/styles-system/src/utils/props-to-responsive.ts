const propsToResponsive = <T>(value?: T, template?: string) => {
  if (!value) return

  if (!template) return value

  if (Array.isArray(value)) {
    return value.map((item) => template.replace(/{{ value }}/g, String(item)))
  }

  if (typeof value === 'object') {
    return Object.keys(value).map((item) =>
      template.replace(/{{ value }}/g, String(value[item]))
    )
  }

  return template.replace(/{{ value }}/g, String(value))
}

export default propsToResponsive
