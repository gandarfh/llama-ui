import lodash from 'lodash'

interface Params {
  description: string
  name: string
}

export const formatToParams = (text: string, { name, description }: Params) => {
  const componentName = lodash.upperFirst(lodash.camelCase(name))
  const packageName = lodash.kebabCase(name)

  const formattedText = text
    .replace(/%DESCRIPTION%/g, description)
    .replace(/%NAME%/g, name)
    .replace(/%COMPONENT%/g, componentName)
    .replace(/%PACKAGE%/g, packageName)
    .replace(/.hbs/g, '')

  return formattedText
}
