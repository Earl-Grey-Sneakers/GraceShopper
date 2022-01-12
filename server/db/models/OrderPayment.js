const Sequelize = require('sequelize')
const db = require('../db')

const OrderPayment = db.define('orderPayment', {
    items: {
    type: Sequelize.JSON
    }
})

module.exports = OrderPayment