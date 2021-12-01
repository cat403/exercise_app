import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <Link to="/">
          <h1>ExcerciseLog</h1>{" "}
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/mystats">My Stats</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
