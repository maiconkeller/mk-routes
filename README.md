# mk-routes

A reusable React component for authentication-aware routing, permission checks, and shared page layouts.

Define routes as data and let the component choose between anonymous and protected navigation. This is a historical developer tooling project built around **React 15/16 and React Router 4**, reflecting the versions in [package.json](package.json).

## What it provides

- Anonymous and protected route types.
- Authentication and permission callbacks supplied by the application.
- Shared layouts with optional per-route overrides.
- Redirect paths for signed-out, signed-in, and unauthorized navigation.

Client-side route checks control navigation only. Backend services must enforce their own authentication and authorization.

## Install

```bash
npm install --save mk-routes
```

The existing package metadata names `mk-routes` version `1.1.0`. Registry availability and compatibility with current React versions were not verified during this documentation review.

## Usage

```jsx
import React from 'react'
import MkRoutes from 'mk-routes'

import Dashboard from './Dashboard'
import SignIn from './SignIn'
import Forbidden from './Forbidden'
import BaseLayout from './BaseLayout'
import { isLogged, hasAuthorization } from './auth'

const routes = [
  {
    type: 'protected',
    exact: true,
    path: '/',
    component: Dashboard,
    componentBase: BaseLayout,
    permission: 'dashboard:read',
    permissionRedirectPath: '/forbidden'
  },
  {
    type: 'protected',
    exact: true,
    path: '/forbidden',
    component: Forbidden
  },
  {
    type: 'anonymous',
    exact: true,
    path: '/auth/signin',
    component: SignIn
  }
]

export default function App () {
  return (
    <MkRoutes
      routes={routes}
      isLogged={isLogged}
      hasAuthorization={hasAuthorization}
      toAnonymousPath="/auth/signin"
      toProtectedPath="/"
    />
  )
}
```

The imported pages, layout, and authentication functions belong to your application. `isLogged()` returns a boolean. `hasAuthorization(permission)` receives the configured permission and must return a boolean; define how your application handles routes without a permission value.

Both callbacks are required by the component. A layout wraps its page through `props.children`.

## Route configuration

| Field | Purpose |
| --- | --- |
| `type` | `protected` or `anonymous` |
| `path`, `exact` | React Router path matching |
| `component` | Page component |
| `componentBase` | Optional layout for this route |
| `permission` | Value passed to `hasAuthorization` |
| `redirectPath` | Override the authentication redirect |
| `permissionRedirectPath` | Redirect when authorization fails |
| `mode` | Passed to the protected page component |

## Implementation and trade-offs

- [MkRoutes](src/index.js) maps route definitions and owns a `BrowserRouter`.
- [ProtectedRoute](src/ProtectedRoute.js) checks authentication, then authorization, before rendering.
- [AnonymousRoute](src/AnonymousRoute.js) redirects authenticated visitors and renders anonymous pages.

Because the component creates its own router, account for that ownership when integrating it into an application. Its API is based on React Router 4; migration to later router APIs requires a separate implementation review.

## Local development

The project uses a historical Node/React toolchain. Refer to `engines`, dependencies, and scripts in [package.json](package.json) when reproducing the environment.

```bash
yarn install
yarn build
yarn test
```

The [example application](example) shows additional integration patterns. The checked-in test is an export smoke test; it does not cover authorization or redirect behavior. Build and test commands were not executed during the documentation review.

## License

MIT © [Maicon Keller](https://github.com/maiconkeller), as declared in the existing package metadata and original README.
