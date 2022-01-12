const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    isProcessed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    purchaseDate: {
        type: Sequelize.DATE
    },
    orderTotal: {
        type: Sequelize.FLOAT
    }
})

module.exports = Order