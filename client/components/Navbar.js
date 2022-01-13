import React from 'react';
import { connect, useSelector } from 'react-redux';

const NavBar = () => {
  const { username } = useSelector((state) => {
    return state.auth;
  });
  return (
    // <nav class="autohide navbar navbar-expand-lg navbar-dark bg-primary">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Brand
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#main_nav"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="main_nav">
    //       <ul class="navbar-nav ms-auto">
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Menu item
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Menu item
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Menu item
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <script type="text/javascript">
    //     {document.addEventListener('DOMContentLoaded', function () {
    //       el_autohide = document.querySelector('.autohide');
    //       // add padding-top to bady (if necessary)
    //       navbar_height = document.querySelector('.navbar').offsetHeight;
    //       document.body.style.paddingTop = navbar_height + 'px';
    //       if (el_autohide) {
    //         var last_scroll_top = 0;
    //         window.addEventListener('scroll', function () {
    //           let scroll_top = window.scrollY;
    //           if (scroll_top < last_scroll_top) {
    //             el_autohide.classList.remove('scrolled-down');
    //             el_autohide.classList.add('scrolled-up');
    //           } else {
    //             el_autohide.classList.remove('scrolled-up');
    //             el_autohide.classList.add('scrolled-down');
    //           }
    //           last_scroll_top = scroll_top;
    //         });
    //         // window.addEventListener
    //       }
    //       // if
    //     })}
    //   </script>
    // </nav>

    <header className="">
      <h2 className="logo">EGSH</h2>
      <ul>
        <li>{username ? <div>Welcome, {username}</div> : <div>Welcome, Guest</div>}</li>
        <li>
          <i className="gg-shopping-bag"></i>
        </li>
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
