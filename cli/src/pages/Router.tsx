import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router'

import Menu from './Menu'
import NewPackage from './Package/new'

const Router = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/" component={() => <Menu />} />
        <Route exact path="/new-package" component={() => <NewPackage />} />
      </Switch>
    </MemoryRouter>
  )
}

export default Router
