import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav (props) {
  // const forceUser = props.forceUser
  return (
    <>
      <h1>Nav</h1>
      <ul>
        <li key='home'><Link to='/'>Home</Link></li>
      </ul>
    </>

  )
}
