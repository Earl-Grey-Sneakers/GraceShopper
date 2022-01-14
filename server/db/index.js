//this is the access point for all things database related!

const db = require('./db');
const Sequelize = require('sequelize');
const Style = require('./models/Style');
const OrderPayment = require('./models/OrderPayment');
const Order = require('./models/Order');

const User = require('./models/User');

//Associations
Order.belongsTo(User);
User.hasMany(Order);
const orderItems = db.define('orderItems', {
  styleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Style,
      key: 'id'
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order, // 'Actors' would also work
      key: 'id'
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
});
Style.belongsToMany(Order, { through: 'orderItems' });
Order.belongsToMany(Style, { through: 'orderItems' });
Order.hasOne(OrderPayment);

module.exports = {
  db,
  models: {
    User,
    Style,
    OrderPayment,
    Order,
    orderItems,
  },
};
