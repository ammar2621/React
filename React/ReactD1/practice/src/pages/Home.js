import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import logo1 from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Header from "../components/header";
import "../styles/main.css";
import Nav from "../MainRoute/mainRoute";

export function Home() {
  return (
    <div className="body">
      {/* <Nav /> */}
      {/* <Header /> */}
      {/* <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header-logo-alterra">
                                <img src={logo} height="67px" width="134px" />    
                            </div>
                        </div>
                        <div className="col-md-5 header-menu-right text-left">
                            <ul className="topMenu">
                                <li id="home"><a href="index.html">HOME</a></li>
                                <li id="about"><a href="about-me.html">ABOUT</a></li>
                                <li id="experience"><a>EXPERIENCE</a></li>
                                <li id="contact"><a href="form.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header> */}
      <div className="container main-body">
        <div className="row">
          <div className="col-md-5 text-right">
            <div className="main-body-photo">
              <img src={logo1} height="355px" width="355px" id="cewe-foto" />
            </div>
          </div>
          <div className="col-md-7 main-body-text">
            <div className="main-body-text-1">Hi, my name is</div>
            <div className="main-body-text-2">Anne Sullivan</div>
            <div className="main-body-text-3">I build things for the web</div>
            <div className="get-in-touch">
              <button
                type="button"
                onclick="window.location.href= 'about-me.html'"
                class="btn btn-get-in-touch"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
