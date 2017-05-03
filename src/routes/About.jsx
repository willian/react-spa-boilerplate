import React from 'react'

import BundleLoader from './BundleLoader'
import loadAbout from 'bundle-loader?lazy!../containers/About'

const About = () => (
  <BundleLoader loader={loadAbout}>
    {(About) => (About
      ? <About />
      : <p>Loading...</p>
    )}
  </BundleLoader>
)

// import About from '../containers/About'
export const AboutRoute = {
  path: '/about',
  component: About
}

export default About
