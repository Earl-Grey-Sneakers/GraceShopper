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
      <h1 className='my-cart-title'>My Cart</h1>
        {cartItems.length != 0 ? (
        <div>
          <h3>Your Total: {'$'}{cart.orderTotal}</h3>
          <div className="wrapper">
            {cartItems.map((item) => (
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
                <button onClick={() => {
                  if(item.orderItems.quantity>1){
                    dispatch(updateQuantities(cart.id,item.id,userId,'dec'))
                  } else {
                    dispatch(removeCartItem(item.id, userId, cart.id))
                  }
                  }}>-</button>
                <span>Qty: {item.orderItems.quantity}</span>
                <button onClick={() => dispatch(updateQuantities(cart.id,item.id,userId,'inc'))}>+</button>
              </div>
            ))}
          </div>
          <button className="button-30" id="checkout-btn" onClick={() => dispatch(checkout(cart.id))}>
          Checkout
          </button>
        </div>
        ) : (
        <div className="wrapper">
          <h3>Your Cart is Empty!</h3>
        </div>
        )}
    </div>
  );
};

export default Cart;
