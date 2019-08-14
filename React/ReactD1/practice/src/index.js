import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { About } from "./pages/about";
import { Contact } from "./pages/contactme";
import Article from "./pages/article";
import Header from "../src/components/header";
import Category from "./pages/kategori";
import AppNews from "./login/AppNews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const rootEl = document.getElementById("root");
// const render = Component =>
//   ReactDOM.render(
//     <BrowserRouter>
//       <Component />
//     </BrowserRouter>,
//     rootEl
//   );

// render(MainRouteNews);

import Login from "./pages/login";
import HeaderLogin from "./components/headerLogin";
import Profile from "./pages/profile";
import MainRouteNews from "./login/mainRouteNews";
import { Provider } from "unistore/react";
import { store } from "./components/store";
import Home from "./components/home";

const routing = (
  <Provider store={store}>
    <Router>
      <HeaderLogin />
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={Article} />
      <Route path="/contactus" component={Contact} />
      <Route path="/aboutme" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      {/* <Route exact path="/news/:category" component={Article} /> */}
      <Route path="/news/:source_name" component={Category} />
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// ReactDOM.render(<Article />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
