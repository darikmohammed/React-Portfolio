import React from "react";
import "./style/Social.css";

function Social({ icon, link }) {
  return (
    <div className="social">
      <a href={link}>
        <i className={icon}></i>
      </a>
    </div>
  );
}

export default Social;
