# mk-routes

>

[![NPM](https://img.shields.io/npm/v/mk-routes.svg)](https://www.npmjs.com/package/mk-routes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mk-routes
```
or
```bash
yarn add mk-routes
```

## Usage

```jsx
import React, { Component } from 'react'
import MkRoutes from 'mk-routes'

import { routes } from './RoutesUtils' // public and private routes
import { isLogged } from './SecurityUtils' // validate isLogged function with boolean return

class Example extends Component {
  render () {
    return <MkRoutes routes={routes} isLogged={isLogged} />
  }
}
```

### Others Classes

*./RoutesUtils*<br>
*Define yours public or private routes*

```jsx
import HomeContainer from '../home/HomeContainer';
import LoginContainer from '../auth/LoginContainer';
import ForgotContainer from '../auth/ForgotContainer';
import ResetContainer from '../auth/ResetContainer';
import UserContainer from '../users/UserContainer';
import UserFormContainer from '../users/UserContainerForm';

import Base from './Base' // component base (menu, sidebar, content)

export const routes = [
  { type: 'protected', mode: "view", exact: true, path: "/", component: HomeContainer, componentBase: Base },

  { type: 'anonymous', mode: "auth", exact: true, path: "/auth/signin", component: LoginContainer },
  { type: 'anonymous', mode: "auth", exact: true, path: "/auth/forgot", component: ForgotContainer },
  { type: 'anonymous', mode: "auth", exact: true, path: "/auth/reset", component: ResetContainer },

  { type: 'protected', mode: "view", exact: true, path: "/user", component: UserContainer, componentBase: Base },
  { type: 'protected', mode: "edit", exact: true, path: "/user/:id/edit", component: UserFormContainer , componentBase: Base },
  { type: 'protected', mode: "new" , exact: true, path: "/user/new", component: UserFormContaine, componentBase: Baser }
]
```

*./Base*<br>
*Define your layout with menu, sidebar, content and others*

```jsx
import React, { PureComponent, Fragment } from 'react';

import { Grid } from 'react-bootstrap';

import Menu from './Menu'; // a navbar

class Index extends PureComponent {
  render() {
    return (
      <Fragment>
        <Menu {...this.props} />
        <Grid fluid>
            {this.props.children}
        </Grid>
      </Fragment>
    );
  }
}

export default Index;
```

## License

MIT © [maiconkeller](https://github.com/maiconkeller)
