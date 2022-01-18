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

  let UUID = cart.UUID || 'empty'
  const userId = auth.id || 0;
  if (userId===0 && UUID==='empty' && localStorage.UUID!==undefined){
    UUID = localStorage.getItem('UUID')
  }
  const cartItems = cart.styles || [];

  useEffect(() => {
      dispatch(fetchCart(userId,UUID));
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
                  onClick={() => dispatch(removeCartItem(cart.id, item.id, userId, UUID))}
                >
                  Remove item
                </button>
                <button onClick={() => {
                  if(item.orderItems.quantity>1){
                    dispatch(updateQuantities(cart.id, UUID, userId, item.id, 'dec'))
                  } else {
                    dispatch(removeCartItem(cart.id, item.id, userId, UUID))
                  }
                  }}>-</button>
                <span>Qty: {item.orderItems.quantity}</span>
                <button onClick={() => dispatch(updateQuantities(cart.id, UUID, userId, item.id, 'inc'))}>+</button>
              </div>
            ))}
          </div>
          <button className="button-30" id="checkout-btn" onClick={() => {
            if(userId!==Infinity){
            dispatch(checkout(UUID))
            }
            }}>
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
