import React from "react";
import CoffeeTypes from "./CoffeeTypes";

import "./CoffeeCard.scss";

import MochaLatte from "../../images/coffee_item_2.png";
import PourOver from "../../images/coffee_item_1.png";
import Espresso from "../../images/coffee_item_3.png";



const CoffeeCard = props => {
  const coffeeCups = [
    {
      img: MochaLatte,
      title: "MOCHA LATTE",
      info:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      img: PourOver,
      title: "POUR OVER",
      info:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      img: Espresso,
      title: "ESPRESSO",
      info:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  return (
    <div className="card-wrapper">
      {coffeeCups.map((cup,index)=>{
        return(
          <CoffeeTypes
          key ={`cup-${index}`}
          imageSrc={cup.img}
          title={cup.title}
          paragraph={cup.info}
          ></CoffeeTypes>
        )
      })}
    </div>
  );
};

export default CoffeeCard;
