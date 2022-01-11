//this is the access point for all things database related!

const db = require('./db')
const Style = require('./models/Style')

const User = require('./models/User')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Style
  },
}
