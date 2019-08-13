import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import { About } from "../pages/about";
import { Contact } from "../pages/contactme";
import Nav from "../MainRoute/mainRoute";
import "../styles/main.css";

function Header() {
  return (
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
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li id="about">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li id="experience">
                <Link to={"/article"} className="nav-link">
                  Article
                </Link>
              </li>
              <li id="contact">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
