import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
//       <header className="toolbar">
//     <nav className="toolbar__navigation light-green darken-4">
//       {/* <div /> */}
//       {/* <div className="toolbar__logo">
//         <a href="/">
//         <i className="material-icons">spa</i>
//         </a>naturalBeauty
//       </div> */}
//       <div className="spacer" />
//       <div className="toolbar_navigation-items">
//         <ul>
          
//         <li key="B">
//        <NavLink to="/dashboard">Dashboard</NavLink>
//        </li>
//        <li key="C">
//          <NavLink to="/products">Products</NavLink>
//        </li>
//        <li key="D">
//          <NavLink to="/cart">Cart</NavLink>
//        </li>
//        <li key="A">
//           <NavLink to="/">
//           <i className="material-icons">spa</i>
//           </NavLink>
//           </li>
//        <li key="E">
//        <span className="float-right">naturalBeauty</span>
//        </li>
//         </ul>
// </div>
// </nav>
// </header>

      <div className="navbar-fixed">
        <nav className="z-depth-3">
          <div className="nav-wrapper light-green darken-4">
          <ul>
            {/* <li key="A">
              <NavLink to="/">
              <span>naturalBeauty <i className="material-icons">spa</i></span>
              </NavLink>
            </li> */}
          
          
            
           <Link
              to="/"
              className="col s5 brand-logo right-align white-text"
            >
              <i className="material-icons">spa</i>
              naturalBeauty
            </Link>

            
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

// class Navbar extends Component {
//     render() {
//       return (

//       )}}

export default Navbar;