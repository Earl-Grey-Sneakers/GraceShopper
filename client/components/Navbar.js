import React from 'react';
import { connect } from 'react-redux';

const NavBar = (props) => {
  const { username } = props;
  return (
    <div>
      <header className="">
        <h2 className="logo">EGSH</h2>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
        <script type="text/javascript">
          {window.addEventListener('scroll', function () {
            var header = this.document.querySelector('header');
            header.classList.toggle('sticky', this.window.scrollY > 0);
          })}
        </script>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapStateToProps)(NavBar);
