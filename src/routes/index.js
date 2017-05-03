import React from 'react'
import { Route } from 'react-router-dom'

import ApplicationLayout from '../containers/ApplicationLayout'
import { HomeRoute } from './Home'
import { AboutRoute }from './About'
import { SupportRoute } from './Support'

export const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (<route.component {...props} routes={route.routes} />)}
  />
)

export const createRoutes = () => ([
  {
    path: '/',
    component: ApplicationLayout,
    routes: [
      HomeRoute,
      AboutRoute,
      SupportRoute
    ]
  }
])
