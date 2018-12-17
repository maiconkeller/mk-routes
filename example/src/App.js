import React, { Component } from 'react'

import MkRoutes from 'mk-routes'
import { routes } from './RoutesUtils'
import { isLogged } from './SecurityUtils'

export default class App extends Component {
  render () {
    return <MkRoutes routes={routes} isLogged={isLogged} />
  }
}
