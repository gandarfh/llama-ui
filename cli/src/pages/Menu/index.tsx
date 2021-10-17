import { Newline, useApp } from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'
import Select from 'ink-select-input'
import React from 'react'
import { useHistory } from 'react-router'

type MenuItem = {
  label: string
  value: string
}

type ItemsTable = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [t: string]: () => any
}

const Menu = () => {
  const history = useHistory()
  const { exit } = useApp()
  const MENU_TABLE: ItemsTable = {
    'new-package': () => history.push('/new-package'),
    quit: () => exit(),
  }

  const handleSelect = (item: MenuItem) => {
    const execute = MENU_TABLE[item.value]
    return execute()
  }

  const items = [
    {
      label: '📦 Novo pacote',
      value: 'new-package',
    },
    {
      label: '🚪 Sair',
      value: 'quit',
    },
  ]

  return (
    <>
      <Gradient name="pastel">
        <BigText text="llama ui" font="tiny" />
      </Gradient>
      <Newline />
      <Select items={items} onSelect={handleSelect} />
    </>
  )
}

export default Menu
