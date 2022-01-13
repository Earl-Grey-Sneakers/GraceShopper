import React from 'react';

const dummyUser = () => {
  const cart = {
    1: {
      id: 1,
      shoeName: 'Breds',
      price: 220,
      imageUrl:
        'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792',
    },
    2: {
      id: 2,
      shoeName: 'Zebras',
      price: 220,
      imageUrl:
        'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321670',
    },
  };

  const itemsMap = [];
  for (let item in cart) {
    itemsMap.push(
      <div key={cart[item]['id']}>
        <h3>{cart[item]['shoeName']}</h3>
        <h5>
          {'$'}
          {cart[item]['price']}
        </h5>
        <img className="shoe-img" src={cart[item]['imageUrl']} />
      </div>
    );
  }

  return (
    <div className="divBelowNavbar">
      <h2>My Cart</h2>
      <div className="cart-container">
        {/* {cart.id ? for(item in cart){ } : <h5>Your cart is empty.</h5>} */}
        {itemsMap.map((item, idx) => (
          <div key={idx}>
            {item}
            <button>Remove item</button>
            <button>-</button>
            <span>Qty: 1</span>
            <button>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
