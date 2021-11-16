import React, { useState, useEffect } from 'react'
import { getForceUsers } from '../api'

import { ForceUser } from './ForceUser'

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

  function deleteForceUserId (id) {
    const filterForceUsers = forceUsers.filter(forceUser => forceUser.id !== id)
    setForceUsers(filterForceUsers)
  }

  return (
    <div>
      <h1>forceUsers for the win!</h1>

      {
        forceUsers.map((forceUser) => {
          return <ForceUser key={forceUser.id} forceUser={forceUser} deleteForceUserId={deleteForceUserId} />
        })
      }
    </div>
  )
}

export default App
