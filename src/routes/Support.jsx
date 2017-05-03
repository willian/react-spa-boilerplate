import React from 'react'

import BundleLoader from './BundleLoader'
import loadSupport from 'bundle-loader?lazy!../containers/Support'

const Support = () => (
  <BundleLoader loader={loadSupport}>
    {(Support) => (Support
      ? <Support />
      : <p>Loading...</p>
    )}
  </BundleLoader>
)

// import Support from '../containers/Support'
export const SupportRoute = {
  path: '/support',
  component: Support
}

export default Support
