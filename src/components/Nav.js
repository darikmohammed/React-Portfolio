import React from "react";
import "./style/Nav.css";
import Profile from "./sub-components/Profile";
const Nav = () => {
  let state = { clicked: false };

  let handleClick = () => {
    this.setState((state.clicked = !this.state.clicked));
  };
  return (
    <div className="nav-bar">
      <header>
        <div className="menu-btn">
          <i className="fa-solid fa-bars" id="profile-menu"></i>
          <i className="fa-solid fa-ellipsis-vertical" id="nav-menu"></i>
        </div>
      </header>
    </div>
  );
};

export default Nav;
