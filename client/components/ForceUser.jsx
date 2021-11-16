import React from 'react'
import { deleteForceUser } from '../api'

export function ForceUser (props) {
  const forceUser = props.forceUser
  return (
    <li key={forceUser.id}>{forceUser.name} {forceUser.homeWorld} {forceUser.jedi} {forceUser.sith} {forceUser.neutral} 
      <button onClick={() => {
        deleteForceUser(forceUser.id)
          .then(props.deleteForceUserId(forceUser.id))
          .catch((err) => {
            console.log(err.message)
          })
        return null
      }}>Delete</button></li>
  )
}
