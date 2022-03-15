import React from "react";
import "./style/ServiceCard.css";

function ServicesCard({ Icon, header_text, paragraph_text }) {
  return (
    <div className="services-card">
      <i className={Icon}></i>
      <h3>{header_text}</h3>
      <p>{paragraph_text}</p>
    </div>
  );
}

export default ServicesCard;
