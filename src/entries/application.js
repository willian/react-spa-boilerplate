import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { RouteWithSubRoutes, createRoutes} from '../routes'

const history = createBrowserHistory()
const routes = createRoutes()

ReactDOM.render(
  <div style={{ height: '100%' }}>
    <Router history={history}>
      <div>
        {routes.map((route, i) => {
          return (
            <RouteWithSubRoutes key={i} {...route} />
        )})}
      </div>
    </Router>
  </div>,
  document.getElementById('root')
)
