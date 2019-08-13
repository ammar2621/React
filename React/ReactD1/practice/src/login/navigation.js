import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <nav id="topnav">
      <ul id="topmenu">
        <li className="menu">
          <Link to="/">Home</Link>
        </li>
        <li className="menu">
          <Link to="/signup">SignUp</Link>
        </li>
        <li className="menu">
          <Link to="/signin">SignIn</Link>
        </li>
        <li className="menu">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="menu">
          <Link to="/" onClick={() => props.postSignout()}>
            SignOut
          </Link>
        </li>
        <li className="menu">
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
