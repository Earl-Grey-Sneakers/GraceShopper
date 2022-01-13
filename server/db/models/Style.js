const Sequelize = require('sequelize');
const db = require('../db');

const Style = db.define('style', {
  brand: {
    type: Sequelize.STRING,
  },
  shoeName: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

Style.afterCreate(async (style) => {
  if (style.id == 5) {
    await style.addOrders(1, { through: { qty: '1' } });
    await style.addOrders(2, { through: { qty: '1' } });
    await style.addOrders(3, { through: { qty: '1' } });
  }
  if (style.id == 4) {
    await style.addOrders(1, { through: { qty: '1' } });
  }
  if (style.id == 1) {
    await style.addOrders(3, { through: { qty: '1' } });
  }
  if (style.id == 3) {
    await style.addOrders(3, { through: { qty: '1' } });
  }
});

module.exports = Style;
