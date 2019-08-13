import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import "../styles/main.css";

export function HeaderArt(props) {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row text-align-center">
            <div className="col-md-3 kategori align-self-center">
              <div className="kategori">
                <a href="index.html">
                  <h3 id="kategori">Kategori</h3>
                </a>
              </div>
            </div>
            <div className="col-md-9 header-menu-right text-left">
              <ul className="topMenu">
                <li id="home">
                  <a href="index.html">Sepak Bola</a>
                </li>
                <li id="about">
                  <a href="about-me.html">Ekonomi</a>
                </li>
                <li id="experience">
                  <a>Politik</a>
                </li>
                <li id="contact">
                  <a href="form.html">Hiburan</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lainnya
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Romantis
                    </a>
                    <a className="dropdown-item" href="#">
                      Lelucon
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li id="contact">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-controll mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={props.search}
                    />
                    <button
                      className="btn btn-outline-success1 my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderArt;
