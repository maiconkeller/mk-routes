import React, { Component } from 'react'

import MkRoutes from 'mk-routes'
import { routes } from './utils/RoutesUtils'
import { isLogged } from './utils/SecurityUtils'

export default class App extends Component {
  render () {
    return (
      <MkRoutes
        routes={routes}
        isLogged={isLogged}
        toAnonymousPath='/'
        toProtectedPath='/protected/page1' />
    )
  }
}
