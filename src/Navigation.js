import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions";
function Navigation() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  return (
    // <div className="top-bar">
    //   <div className="hero-image-container"></div>
    <nav className="nav-bar">
      <div className="logo-container">
        <Link to="/">
          <h1>ExcerciseLog</h1>
        </Link>
      </div>
      {isLoggedIn ? (
        <ul>
          <li>
            <Link to="/mystats">My Stats</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
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
