const Sequelize = require('sequelize')
const db = require('../db')

const Purchase = db.define('purchase', {
    items: {
    type: Sequelize.JSON
    }
})

module.exports = Purchase