import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-3">
          <div className="nav-wrapper light-green darken-4">
            <Link
              to="/"
              style={{
                fontFamily: "Simplifica",
                fontweight: "bold"
              }}
              className="col s5 brand-logo right-align white-text"
            >
              <i className="material-icons">spa</i>
              naturalBeauty
            </Link>

            <ul>
      <li key="B">
      <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li key="C">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li key="D">
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;