import React, { useState, useEffect } from 'react'
import { getForceUsers } from '../api'
import { Route, HashRouter as Router } from 'react-router-dom'

import { Home } from './Home'
import { Form } from './Form'
import Nav from './Nav'
import ForceUser from './ForceUser'

function App () {
  const [forceUsers, setForceUsers] = useState([])

  useEffect(() => {
    getForceUsers()
      .then(forceUsers => {
        setForceUsers(forceUsers)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  function refreshForceUser (newForceUser) {
    const allForceUsers = [...forceUsers, newForceUser]
    setForceUsers(allForceUsers)
  }

  function deleteForceUserId (id) {
    const filterForceUsers = forceUsers.filter(forceUser => forceUser.id !== id)
    setForceUsers(filterForceUsers)
  }

  return (
    <div>
      <h1>May 4th be with you</h1>
      {
        forceUsers.map((forceUser) => {
          return <Home key={forceUser.id} forceUser={forceUser} deleteForceUserId={deleteForceUserId} />
        })
      }
      <div>
        <Router>
          <Route path='/' component={ Nav } />
          <Route exact path={'/forceUsers/:id'} component={ ForceUser } />
        </Router>
      </div>
      <div>
        <Form refreshForceUser={refreshForceUser}/>
      </div>
    </div>
  )
}

export default App
