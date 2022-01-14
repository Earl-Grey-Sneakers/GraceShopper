const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  isProcessed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  purchaseDate: {
    type: Sequelize.DATE,
  },
  orderTotal: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    },
  },
});

module.exports = Order;
