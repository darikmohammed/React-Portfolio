import React from "react";
import "./style/CV.css";
function AboutMe({ discription, result }) {
  return (
    <div className="about-me">
      <p className="discription">{discription}</p>
      <p>{result}</p>
    </div>
  );
}

export default AboutMe;
