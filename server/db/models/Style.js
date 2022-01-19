const Sequelize = require('sequelize');
const db = require('../db');
const Order = require('./Order')

const Style = db.define('style', {
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shoeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
  },
});

Style.afterCreate(async (style) => {
  await style.update({color:style.color.toLowerCase()})
})

Style.afterCreate(async (style) => {
  if (style.id == 5) {
    await style.addOrder(1, { through: { quantity: 1, totalPrice: style.price} });
    const cart1 = await Order.findByPk(1)
    await cart1.increment({'orderTotal':style.price}, {where : {id:1}})
    await style.addOrder(2, { through: { quantity: 1, totalPrice: style.price} });
    const cart2 = await Order.findByPk(2)
    await cart2.increment({'orderTotal':style.price}, {where : {id:2}})
    await style.addOrder(3, { through: { quantity: 1, totalPrice: style.price} });
    const cart3 = await Order.findByPk(3)
    await cart3.increment({'orderTotal':style.price}, {where : {id:3}})
  }
  if (style.id == 4) {
    await style.addOrder(1, { through: { quantity: 1, totalPrice: style.price} });
    const cart = await Order.findByPk(1)
    await cart.increment({'orderTotal':style.price}, {where : {id:1}})
  }
  if (style.id == 1) {
    await style.addOrder(3, { through: { quantity: 1, totalPrice: style.price} });
    const cart = await Order.findByPk(3)
    await cart.increment({'orderTotal':style.price}, {where : {id:3}})
  }
  if (style.id == 3) {
    await style.addOrder(3, { through: { quantity: 1, totalPrice: style.price} });
    const cart = await Order.findByPk(3)
    await cart.increment({'orderTotal':style.price}, {where : {id:3}})
  }
});

module.exports = Style;
