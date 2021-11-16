const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getForceUsers()
    .then(forceUsers => {
      forceUsers.forEach((forceUser) => {
        console.log(forceUser.jedi)
        if (forceUser.jedi === '1') {
          forceUser.jedi = 'jedi'
        }
      })
      res.json(forceUsers)
      console.log(forceUsers)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteForceUser(id)
    .then(() => {
      res.status(200)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).send('error')
    })
})

// add force user
router.post('/', (req, res) => {
  let { name, homeWorld, jedi, sith, neutral, random } = req.body
  const randomNumber = Math.floor(Math.random() * 4)
  if (random === '1') {
    if (randomNumber === 0) {
      jedi = '1'
    } else if (randomNumber === 1) {
      sith = '1'
    } else if (randomNumber === 2) {
      neutral = '1'
    } else if (randomNumber === 3) {
      jedi = '1'
      sith = '1'
    }
  }
  db.addForceUser({ name, homeWorld, jedi, sith, neutral})
    .then((forceUser) => {
      res.json(forceUser)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
})

module.exports = router
