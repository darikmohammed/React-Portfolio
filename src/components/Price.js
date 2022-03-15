import React from "react";
import PriceCard from "./sub-components/PriceCard";
import "./style/Price.css";

function Price() {
  const silver = [
    {
      markIcon: "fa-solid fa-check",
      discription: "UI Design",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Web Development",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "Logo Design",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "SEO Optimization",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "WordPress Integration",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "5 Websites",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "Unlimited User",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "20 GB Bandwidth",
    },
  ];
  const gold = [
    {
      markIcon: "fa-solid fa-check",
      discription: "UI Design",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Web Development",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Logo Design",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "SEO Optimization",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "WordPress Integration",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "5 Websites",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "Unlimited User",
    },
    {
      markIcon: "fa-solid fa-xmark",
      discription: "20 GB Bandwidth",
    },
  ];
  const Dimond = [
    {
      markIcon: "fa-solid fa-check",
      discription: "UI Design",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Web Development",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Logo Design",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "SEO Optimization",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "WordPress Integration",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "5 Websites",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "Unlimited User",
    },
    {
      markIcon: "fa-solid fa-check",
      discription: "20 GB Bandwidth",
    },
  ];

  return (
    <div className="price">
      <h2>Price Plans</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
        cupiditate illo sint consectetur, harum iste minima asperiores ipsum
        accusantium est.
      </p>
      <PriceCard
        icons={silver}
        header="Silver"
        price="0.00"
        parag="For most businesses that want to optimeze web queries"
      />
      <PriceCard
        icons={gold}
        header="Gold"
        price="50.00"
        parag="For most businesses that want to optimeze web queries"
      />
      <PriceCard
        icons={silver}
        header="Silver"
        price="80.00"
        parag="For most businesses that want to optimeze web queries"
      />
    </div>
  );
}

export default Price;
