import React from "react";
import Text from "../../components/texts/text";

import "./weBelieve.scss";

const CoffeeTypes =(props)=>{
    return(
        <section className="menu-container">
            <Text titleColor="black" titleSize="small" title={props.title} info={props.info} link={props.link}></Text>
        </section>
    )

}

export default CoffeeTypes;