import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";

function Profile(props) {
  if (props.isLogin === false) {
    return <Redirect to={{ pathname: "/login" }} />;
  } else {
    return (
      <div>
        <h4>nama : </h4>
        <h4>{props.nama}</h4>
        <h4>email : </h4>
        <h4>{props.email}</h4>
      </div>
    );
  }
}

export default connect(
  "nama, email, isLogin",
  actions
)(Profile);
