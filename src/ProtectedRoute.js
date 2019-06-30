import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ componentBase: Base, component: Component, mode, permission, isLogged,
  hasAuthorization, redirectPath, permissionRedirectPath, ...rest }) =>
  <Route {...rest} render={
    props => {
      if (!!isLogged()) {
        if (!hasAuthorization(permission)) {
            return (
                <Redirect to={{
                    pathname: !!permissionRedirectPath ? permissionRedirectPath : "/",
                    state: { from: props.location }
                }} />
            );
        }    

        // Passing on props gives the child component the DOM push api access.
        // To redirect pages, use this.props.history.push("/path") inside the child.
        // Elsewhere (without these props), just user <Redirect to="/path" />.
        if (!Base) {
          return <Component {...props} mode={mode} />
        }
        return (
          <Base history={props.history}>
            <Component {...props} mode={mode} />
          </Base>
        )
      }
      return (
        <Redirect to={{
          pathname: !!redirectPath ? redirectPath : '/auth/signin',
          state: { from: props.location }
        }} />
      )
    }
  } />

export default ProtectedRoute
