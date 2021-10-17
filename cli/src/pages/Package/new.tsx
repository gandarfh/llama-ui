import React from 'react'

import ActiveField from './ActiveField'
import NewPackageProvider, { NewPackageContext } from './package.context'
import RunningCommands from './RunningCommands'

const FormNewPackage = () => {
  const {
    description,
    setDescription,
    name,
    setName,
    activeField,
    setActiveField,
    setIsRunningCommands,
    isRunningCommands,
  } = React.useContext(NewPackageContext)

  const fieldList = [
    {
      name: 'name',
      value: name,
      setValue: setName,
      label: 'Nome do pacote: ',
      onSubmit: () => setActiveField('description'),
    },
    {
      name: 'description',
      value: description,
      setValue: setDescription,
      label: 'Descrição do pacote: ',
      onSubmit: () => setIsRunningCommands(true),
    },
  ]

  if (isRunningCommands) {
    return null
  }

  return (
    <>
      {fieldList.map((field) => (
        <ActiveField {...field} key={field.name} activeField={activeField} />
      ))}
    </>
  )
}

const NewPackage = () => {
  return (
    <NewPackageProvider>
      <FormNewPackage />
      <RunningCommands />
    </NewPackageProvider>
  )
}

export default NewPackage
