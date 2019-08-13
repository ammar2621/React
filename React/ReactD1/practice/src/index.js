import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./pages/contactme";
import Article from "./pages/article";
import Header from "../src/components/header";

import AppNews from "./login/AppNews";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainRouteNews from "./login/mainRouteNews";

// const rootEl = document.getElementById("root");
// const render = Component =>
//   ReactDOM.render(
//     <BrowserRouter>
//       <Component />
//     </BrowserRouter>,
//     rootEl
//   );

// render(MainRouteNews);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
