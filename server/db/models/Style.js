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
  console.log(Object.getPrototypeOf(style));
  if (style.id == 5) {
    await style.addOrder(1, { through: { quantity: 1 } });
    await style.addOrder(2, { through: { quantity: 1 } });
    await style.addOrder(3, { through: { quantity: 1 } });
  }
  if (style.id == 4) {
    await style.addOrder(1, { through: { quantity: 1 } });
  }
  if (style.id == 1) {
    await style.addOrder(3, { through: { quantity: 1 } });
  }
  if (style.id == 3) {
    await style.addOrder(3, { through: { quantity: 1 } });
  }
});

module.exports = Style;
