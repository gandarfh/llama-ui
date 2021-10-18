import pathLib from 'path'

import { addPackageToCore, appendPackage } from '../../../script/appendFiles'

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const actionCore = async (name: string) => {
  const basePath = '../../../../../packages/React/src'
  const path = pathLib.join(__dirname, `${basePath}/index.ts`)
  const data = `export { default as %COMPONENT%, %COMPONENT%Props } from '@llama-ui/%PACKAGE%'`
  const where = '/* PLOP_INJECT_COMPONENTS */'

  await addPackageToCore(name)

  await appendPackage({
    path,
    name,
    data,
    where,
  })
}

export const actionReadme = async (name: string) => {
  const basePath = '../../../../..'
  const path = pathLib.join(__dirname, `${basePath}/README.md`)
  const where =
    'Theme   | [`Theme`](https://npmjs.com/package/@llama-ui/theme) | [![latest](https://img.shields.io/npm/v/@llama-ui/theme/latest.svg)](https://npmjs.com/package/@llama-ui/theme) | [![README](https://img.shields.io/badge/README--@llama-ui/theme.svg)](packages/Theme/README.md)'
  const data =
    '%COMPONENT% | [`%COMPONENT%`](https://npmjs.com/package/@llama-ui/%PACKAGE%) | [![latest](https://img.shields.io/npm/v/@llama-ui/%PACKAGE%/latest.svg)](https://npmjs.com/package/@llama-ui/%PACKAGE%) | [![README](https://img.shields.io/badge/README--@llama-ui/%PACKAGE%.svg)](packages/%COMPONENT%/README.md)'

  await appendPackage({
    path,
    name,
    data,
    where,
  })
}
