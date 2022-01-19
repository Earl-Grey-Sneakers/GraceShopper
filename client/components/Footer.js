import React from 'react';

const Footer = () => {
  return (
      <footer>
        <div className="footer-content">
          <h3>Earl Gray Sneaker Hut</h3>
          <p>The Best Sneakers in the market</p>
          <ul className="socials">
            <li>
              <a href="https://github.com/smit-pate-l">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Sbrendon98">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/gulamcs">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/dannypacheco4">
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
  );
};

export default Footer;
