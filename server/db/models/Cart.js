const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    items: {
    type: Sequelize.JSON
    }
})

module.exports = Cart