import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCartItem, checkout, fetchCart, updateQuantities } from '../store/cart';

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
      <h3>Your Total: {'$'}{cart.orderTotal}</h3>
      <div className="wrapper">
        {cartItems.length != 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="card">
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
              <button
                className="button-24"
                onClick={() => dispatch(removeCartItem(item.id, userId, cart.id))}
              >
                Remove item
              </button>
              <button onClick={() => dispatch(updateQuantities(cart.id,item.id,userId,'dec'))}>-</button>
              <span>Qty: {item.orderItems.quantity}</span>
              <button onClick={() => dispatch(updateQuantities(cart.id,item.id,userId,'inc'))}>+</button>
            </div>
          ))
        ) : (
          <h4>Your Cart is Empty!</h4>
        )}
      </div>
      <button className="button-30" id="checkout-btn" onClick={() => dispatch(checkout(cart.id))}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
