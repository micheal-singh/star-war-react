import React from 'react'

export default function ForceUser ({ id, name, homeWorld, jedi, sith, neutral }) {
  console.log(ForceUser(), 'line 4')
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{homeWorld}</h1>
      <h1>{jedi}</h1>
      <h1>{sith}</h1>
      <h1>{neutral}</h1>
    </div>
  )
}
