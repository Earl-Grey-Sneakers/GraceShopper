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

  let UUID = cart.UUID || 'empty';
  const userId = auth.id || 0;
  if (userId === 0 && UUID === 'empty' && localStorage.UUID !== undefined) {
    UUID = localStorage.getItem('UUID');
  }
  const cartItems = cart.styles || [];

  useEffect(() => {
    dispatch(fetchCart(userId, UUID));
  }, [userId]);

  return (
    <div>
      {cartItems.length != 0 ? (
        <div>
          <h3>Bag</h3>
          <div className="row item">
            <div className="column left">
              {cartItems.map((item) => (
                <div key={item.id} className="row cartItem">
                  <div className="column item-img">
                    <Link to={`/styles/${item.shoeName}`}>
                      <img className="shoe-img" src={item['imageUrl']} />
                    </Link>
                  </div>
                  <div className="column heading">
                    <div className="row">
                      <div className="column">{item['shoeName']}</div>{' '}
                      <div className="column">
                        {'$'}
                        {item['price']}
                      </div>
                    </div>
                    <div className="row">
                      <h5>Size:{item.size}</h5>
                    </div>
                    <div className="row">
                      <div className="column">
                        <button
                          className="qty-btn dec-btn"
                          onClick={() => {
                            if (item.orderItems.quantity > 1) {
                              dispatch(updateQuantities(cart.id, UUID, userId, item.id, 'dec'));
                            } else {
                              dispatch(removeCartItem(cart.id, item.id, userId, UUID));
                            }
                          }}
                        >
                          -
                        </button>
                        <span>Qty: {item.orderItems.quantity}</span>

                        <button
                          className="qty-btn inc-btn"
                          onClick={() =>
                            dispatch(updateQuantities(cart.id, UUID, userId, item.id, 'inc'))
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="column">
                        <i
                          className="bi bi-trash"
                          onClick={() => dispatch(removeCartItem(cart.id, item.id, userId, UUID))}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="column summary right">
              <h3>Summary</h3>
              <div className="row">
                <div className="column">Subtotal </div>
                <div className="column">
                  {'$'} {cart.orderTotal}.00
                </div>
              </div>
              <div className="row">
                <div className="column">Estimated Shipping & Handling</div>
                <div className="column">$1200.00</div>
              </div>
              <div className="row">
                <div className="column">Estimated Tax</div>
                <div className="column">10%</div>
              </div>
              <div className="row total">
                <div className="column">Total</div>
                <div className="column">
                  {'$'} {cart.orderTotal + 1200 + (cart.orderTotal + 1200) * 0.1}.00
                </div>
              </div>

              {auth.id ? (
                <div className="row">
                  <button
                    className="button-50"
                    id="checkout-btn"
                    onClick={() => {
                      if (userId !== 0) {
                        dispatch(checkout(UUID));
                      }
                    }}
                  >
                    Checkout
                  </button>
                </div>
              ) : (
                <div className="row">
                  <Link to="signup">
                    <button className="button-50" id="checkout-btn">
                      Sign up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapper extendDiv">
          <h3>Your Cart is Empty!</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
