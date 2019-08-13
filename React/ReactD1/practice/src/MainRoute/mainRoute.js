import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contactme";
import Header from "../components/header";
import Article from "../pages/article";

function Nav() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/article" component={Article} />
      </Switch>
    </Router>
  );
}

export default Nav;
