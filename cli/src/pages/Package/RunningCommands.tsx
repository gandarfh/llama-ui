import React from 'react'

import { copyFiles } from '../../script/copyFiles'
import { actionCore, actionReadme, sleep } from './Commands/actions'
import CommandActive from './Commands/CommandActive'
import { NewPackageContext } from './package.context'

const RunningCommands = () => {
  const {
    isRunningCommands,
    setActiveCommand,
    name,
    description,
    activeCommand,
  } = React.useContext(NewPackageContext)

  const commandsList = {
    copy: {
      action: 'copy',
      label: 'Copiando arquivos',
      run: async () => {
        await sleep(1200)
        await copyFiles({ name, description })
        setActiveCommand('core')
      },
    },
    core: {
      action: 'core',
      label: 'Adicionando pacote no Core',
      run: async () => {
        await actionCore(name)
        setActiveCommand('readme')
      },
    },
    readme: {
      action: 'readme',
      label: 'Adicionando pacote no readme',
      run: async () => {
        await actionReadme(name)
        setActiveCommand('exit')
      },
    },
    exit: {
      action: 'exit',
      label: 'Concluido',
      run: async () => {
        await sleep(1000)
        process.exit()
      },
    },
  }

  const activeProps = commandsList[activeCommand]

  if (!isRunningCommands) {
    return null
  }

  return <CommandActive {...activeProps} />
}

export default RunningCommands
