/** @flow **/
import * as React from 'react'
import { Fragment } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Login from 'Features/Login'
import Home from 'Features/Home'
import Wrapper from 'Core/styled/Wrapper'

const App = () => (
  <Fragment>
    <Wrapper>
      <Switch>
        <Route path='/' exact to='/' component={Home}/>
        <Route path='/login/' component={Login}/>
        <Redirect from='*' to='/'/>
      </Switch>
    </Wrapper>
  </Fragment>
)

export default App
