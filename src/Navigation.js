import React from "react";
import "./MyStats.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
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
