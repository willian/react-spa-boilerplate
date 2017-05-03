import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { RouteWithSubRoutes } from '../routes'

class ApplicationLayout extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/support'>Support</Link></li>
        </ul>
        <hr />
        {this.props.routes.map((route, i) => {
          return (
            <RouteWithSubRoutes key={i} {...route} />
        )})}
      </div>
    )
  }
}

export default ApplicationLayout
