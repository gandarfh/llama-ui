import fs from 'fs'
import lodash from 'lodash'
import path from 'path'

import { readFiles } from './readFiles'

interface CopyFiles {
  name: string
  description: string
}

const packageExist = (path: string) => {
  const exist = fs.existsSync(path)
  if (exist) {
    throw new Error('Nome de pacote ja esta sendo utilizado')
  }
}

export const copyFiles = async ({ name, description }: CopyFiles) => {
  const componentName = lodash.upperFirst(lodash.camelCase(name))
  const packageName = lodash.kebabCase(name)

  const from = path.join(__dirname, '../../template')
  const to = `${path.join(__dirname, '../../../../packages')}/${componentName}`

  packageExist(to)

  await readFiles({ from, to, description, name, componentName, packageName })
}
