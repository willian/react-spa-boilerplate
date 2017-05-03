import React from 'react'

import BundleLoader from './BundleLoader'
import loadHome from 'bundle-loader?lazy!../containers/Home'

const Home = () => (
  <BundleLoader loader={loadHome}>
    {(Home) => (Home
      ? <Home />
      : <p>Loading...</p>
    )}
  </BundleLoader>
)

// import Home from '../containers/Home'
export const HomeRoute = {
  path: '/',
  component: Home
}

export default Home
