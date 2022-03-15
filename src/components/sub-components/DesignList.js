import React from "react";
import "./style/DesignList.css";

function DesignList({ icon, discription }) {
  return (
    <div className="list">
      <i className={icon}></i>
      <p>{discription}</p>
    </div>
  );
}

export default DesignList;
