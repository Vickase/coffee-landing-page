import React from "react";
import Text from "../../components/texts/text";
import CoffeeCard from "../../components/coffeeCards/CoffeeCard";

import "./weBelieve.scss";

const WeBelieve = props => {
  return (
    <div className="we-believe-text">
      <Text
        sizeContainer="medium-size-container"
        titleColor="black"
        titleSize="medium"
        title={props.title}
        info={props.info}
        link={props.link}
        infoColor="gray"
      ></Text>
      <div className="cards-container">
        <CoffeeCard></CoffeeCard>
      </div>
      <footer className="we-believe-in-footer"><p className="footer-p">Full Menu</p></footer>
    </div>
  );
};

export default WeBelieve;
