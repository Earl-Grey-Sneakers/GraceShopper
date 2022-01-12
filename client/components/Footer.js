import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3>Earl Gray Sneaker Hut</h3>
          <p>The Best Sneakers in the market</p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;2022 EGSH. designed by <span>Sneaker Heads</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
