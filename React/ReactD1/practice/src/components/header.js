import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import logo1 from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "../styles/main.css";

export function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="header-logo-alterra">
                <img src={logo} height="67px" width="134px" />
              </div>
            </div>
            <div className="col-md-5 header-menu-right text-left">
              <ul className="topMenu">
                <li id="home">
                  <a href="index.html">HOME</a>
                </li>
                <li id="about">
                  <a href="about-me.html">ABOUT</a>
                </li>
                <li id="experience">
                  <a>EXPERIENCE</a>
                </li>
                <li id="contact">
                  <a href="form.html">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
