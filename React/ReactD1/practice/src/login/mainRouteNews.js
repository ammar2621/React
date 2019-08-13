import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/article";
import SignIn from "./signin";
// import NotMatch from "../pages/NotMatch";
import News from "../pages/article";
import Profile from "./profile";
import Navigation from "./navigation";

const MainRouteNews = () => {
  return (
    <Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news" component={News} />
        {/* <Route component={NotMatch} /> */}
      </Switch>
    </Navigation>
  );
};

export default MainRouteNews;
