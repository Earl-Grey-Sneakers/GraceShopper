//this is the access point for all things database related!

const db = require('./db')
const Style = require('./models/Style')
const Purchase = require('./models/Purchase')
const Cart = require('./models/Cart')

const User = require('./models/User')

//associations could go here!
Cart.belongsTo(User)
User.hasMany(Purchase)
Purchase.belongsTo(User)

module.exports = {
  db,
  models: {
    User,
    Style,
    Purchase,
    Cart
  },
}
