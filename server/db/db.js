const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getForceUsers: getForceUsers,
  getJedis: getJedis,
  getSiths: getSiths,
  getNeutrals: getNeutrals,
  getForceUser: getForceUser,
  addForceUser: addForceUser,
  deleteForceUser: deleteForceUser
}

// All force users
function getForceUsers (db = connection) {
  return db('forceUsers')
    .select()
}

// All jedis
function getJedis (db = connection) {
  return db('forceUsers')
    .select()
    .where({ jedi: true })
}

// All siths
function getSiths (db = connection) {
  return db('forceUsers')
    .select()
    .where({ sith: true })
}

// All neutrals
function getNeutrals (db = connection) {
  return db('forceUsers')
    .select()
    .where({ neutral: true })
}

// single force user
function getForceUser (id, db = connection) {
  return db('forceUsers')
    .select()
    .where('forceUsers.id', id)
    .first()
}

// new force user
function addForceUser (data, db = connection) {
  const { name, homeWorld, jedi, sith, neutral } = data
  return db('forceUsers')
    .insert({ name, homeWorld, jedi, sith, neutral })
    .then(([newId]) => {
      return getForceUser(newId)
    })
}

// delete forceUser
function deleteForceUser (id, db = connection) {
  return db('forceUsers')
    .where({ id: id })
    .delete()
}
