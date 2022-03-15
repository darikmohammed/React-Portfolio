import React from "react";
import DesignList from "./DesignList";
import "./style/PriceCard.css";

function PriceCard({ icons, header, price, parag }) {
  return (
    <div className="price-card">
      <h1>{header}</h1>
      <p>
        <span className="price-number">${price}</span> /hour
      </p>
      <p>{parag}</p>

      <div className="design-list">
        {icons.map((icon, index) => {
          return (
            <DesignList
              key={index}
              icon={icon.markIcon}
              discription={icon.discription}
            />
          );
        })}
      </div>
      <button>ORDER NOW</button>
    </div>
  );
}

export default PriceCard;
