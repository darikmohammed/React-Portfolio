import React from "react";
import "./style/Nav.css";
const Nav = () => {
  return (
    <div className="nav-bar">
      <header>
        <i className="fa-solid fa-bars" id="profile-menu"></i>
        <i className="fa-solid fa-ellipsis-vertical" id="nav-menu"></i>
      </header>
    </div>
  );
};

export default Nav;
