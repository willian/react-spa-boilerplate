import React, { Component } from 'react'
import '../assets/stylesheets/application.scss'

export default class App extends Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello {process.env.APP_NAME}</h1>
        <h2>Current environment: {process.env.NODE_ENV}</h2>
      </div>
    )
  }
}
