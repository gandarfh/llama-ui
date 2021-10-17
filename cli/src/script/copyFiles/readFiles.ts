import fs from 'fs/promises'

import { createFile } from './createFile'

export interface ReadFiles {
  from: string
  to: string
  componentName: string
  packageName: string
  name: string
  description: string
}

export const readFiles = async ({
  from,
  to,
  name,
  description,
  componentName,
  packageName,
}: ReadFiles) => {
  const files = await fs.readdir(from, {
    withFileTypes: true,
    encoding: 'utf-8',
  })

  files.forEach(async (file) => {
    createFile({
      description,
      file,
      name,
      componentName,
      from,
      to,
      packageName,
    })
  })
}
