import React from "react";
import CVDescription from "./CVDescription";
import Social from "./Social";
import "./style/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <img src="/img/profile.jpeg" alt="" className="avatar" />
      <h3>Darik Mohammed</h3>
      <p className="developer">Full-Stack Developer</p>
      <div className="socials">
        <Social icon="fa-brands fa-facebook fa-2x" />
        <Social icon="fa-brands fa-twitter fa-2x" />
        <Social icon="fa-brands fa-linkedin fa-2x" />
        <Social icon="fa-brands fa-github fa-2x" />
        <Social icon="fa-brands fa-instagram fa-2x" />
      </div>
      <hr />
      {/* Scrollable cv-sample */}
      <CVDescription />
    </div>
  );
}

export default Profile;
