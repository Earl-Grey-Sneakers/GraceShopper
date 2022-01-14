import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCart, removeCartItem, checkout } from '../store/cart';

// const cart = {
//   1: {
//     id: 1,
//     shoeName: 'Breds',
//     price: 220,
//     imageUrl:
//       'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606320792',
//   },
//   2: {
//     id: 2,
//     shoeName: 'Zebras',
//     price: 220,
//     imageUrl:
//       'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321670',
//   },
//};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

  const { order, auth } = useSelector((state) => {
    return state;
  });
  console.log('cart inside component', order);
  const userId = auth.id || Infinity;

  useEffect(() => {
    dispatch(fetchCart(userId));
    setCartItems(order);
  }, [order.length]);

  // const itemsMap = [];
  // for (let item in cart) {
  //   itemsMap.push(
  //     <div key={cart[item]['id']}>
  //       <h3>{cart[item]['shoeName']}</h3>
  //       <h5>
  //         {'$'}
  //         {cart[item]['price']}
  //       </h5>
  //       <img className="shoe-img" src={cart[item]['imageUrl']} />
  //     </div>
  //   );
  // }

  return (
    <div className="divBelowNavbar">
      <h2>My Cart</h2>
      <div className="cart-container">
        {/* {cart.id ? for(item in cart){ } : <h5>Your cart is empty.</h5>} */}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>
              <h3>{item['shoeName']}</h3>
              <h5>
                {'$'}
                {item['price']}
              </h5>
              <img className="shoe-img" src={item['imageUrl']} />
            </div>
            <button onClick={() => dispatch(removeCartItem(item.id, userId))}>Remove item</button>
            <button>-</button>
            <span>Qty: 1</span>
            <button>+</button>
          </div>
        ))}
        <button onClick={() => dispatch(checkout({ ...order, isProcessed: true }, userId))}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
