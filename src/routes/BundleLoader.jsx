import React, { Component } from 'react'

class BundleLoader extends Component {
  state = {
    mod: null
  }

  componentWillMount () {
    this.loadComponent(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.loader !== this.props.loader) {
      this.loadComponent(nextProps)
    }
  }

  loadComponent (props) {
    this.setState({
      mod: null
    })

    props.loader((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render () {
    return this.props.children(this.state.mod)
  }
}

export default BundleLoader
