import React, { useState, useEffect } from 'react'
import { getForceUser } from '../api'

export default function ForceUser (props) {
  const [forceUser, setForceUser] = useState([])

  useEffect(() => {
    const id = props.match.params.id
    if (id) {
      fetchForceUser(id)
    }
  }, [])

  function fetchForceUser (id) {
    getForceUser(id)
      .then(forceUser => {
        setForceUser(forceUser)
        return null
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <h1>{forceUser.id}</h1>
      <h1>{forceUser.name}</h1>
      <h1>{forceUser.homeWorld}</h1>
      <h1>{forceUser.jedi}</h1>
      <h1>{forceUser.sith}</h1>
      <h1>{forceUser.neutral}</h1>
    </div>
  )
}
