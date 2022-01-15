import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const NavBar = () => {
  const { username, id } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();
  return (
    <header className="">
      <Link to="/styles">
        <h2 className="logo">EGSH</h2>
      </Link>
      <ul>
        <li>{username ? <div>Welcome, {username}</div> : <div>Welcome, Guest</div>}</li>
        <li>
          <Link to="/cart">
            <i className="gg-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/allusers">Users</Link>
        </li>
        {id ? (
          <li onClick={() => dispatch(logout())} className="logout">
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
