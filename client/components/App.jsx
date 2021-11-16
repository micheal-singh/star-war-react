import React, { useState, useEffect } from 'react'
import { getForceUsers, addForceUser } from '../api'

import { ForceUser } from './ForceUser'

function App () {
  const [forceUsers, setForceUsers] = useState([])
  const [form, setForm] = useState({
    name: '',
    homeWorld: '',
    jedi: ''
  })
  const [checked, setChecked] = useState(false)

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

  function handleChange (event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
  }

  function handleCheck (event) {
    const { checked } = event.target.checked
    // maybe move it to its own component
    setChecked(checked)
  }

  function handleSubmit (event) {
    event.preventDefault()
    addForceUser(form)
      .then(newForceUser => {
        const allForceUsers = [
          ...forceUsers,
          newForceUser
        ]
        setForceUsers(allForceUsers)
        setForm({
          name: '',
          homeWorld: ''
        })
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }

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
      <h2>Add force user</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:
          <input id='name'
            onChange={handleChange}
            value={forceUsers.name}
            name='name'/>
        </label>
        <label htmlFor='homeWorld'>HomeWorld:
          <input id='homeWorld'
            onChange={handleChange}
            value={forceUsers.homeWorld}
            name='homeWorld'/>
        </label>
        <label htmlFor='jedi'>Jedi:
          <input id='jedi'
            value={forceUsers.jedi}
            type='checkbox'
            checked={checked}
            onChange={handleCheck}
            name='jedi'/>
        </label>
        <button>Add Force User</button>
      </form>
    </div>
  )
}

export default App
