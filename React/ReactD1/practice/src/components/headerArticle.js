import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import "../styles/main.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function HeaderArt(props) {
  return (
    <div>
      <header>
        <div className="container-fluid">
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
                  <Link
                    to="/news/sepakbola"
                    className="nav-link"
                    // onClick={props.value}
                  >
                    Sepakbola
                  </Link>
                </li>
                <li id="about">
                  <Link
                    to="/news/economi"
                    className="nav-link"
                    // onClick={props.click}
                  >
                    Ekonomi
                  </Link>
                </li>
                <li id="about">
                  <Link
                    to="/news/politik"
                    className="nav-link"
                    // onClick={props.value}
                  >
                    Politik
                  </Link>
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
                    id="about"
                  >
                    <Link to="/news/budaya" className="dropdown-item">
                      Budaya
                    </Link>
                    <Link to="/news/sosial" className="dropdown-item">
                      Sosial
                    </Link>
                    <div className="" />
                    <Link to="/news/hukum" className="dropdown-item">
                      Hukum
                    </Link>
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
