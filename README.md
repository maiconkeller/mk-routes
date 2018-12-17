# mk-routes

>

[![NPM](https://img.shields.io/npm/v/mk-routes.svg)](https://www.npmjs.com/package/mk-routes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mk-routes
```

## Usage

```jsx
import React, { Component } from 'react'

import MkRoutes from 'mk-routes'
import { routes } from './RoutesUtils'
import { isLogged } from './SecurityUtils'

class Example extends Component {
  render () {
    return <MkRoutes routes={routes} isLogged={isLogged} />
  }
}
```

## License

MIT © [maiconkeller](https://github.com/maiconkeller)
