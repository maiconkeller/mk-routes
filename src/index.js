import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter } from 'react-router-dom'

import AnonymousRoute from './AnonymousRoute'
import ProtectedRoute from './ProtectedRoute'

class MkRoutes extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    isLogged: PropTypes.func.isRequired,
    hasAuthorization: PropTypes.func.isRequired,
    anonymousBase: PropTypes.element,
    protectedBase: PropTypes.element,
    toAnonymousPath: PropTypes.string,
    toProtectedPath: PropTypes.string,
    permission: PropTypes.string
  }

  render() {
    const {
      routes,
      anonymousBase,
      toAnonymousPath,
      protectedBase,
      toProtectedPath,
      isLogged,
      hasAuthorization
    } = this.props

    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            {
              !!routes && routes.map((route, index) => {
                if (route.type === 'protected') {
                  return (
                    <ProtectedRoute
                      key={`mkroutes-${index}`}
                      mode={route.mode}
                      exact={route.exact}
                      path={route.path}
                      redirectPath={route.redirectPath || toAnonymousPath || null}
                      permissionRedirectPath={route.permissionRedirectPath || null}
                      component={route.component}
                      componentBase={route.componentBase || protectedBase || null}
                      isLogged={isLogged}
                      hasAuthorization={hasAuthorization}
                      permission={route.permission} />
                  )
                } else {
                  return (
                    <AnonymousRoute
                      key={`mkroutes-${index}`}
                      mode={route.mode}
                      exact={route.exact}
                      path={route.path}
                      redirectPath={route.redirectPath || toProtectedPath || null}
                      component={route.component}
                      componentBase={route.componentBase || anonymousBase || null}
                      isLogged={isLogged} />
                  )
                }
              })
            }
          </Fragment>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default MkRoutes
