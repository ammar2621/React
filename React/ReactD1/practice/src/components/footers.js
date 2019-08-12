import React from "react";
import logo3 from "../img/logo-ALTA-v2@2x.png";
import fb from "../img/ic_fb@2x.png";
import twitter from "../img/ic-twitter@2x.png";
import ig from "../img/ic-instagram@2x.png";
import linked from "../img/ic-linkedin@2x.png";
import "../styles/main.css";

export function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-logo-alterra">
                <img src={logo3} width="110px" height="57px" />
              </div>
            </div>
            <div className="col-md-3 social">
              <div className="social-content">
                <h5>Social Media</h5>
                <ul className="social-media">
                  <li>
                    <a href="https://facebook.com">
                      <img src={fb} width="20px" height="20px" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <img src={twitter} width="20px" height="20px" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <img src={ig} width="20px" height="20px" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                      <img src={linked} width="20px" height="20px" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="copyright">
                <h5>Copyright &copy; Alterra</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
