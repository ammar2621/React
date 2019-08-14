import React from "react";
import logoAlta from "../img/logo-ALTA@2x.png";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import HeaderLogin from "./headerLogin";
import "../styles/main.css";

function Home(props) {
  return (
    <header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-1.5">
            <div className="header-logo-alterra imgHome">
              <img src={logoAlta} height="67px" width="134px" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center jargon">
          <h1>Berita Terpercaya</h1>
        </div>
      </div>
    </header>
  );
}

export default connect(
  "nama, email, isLogin",
  actions
)(Home);
