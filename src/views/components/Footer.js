import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="footer-section">
      <div className="overlay">
        <div className="footer-content">
          <div className="container">
            <div className="footer-bottom">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-12 d-flex justify-content-start RAKEBACK-content-center">
                  <div className="footer-bottom-left">
                    <p>Copyright © 2021.<br />All Rights Reserved By <a style={{color: '#2ecdf3'}}>Raketech Private Limited</a></p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 d-flex justify-content-end RAKEBACK-content-center">
                  <div className="footer-bottom-right">
                    <ul style={{display: 'block'}}>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                      <li>
                        <a href="/terms-of-use">Term Of Use</a>
                      </li>
                      <li>
                        <a href="/blog">How to Play</a>
                      </li>
                      <li>
                        <a href="/feed">News</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
