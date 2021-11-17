import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteForceUser, getForceUser } from '../api'

export default function Home (props) {
  const [forceUser, setforceUser] = useState([])

  useEffect(() => {
    const id = props.forceUser.id
    if (id) {
      fetchForceUser(id)
    }
  }, [])

  function fetchForceUser (id) {
    getForceUser(id)
      .then(forceUser => {
        setforceUser(forceUser)
        return null
      })
      .catch(err => console.log(err.message))
  }

  const { id, name, homeWorld, jedi, sith, neutral } = props.forceUser
  return (
    <div>
      <Link to={`/${id}`} >
        {name}
      </Link>
      {homeWorld}
      {jedi}
      {sith}
      {neutral}
      <button onClick={() => {
        deleteForceUser(id)
          .then(props.deleteForceUserId(id))
          .catch((err) => {
            console.log(err.message)
          })
        return null
      }}>Delete</button>
    </div>
  )
}
