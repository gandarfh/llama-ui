import child from 'child_process'
import fs from 'fs/promises'
import lodash from 'lodash'
import util from 'util'

import { formatToParams } from '../../utils'

interface Append {
  path: string
  name: string
  data: string
  where?: string
}

const exec = util.promisify(child.exec)

export const addPackageToCore = async (name: string) => {
  const packageName = lodash.kebabCase(name)

  await exec(`lerna add @llama-ui/system --scope=@llama-ui/${packageName}`)
  await exec(`lerna add @llama-ui/${packageName} --scope=@llama-ui/react`)

  await exec(`lerna clean --yes`)
  await exec(`lerna run build`)
}

export const appendPackage = async ({ name, data, path, where }: Append) => {
  const dataTemplate = formatToParams(data, { name, description: '' })
  const file = (await fs.readFile(path)).toString()

  if (where) {
    const fileWithWhere = file.replace(where, `${where}\n${dataTemplate}`)

    return await fs.writeFile(path, fileWithWhere, { encoding: 'utf-8' })
  }

  await fs.appendFile(path, dataTemplate, { encoding: 'utf-8' })
}
