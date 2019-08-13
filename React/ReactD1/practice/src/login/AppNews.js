import React, { Component } from "react";
import MainRoute from "./mainRouteNews";
import { withRouter } from "react-router-dom";

import Navigation from "./navigation";
import App from "../App";

class AppAjax extends Component {
  postSignOut = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App">
        <Navigation postSignOut={this.postSignOut} />
        <MainRoute />
      </div>
    );
  }
}

export default withRouter(AppAjax);
