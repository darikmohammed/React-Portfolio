import React from "react";
import "./style/About.css";

function About() {
  return (
    <div className="about-description">
      <div className="header-notes">
        <div className="dis-notes">
          <h1>
            I'm Darik Mohammed <span className="web">Full-stack</span> Developer
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            vero dolorem repellat odit sit quam ipsam maxime officia, earum
            praesentium aliquam numquam cumque eveniet repellendus commodi quod
            laudantium tempora tempore sequi dicta quasi dolore ad! Sed
            inventore quae temporibus eligendi ex fugit aliquid, voluptas libero
            qui ipsa nulla nihil? Voluptas nihil incidunt fugit! Sequi, harum
            asperiores incidunt iste ducimus magnam ipsum! Expedita error
            repellat excepturi nobis exercitationem explicabo eos ipsam ab
            placeat. Temporibus unde cupiditate, quia eveniet tempora velit esse
            consectetur quo deserunt suscipit optio odit. Culpa nostrum
            voluptatibus, impedit quibusdam libero nesciunt vero ullam velit
            itaque, laborum assumenda voluptatem.
          </p>
        </div>

        <img src="/img/Profile.jpeg" alt="" className="profile-img" />
      </div>
      <button>
        HIRE ME <i className="fa-solid fa-arrow-right "></i>
      </button>
    </div>
  );
}

export default About;
