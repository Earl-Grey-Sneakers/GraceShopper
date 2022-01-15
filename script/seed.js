'use strict'

const {db, models: {User, Style, Order} } = require('../server/db')

const styles = [{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 8,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cement-2018-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609356781',
  price: 160,
  quantity: 5,
},
{
  brand: 'Nike',
  shoeName: 'Black Cement 3',
  color: 'black',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Black-Cement-2018-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1609356781',
  price: 160,
  quantity: 15,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red/white',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1612286105',
  price: 150,
  quantity: 8,
},
{
  brand: 'Nike',
  shoeName: 'Carmine 6',
  color: 'red/white',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Carmine-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1612286105',
  price: 150,
  quantity: 8,
},
{
  brand: 'Yeezy',
  shoeName: 'Breds',
  color: 'black/red',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792',
  price: 220,
  quantity: 8,
},
{
  brand: 'Yeezy',
  shoeName: 'Breds',
  color: 'black/red',
  size: 11,
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
  color: 'black/red',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 3,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black/red',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 6,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black/red',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 6,
},
{
  brand: 'Nike',
  shoeName: 'Bred 1',
  color: 'black/red',
  size: 12,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-Bred-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606318705',
  price: 120,
  quantity: 5,
},
{
  brand: 'Yeezy',
  shoeName: 'Beluga',
  color: 'tan',
  size: 8,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1638996919',
  price: 220,
  quantity: 8,
},
{
  brand: 'Yeezy',
  shoeName: 'Beluga',
  color: 'tan',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1638996919',
  price: 220,
  quantity: 4,
},
,
{
  brand: 'Yeezy',
  shoeName: 'Beluga',
  color: 'tan',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1638996919',
  price: 220,
  quantity: 6,
},
{
  brand: 'Yeezy',
  shoeName: 'Beluga',
  color: 'tan',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1638996919',
  price: 220,
  quantity: 12,
},
,
{
  brand: 'Nike',
  shoeName: 'Panda Dunk',
  color: 'black/white',
  size: 8,
  imageUrl: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1633027409',
  price: 100,
  quantity: 10,
},
{
  brand: 'Nike',
  shoeName: 'Panda Dunk',
  color: 'black/white',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1633027409',
  price: 100,
  quantity: 8,
},
{
  brand: 'Nike',
  shoeName: 'Panda Dunk',
  color: 'black/white',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1633027409',
  price: 100,
  quantity: 5,
},
{
  brand: 'Nike',
  shoeName: 'UNC Dunk',
  color: 'white/blue',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/Nike-Dunk-Low-UNC-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1624468252',
  price: 100,
  quantity: 9,
},
{
  brand: 'Nike',
  shoeName: 'UNC Dunk',
  color: 'white/blue',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Nike-Dunk-Low-UNC-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1624468252',
  price: 100,
  quantity: 8,
},
{
  brand: 'New Balance',
  shoeName: 'Evergreen',
  color: 'green/white',
  size: 7,
  imageUrl: 'https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606765288',
  price: 130,
  quantity: 8,
},
{
  brand: 'New Balance',
  shoeName: 'Evergreen',
  color: 'green/white',
  size: 9,
  imageUrl: 'https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606765288',
  price: 130,
  quantity: 4,
},
{
  brand: 'New Balance',
  shoeName: 'Evergreen',
  color: 'green/white',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606765288',
  price: 130,
  quantity: 6,
},
{
  brand: 'Nike',
  shoeName: 'Travis 6',
  color: 'green',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611191963',
  price: 160,
  quantity: 4,
},
{
  brand: 'Nike',
  shoeName: 'Travis 6',
  color: 'green',
  size: 12,
  imageUrl: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611191963',
  price: 160,
  quantity: 7,
},
{
  brand: 'Yeezy',
  shoeName: 'Vermillion',
  color: 'red',
  size: 8,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1635875119',
  price: 80,
  quantity: 6,
},{
  brand: 'Yeezy',
  shoeName: 'Vermillion',
  color: 'red',
  size: 10,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1635875119',
  price: 80,
  quantity: 9,
},{
  brand: 'Yeezy',
  shoeName: 'Vermillion',
  color: 'red',
  size: 11,
  imageUrl: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1635875119',
  price: 80,
  quantity: 10,
},{
  brand: 'New Balance',
  shoeName: 'Denim Blue',
  color: 'blue',
  size: 9,
  imageUrl: 'https://sneakernews.com/wp-content/uploads/2012/05/new-balance-996-denim-blue-available-2.jpg',
  price: 110,
  quantity: 8,
}
]

const orders = [{
  isProcessed: true,
  purchaseDate: new Date(),
  userId: 1
},
{
  userId: 2
},
{
  isProcessed: true,
  purchaseDate: new Date(),
  userId: 2
},
]

const usersDummy = [{
  username: 'Gulam',
  password: '123',
  isAdmin: true,
  email: 'gulam@fsa.com',
},
{
  username: 'Danny',
  password: '123',
  isAdmin: true,
  email: 'danny@fsa.com',
},
{
  username: 'Smit',
  password: '',
  isAdmin: true,
  email: 'smit@fsa.com',
},
{
  username: 'Brendon',
  password: '123',
  isAdmin: true,
  email: 'brendon@fsa.com',
},
{
  username: 'cody',
  password: '123',
  isAdmin: false,
  email: 'cody@fsa.com',
},
 {
  username: 'murphy',
  password: '123',
  isAdmin: false,
  email: 'murphy@fsa.com',
}
,]

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  await Promise.all(usersDummy.map(user => {
    return User.create(user);
  }));

  await Promise.all(orders.map(order => {
    return Order.create(order);
  }));

  await Promise.all(styles.map(style => {
    return Style.create(style);
  }));

  console.log(`seeded ${usersDummy.length} users`)
  console.log(`seeded successfully`)
  return {
    // Not entire sure what this object is for
    // users: {
    //   cody: users[0],
    //   murphy: users[1]
    // }
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

if (module === require.main) {
  runSeed()
}

module.exports = seed
