import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { clearCart } from '../store/cart';

const NavBar = () => {
  const { auth } = useSelector((state) => {
    return state;
  });

  const id = auth.id || Infinity
  const username = auth.username || ''
  // useEffect(() => {
  // }, [id])

  console.log(id)
  console.log(username)

  const dispatch = useDispatch();
  return (
    <header className="">
      <Link to="/styles">
        <h2 className="logo">EGSH</h2>
      </Link>
      <ul>
        <li>{username!=='' ? <div>Welcome, {username}!</div> : <div>Welcome!</div>}</li>
        <li>
          <Link to="/cart">
            <i className="gg-shopping-bag"></i>
          </Link>
        </li>
        {id!==Infinity ? (
          <li onClick={() => {
            dispatch(logout())
            dispatch(clearCart())
            }} className="logout">
            Logout
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
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
