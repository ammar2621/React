import React from "react";
import logoAlta from "../img/logo-ALTA@2x.png";
import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="header-logo-alterra">
              <img src={logoAlta} height="67px" width="134px" />
            </div>
          </div>
          <div className="col-md-5 header-menu-right text-left">
            <ul className="topMenu">
              <li id="home">
                <Link to="/">HOME</Link>
              </li>
              <li id="about">
                <Link to="/news">NEWS</Link>
              </li>
              <li id="about">
                <Link to="/profile">PROFILE</Link>
              </li>
              <li id="about">
                <Link to="/login">SIGN IN</Link>
              </li>
              <li id="contact">
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("isLogin");
                  }}
                >
                  SIGN OUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
