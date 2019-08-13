import React from "react";
import logo from "../img/logo-ALTA@2x.png";
import logo1 from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import mobil from "../img/mobil.jpg";
import Header from "../components/header";
import Footer from "../components/footers";
import "../styles/main.css";
import AppAjax from "../components/listArticle";
import Headline from "../components/headline";


function Article() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo-alterra">
                <img src={logo} height="67px" width="134px" />
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
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="overflow-auto">
              <ul className="list-group">
                <li className="list-group-item warnaCol">
                  <div className="d-flex w-100 justify-content-between">
                    Berita Terkini
                    <small>Lihat Semua</small>
                  </div>
                </li>
                <AppAjax />
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <Headline />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
