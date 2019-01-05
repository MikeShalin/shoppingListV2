/** @flow **/
import * as React from 'react'
import { Fragment } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Login from 'Features/Login'
import Home from 'Features/Home'
import Registration from 'Features/Registration'

const App = () => (
  <Fragment>
      <Switch>
        <Route path='/' exact to='/' component={Home}/>
        <Route path='/login/' component={Login}/>
        <Route path='/registration/' component={Registration}/>
        <Redirect from='*' to='/'/>
      </Switch>
  </Fragment>
)

export default App
