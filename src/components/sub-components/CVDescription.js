import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import "./style/CV.css";

function CVDescription() {
  let language = [
    {
      title: "Amharic",
      percent: "100%",
    },
    {
      title: "English",
      percent: "90%",
    },
  ];
  let ProgrammmingLanguage = [
    {
      title: "Html",
      percent: "90%",
    },
    {
      title: "CSS",
      percent: "88%",
    },
    {
      title: "SASS",
      percent: "88%",
    },
    {
      title: "Bootstrap",
      percent: "80%",
    },
    {
      title: "Tailwind CSS",
      percent: "75%",
    },
    {
      title: "JS",
      percent: "80%",
    },
    {
      title: "React",
      percent: "80%",
    },
    {
      title: "Node Js",
      percent: "80%",
    },
    {
      title: "Git",
      percent: "90%",
    },
    {
      title: "Adobe Photoshop",
      percent: "80%",
    },
    {
      title: "Adobe Illustrator",
      percent: "83%",
    },
  ];
  return (
    <div className="cv-discription">
      {/* about-me */}
      <AboutMe discription="Age: " result="24" />
      <AboutMe discription="Freelance: " result="Available" />
      <AboutMe discription="Full/Part time job: " result="Available" />
      <AboutMe discription="Address: " result="Addis Ababa, Ethiopia" />
      <hr />
      {/* Skills
      props: 
      header 
      skill{
          titile
          percentage
      } */}
      <Skills header="Languages" skill={language} />
      <Skills header="Skills" skill={ProgrammmingLanguage} />
    </div>
  );
}

export default CVDescription;
