import React, { Component, Fragment } from 'react'

class Base extends Component {
  render() {
    return (
      <Fragment>
        <pre>./Layout/Base.js</pre>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Base
