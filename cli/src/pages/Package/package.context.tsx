import React from 'react'

import { copyFiles } from '../../script/copyFiles'

interface NewPackageContextProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  activeField: NewPackageFields
  setActiveField: React.Dispatch<React.SetStateAction<NewPackageFields>>
  activeCommand: CommandsListType
  setActiveCommand: React.Dispatch<React.SetStateAction<CommandsListType>>
  isRunningCommands: boolean
  setIsRunningCommands: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: () => void
}

interface NewPackageProviderProps {
  children: React.ReactNode
}

export const NewPackageContext = React.createContext(
  {} as NewPackageContextProps
)

type NewPackageFields = 'name' | 'description'
export type CommandsListType = 'copy' | 'core' | 'exit' | 'readme'

const NewPackageProvider = ({ children }: NewPackageProviderProps) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [activeField, setActiveField] = React.useState<NewPackageFields>('name')
  const [isRunningCommands, setIsRunningCommands] = React.useState(false)
  const [activeCommand, setActiveCommand] =
    React.useState<CommandsListType>('copy')

  const onSubmit = React.useCallback(async () => {
    await copyFiles({
      name,
      description,
    })
  }, [name, description])

  return (
    <NewPackageContext.Provider
      value={{
        name,
        setName,
        description,
        setDescription,
        activeField,
        setActiveField,
        onSubmit,
        isRunningCommands,
        setIsRunningCommands,
        activeCommand,
        setActiveCommand,
      }}
    >
      {children}
    </NewPackageContext.Provider>
  )
}

export default NewPackageProvider
