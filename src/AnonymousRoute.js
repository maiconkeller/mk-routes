import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AnonymousRoute = ({ componentBase: Base, component: Component, isLogged, redirectProtectedPath, ...rest }) =>
  <Route {...rest} render={
    props => {
      if (!isLogged()) {
        // Passing on props gives the child component the DOM push api access.
        // To redirect pages, use this.props.history.push("/path") inside the child.
        // Elsewhere (without these props), just user <Redirect to="/path" />.
        if (Base) {
          return (
            <Base history={props.history}>
              <Component {...props} />
            </Base>
          )
        }
        return (<Component {...props} />)
      }
      return (
        <Redirect to={{
          pathname: redirectProtectedPath || '/',
          state: { from: props.location }
        }} />
      )
    }
  } />

export default AnonymousRoute
