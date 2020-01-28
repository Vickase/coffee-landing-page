import React from "react";
import Text from "../texts/text";

import "./HalfSection.scss";

const HalfSection = props => {
  return (
    <section className="half-container">
      <article className="cell beans">
        <Text
          sizeContainer="small-size-container"
          title={props.title}
          alignment="align-left"
          titleSize="small"
          titleColor="black"
          info={props.info}
          infoColor="gray"
          link={props.link}
        ></Text>
      </article>
      <article className="cell img" ></article>
    </section>
  );
};

export default HalfSection;
