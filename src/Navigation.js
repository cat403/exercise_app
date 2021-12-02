import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  const user = null;
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <Link to="/">
          <h1>ExcerciseLog</h1>{" "}
        </Link>
      </div>
      {user ? (
        <ul>
          <li>
            <Link to="/mystats">My Stats</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
