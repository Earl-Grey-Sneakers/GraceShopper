import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { clearCart } from '../store/cart';

const NavBar = () => {
  const { cart, auth } = useSelector((state) => {
    return state;
  });

  const id = auth.id || Infinity;
  const username = auth.username || '';
  let cartItems = 0;

  const cartStyles = cart.styles || 0;
  if (cartStyles) {
    let total = 0;

    const totalQuantity = cartStyles.map((items) => {
      total += items.orderItems.quantity;
      return total;
    });

    cartItems = totalQuantity[totalQuantity.length - 1];
  }

  const dispatch = useDispatch();
  return (
    <header className="">
      <Link to="/">
        <h2 className="logo">EGSH</h2>
      </Link>
      <ul>
        <li>
          <Link to="/styles" className="navLink">
            Shop
          </Link>
        </li>

        <li>
          <Link to="/cart">
            <i className="bi bi-bag"></i>
            {cartItems ? <button className="cart-view">{cartItems}</button> : ''}
          </Link>
        </li>
        {auth.isAdmin ? (
          <div>
            <li>
              <Link to="/admin" className="navLink">
                Manage
              </Link>
            </li>
          </div>
        ) : (
          <div></div>
        )}

        {id !== Infinity ? (
          <ul>
            <li>
              <Link to="/account" className="navLink">
                Account
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(logout());
                dispatch(clearCart());
              }}
              className="logout"
            >
              Logout
            </li>
          </ul>
        ) : (
          <li>
            <Link to="/login" className="navLink">
              Login
            </Link>
          </li>
        )}
      </ul>
      <script type="text/javascript">
        {window.addEventListener('scroll', function () {
          var header = this.document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 0);
        })}
      </script>
    </header>
  );
};

export default NavBar;
