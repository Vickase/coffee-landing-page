import React from "react";
import Text from "../../components/texts/text";

import "./ourStory.scss";

const OurStory = props => {
  return (
    <section className="ourstory-container" >
      <Text
        title={props.title}
        titleSize="medium"
        titleColor="white"
        info={props.info}
        infoColor="white-p"
        link={props.link}
      ></Text>
    </section>
  );
};

export default OurStory;
