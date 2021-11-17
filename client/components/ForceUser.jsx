import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getForceUser } from '../api'

export default function ForceUser (props) {
  const [forceUser, setForceUser] = useState([])

  useEffect(() => {
    const id = props.forceUsers.id
    if (id) {
      fetchForceUser(id)
    }
  }, [])

  function fetchForceUser (id) {
    getForceUser(id)
    console.log(id, 'line 17')
      .then(forceUser => {
        setForceUser(forceUser)
        return null
      })
      .catch(err => console.log(err.message))
  }

  const { id, name, homeWorld, jedi, sith, neutral } = props.forceUsers
  return (
    <li key={id}>
      <Link to={`/${id}`} >
        {name}
      </Link>
      {homeWorld}
      {jedi}
      {sith}
      {neutral}
    </li>
  )
}
