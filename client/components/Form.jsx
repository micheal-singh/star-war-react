import React, { useState } from 'react'
import { addForceUser } from '../api'

export function Form ({ refreshForceUser }) {
  const [forceUsers, setForceUsers] = useState([])
  const [form, setForm] = useState({
    name: '',
    homeWorld: ''
  })
  const [checked, setChecked] = useState(false)

  function handleChange (event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
  }

  function handleCheck (event) {
    // maybe move it to its own component
    setChecked(event.target.checked)
  }

  function handleSubmit (event) {
    event.preventDefault()
    addForceUser(form)
      .then(newForceUser => {
        refreshForceUser(newForceUser)
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

  return (
    <div>
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
