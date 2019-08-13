import React from "react";
import "./App.css";
import "./styles/main.css";
import Nav from "../src/MainRoute/mainRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
