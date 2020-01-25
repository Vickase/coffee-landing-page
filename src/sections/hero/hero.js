import React from "react";
import Text from "../../components/texts/text"
import "./hero.scss";

const Hero =(props)=>{
    return(
        <section className="main-container">
            <Text title={props.title} titleSize="big" info={props.info} link={props.link}></Text>
        </section>
    )

}

export default Hero;