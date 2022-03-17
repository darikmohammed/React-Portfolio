import React from "react";
import ServicesCard from "./sub-components/ServicesCard";
import "./style/Services.css";

function Services() {
  return (
    <div className="services">
      <h2>My Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        consequuntur aliquam maiores, eaque alias dolor? Laborum quasi accusamus
        temporibus quo.
      </p>
      <div className="cards">
        <ServicesCard
          Icon="fa-solid fa-laptop-code fa-5x icon"
          header_text="Web Development"
          paragraph_text="Blog, E-commerce"
        />
        <ServicesCard
          Icon="fa-solid fa-images fa-5x icon"
          header_text="UI/UX Design"
          paragraph_text="Mobile app, Responsive website design "
        />
        <ServicesCard
          Icon="fa-solid fa-gamepad fa-5x icon"
          header_text="Game Design "
          paragraph_text="Character Design, Objects"
        />
        <ServicesCard
          Icon="fa-brands fa-pied-piper fa-5x icon"
          header_text="Logo Design"
          paragraph_text="Logo, Flyer, Brocher"
        />
        <ServicesCard
          Icon="fa-solid fa-camera fa-5x icon"
          header_text="Photography"
          paragraph_text="Portrait, Product Photography"
        />
        <ServicesCard
          Icon="fa-solid fa-rectangle-ad fa-5x icon"
          header_text="Advertising"
          paragraph_text="Voice Over, Beat Making"
        />
      </div>
    </div>
  );
}

export default Services;
