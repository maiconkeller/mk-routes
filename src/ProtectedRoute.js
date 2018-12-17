import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ baseComponent: Base, component: Component, mode, isLogged, ...rest }) =>
  <Route {...rest} render={
    props => {
      if (isLogged()) {
        // Passing on props gives the child component the DOM push api access.
        // To redirect pages, use this.props.history.push("/path") inside the child.
        // Elsewhere (without these props), just user <Redirect to="/path" />.
        return (
          <Base history={props.history}>
            <Component mode={mode} {...props} />
          </Base>
        )
      }
      return (
        <Redirect to={{
          pathname: '/auth/signin',
          state: { from: props.location }
        }} />
      )
    }
  } />

export default ProtectedRoute
