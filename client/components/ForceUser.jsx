import React from 'react'
import { deleteForceUser } from '../api'

export function ForceUser (props) {
  const forceUser = props.forceUser
  return (
    <li key={forceUser.id}>{forceUser.name} <button onClick={() => {
      deleteForceUser(forceUser.id)
        .then(props.deleteWidgetId(forceUser.id))
        .catch((err) => {
          console.log(err.message)
        })
      return null
    }}>Delete</button></li>
  )
}
