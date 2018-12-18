import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ componentBase: Base, component: Component, mode, isLogged, redirectAnonymousPath, ...rest }) =>
  <Route {...rest} render={
    props => {
      if (isLogged()) {
        // Passing on props gives the child component the DOM push api access.
        // To redirect pages, use this.props.history.push("/path") inside the child.
        // Elsewhere (without these props), just user <Redirect to="/path" />.
        if (Base) {
          return (
            <Base history={props.history}>
              <Component {...props} mode={mode} />
            </Base>
          )
        }
        return <Component {...props} mode={mode} />
      }
      return (
        <Redirect to={{
          pathname: redirectAnonymousPath || '/auth/signin',
          state: { from: props.location }
        }} />
      )
    }
  } />

export default ProtectedRoute
