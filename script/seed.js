'use strict'

const {db, models: {User, Style, Order} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const styles = [{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cement-2018-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609356781',
  price: 160,
  quantity: 5,
},
{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 8,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cement-2018-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609356781',
  price: 160,
  quantity: 15,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1612286105',
  price: 150,
  quantity: 8,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1612286105',
  price: 150,
  quantity: 8,
},
{
  brand: 'Yeezy',
  shoeName: 'Breds',
  color: 'black',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792',
  price: 220,
  quantity: 10,
},
{
  brand: 'Yeezy',
  shoeName: 'Zebras',
  color: 'white',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321670',
  price: 220,
  quantity: 11,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black',
  size: 12,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 3,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 6,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 5,
},
]

const orders = [{
  isProcessed: true,
  purchaseDate: new Date(),
  orderTotal: 440,
  userId: 1
},
{
  orderTotal: 220,
  userId: 2
},
{
  isProcessed: true,
  purchaseDate: new Date(),
  orderTotal: 530,
  userId: 2
},
]

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  await Promise.all(orders.map(order => {
    let orderMade = Order.create(order);
    return orderMade
  }));

  await Promise.all(styles.map(style => {
    return Style.create(style);
  }));

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
