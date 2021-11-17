import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { deleteForceUser } from '../api'

export function Home (props) {
  const forceUser = props.forceUser
  return (
    <li key={forceUser.id}>
      <Router>
        <Link to={'/forceUsers/' + forceUser.id} >
          {forceUser.name}
        </Link>
      </Router>
      {forceUser.homeWorld}
      {forceUser.jedi}
      {forceUser.sith}
      {forceUser.neutral}
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
