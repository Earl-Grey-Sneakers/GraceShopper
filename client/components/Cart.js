import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/cart';
import { Link } from 'react-router-dom';
import { removeCartItem, checkout } from '../store/cart';

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, auth } = useSelector((state) => {
    return state;
  });

  const userId = auth.id || Infinity;
  const cartItems = cart.styles || [];

  useEffect(() => {
    if (userId != Infinity) {
      dispatch(fetchCart(userId));
    }
  }, [userId]);

  return (
    <div className="divBelowNavbar">
      <h2>My Cart</h2>
      <div className="cart-container">
        {cartItems.length != 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <div>
                <h3>{item['shoeName']}</h3>
                <h5>
                  {'$'}
                  {item['price']}
                </h5>
                <Link to={`/styles/${item.shoeName}`}>
                  <img className="shoe-img" src={item['imageUrl']} />
                </Link>
                <h5>Size:{item.size}</h5>
              </div>
              <button onClick={() => dispatch(removeCartItem(item.id, userId))}>Remove item</button>
              <button>-</button>
              <span>Qty: 1</span>
              <button>+</button>
            </div>
          ))
        ) : (
          <h4>Your Cart is Empty!</h4>
        )}
        <button onClick={() => dispatch(checkout(cart.id))}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
