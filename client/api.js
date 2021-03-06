import request from 'superagent'

const forceUsersUrl = '/api/v1/forceUsers/'

export function getForceUsers () {
  return request
    .get(forceUsersUrl)
    .then(response => response.body)
}

export function getForceUser (id) {
  console.log(id, 'line 12')
  return request
    .get(`/api/v1/forceUsers/${id}`)
    .then(res => {
      console.log(res.body, 'line 16')
      return res.body
    })
    .catch(err => (console.log(err.message)))
}

export function addForceUser (forceUser) {
  const { id, name, homeWorld, jedi, sith, neutral } = forceUser
  return request.post('/api/v1/forceUsers/')
    .send({ id, name, homeWorld, jedi, sith, neutral })
    .then(response => {
      return response.body
    })
    .catch(err => (console.log(err.message)))
}

export function deleteForceUser (id) {
  return request
    .delete(forceUsersUrl + id)
    .then(response => {
      return response.body
    })
    .catch(err => (console.log(err.message)))
}
