const path = require('path')
const express = require('express')

const forceUsers = require('./routes/forceUsers')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/forceUsers', forceUsers)

module.exports = server
