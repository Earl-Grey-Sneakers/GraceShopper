//this is the access point for all things database related!

const db = require('./db')
const Style = require('./models/Style')
const OrderPayment = require('./models/OrderPayment')
const Order = require('./models/Order')

const User = require('./models/User')

//Associations
Order.belongsTo(User)
User.hasMany(Order)
Style.belongsToMany(Order, { through: 'orderItems'})
Order.hasOne(OrderPayment)

//will need to add more columns in through table
//but only once an order is made.
//Guide: https://stackoverflow.com/questions/48957191/how-do-i-orm-additional-columns-on-a-join-table-in-sequelize

module.exports = {
  db,
  models: {
    User,
    Style,
    OrderPayment,
    Order
  },
}
