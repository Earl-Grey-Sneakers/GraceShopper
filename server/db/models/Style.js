const Sequelize = require('sequelize')
const db = require('../db')

const Style = db.define('style', {
    brand:{
        type:Sequelize.STRING,
    },
    shoeName: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.INTEGER
    },
    imageUrl:{
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    quantity: {
        type: Sequelize.INTEGER
    }
})

module.exports = Style