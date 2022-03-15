import React from "react";
import "./style/Skills.css";
function Skills({ header, skill }) {
  return (
    <div className="skills">
      <h3>{header}</h3>
      <div className="disc">
        {skill.map((skill, index) => {
          return (
            <div className={skill.title} key={index}>
              <div className="skill">
                <p>{skill.title}</p>
                <p>{skill.percent}</p>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: skill.percent }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
