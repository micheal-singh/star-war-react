import React, { useState, useEffect } from 'react'
import { getForceUsers } from '../api'

import { Form } from './Form'
// import AppRoutes from './AppRoutes'
import Home from './Home'

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
      <h1>forceUsers for the win!</h1>
      {/* {
        forceUsers.map(({ id, name, homeWorld, jedi, sith, neutral }) => {
          return (
            <li key={id}>{name} {homeWorld} {jedi} {sith} {neutral}</li>
          )
        })
      } */}
      <div>
        {/* <AppRoutes /> */}
        {
          forceUsers.map((forceUser) => {
            return <Home key={forceUser.id} forceUser={forceUser} deleteForceUserId={deleteForceUserId} />
          })
        }
      </div>
      <div>
        <Form refreshForceUser={refreshForceUser}/>
      </div>
    </div>
  )
}

export default App
