import React from 'react'

import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

export default function AppRoutes (props) {
  return (
    <div>
      <Route exact path='/' component= { Nav } />
      <Route path='/:id' render={routerProps => (
        <Home
          fetchForceUser={props.fetchForceUser}
          forceUser={props.forceUser.find((forceUser) =>
            forceUser.id
          )}
          {...routerProps}
        />
      )}/>
    </div>
  )
}
