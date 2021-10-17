import fs from 'fs/promises'

import { formatToParams } from '../../utils'
import { ReadFiles, readFiles } from './readFiles'

interface File {
  isFile: () => boolean
  isDirectory: () => boolean
  name: string
}

interface CreateFile extends ReadFiles {
  file: File
}

export const createFile = async ({
  file,
  from,
  to,
  description,
  name,
  packageName,
  componentName,
}: CreateFile) => {
  const isDirectory = file.isDirectory()

  if (isDirectory) {
    const dirName = file.name
    const dirFrom = `${from}/${dirName}`
    const dirTo = `${to}/${dirName}`

    await fs.mkdir(dirTo, { recursive: true })

    return await readFiles({
      from: dirFrom,
      to: dirTo,
      description,
      name,
      componentName,
      packageName,
    })
  }

  const readTemplateFile = await fs.readFile(`${from}/${file.name}`)

  const templateFile = formatToParams(readTemplateFile.toString(), {
    name,
    description,
  })

  const fileName = formatToParams(file.name, { name, description })

  await fs.writeFile(`${to}/${fileName}`, templateFile, {
    encoding: 'utf-8',
  })
}
