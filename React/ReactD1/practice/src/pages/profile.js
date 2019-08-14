import React from "react";
import { Redirect } from "react-router-dom";

function Profile(props) {
  if (JSON.parse(localStorage.getItem("isLogin")) === null) {
    return <Redirect to={{ pathname: "/login" }} />;
  } else {
    return (
      <div>
        <h4>nama : </h4>
        <h4>{localStorage.getItem("username")}</h4>
        <h4>email : </h4>
        <h4>{localStorage.getItem("email")}</h4>
      </div>
    );
  }
}

export default Profile;
