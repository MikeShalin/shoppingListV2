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

const App = () => (
  <Fragment>
      <Switch>
        <Route path='/' exact to='/' component={Home}/>
        <Route path='/login/' component={Login}/>
        <Redirect from='*' to='/'/>
      </Switch>
  </Fragment>
)

export default App
