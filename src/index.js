import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter } from 'react-router-dom'

import AnonymousRoute from './AnonymousRoute'
import ProtectedRoute from './ProtectedRoute'

class MkRoutes extends Component {
  static propTypes = {
    routes: PropTypes.array,
    isLogged: PropTypes.bool,
    anonymousBase: PropTypes.element,
    protectedBase: PropTypes.element
  }

  render() {
    const {
      routes,
      anonymousBase,
      protectedBase,
      isLogged
    } = this.props

    return (
      <div>
        <BrowserRouter>
          <Fragment>
            {
              !!routes && routes.map(route => {
                if (route.type === 'protected') {
                  return (
                    <ProtectedRoute
                      key={route.path}
                      mode={route.mode}
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                      componentBase={protectedBase || route.protectedBase}
                      isLogged={isLogged} />
                  )
                } else {
                  return (
                    <AnonymousRoute
                      key={route.path}
                      mode={route.mode}
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                      componentBase={anonymousBase || route.anonymousBase}
                      isLogged={isLogged} />
                  )
                }
              })
            }
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default MkRoutes
