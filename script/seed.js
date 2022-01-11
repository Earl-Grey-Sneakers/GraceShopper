'use strict'

const {db, models: {User, Style} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const styles = [{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 10,
  imageUrl: 'placeholder.com',
  price: 160,
  quantity: 5,
},
{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 8,
  imageUrl: 'placeholder.com',
  price: 160,
  quantity: 15,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red',
  size: 11,
  imageUrl: 'placeholder.com',
  price: 150,
  quantity: 8,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red',
  size: 10,
  imageUrl: 'placeholder.com',
  price: 150,
  quantity: 8,
},
{
  brand: 'Yeezy',
  shoeName: 'Bred',
  color: 'black',
  size: 9,
  imageUrl: 'placeholder.com',
  price: 220,
  quantity: 10,
},
{
  brand: 'Yeezy',
  shoeName: 'Triple White',
  color: 'white',
  size: 11,
  imageUrl: 'placeholder.com',
  price: 220,
  quantity: 11,
},
]


async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

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
