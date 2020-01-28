import React from "react";
import "./App.css";
import Hero from "./sections/hero/hero";
import WeBelieve from "./sections/weBelieve/weBelieve";
import OurStory from "./sections/ourStory/ourStory";
import FreshCoffeeBeans from "./sections/freshGreat/freshGreatCoffeeBeans";


function App() {
  return (
    <div className="container">
      <Hero
        title={"Portwell, Inc."}
        info={"Serving only the best since 2019"}
        link={"EXPLORE"}
      ></Hero>
      <section className="section2-container">
        <WeBelieve
          title={"WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE"}
          info={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
          }
          link={"EXPLORE"}
        ></WeBelieve>
      </section>
      <section className="section3-container">
        <OurStory
          title={"OUR STORY"}
          info={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
          }
          link={"EXPLORE"}
        ></OurStory>
      </section>
      <section className="section4-container">
          <FreshCoffeeBeans></FreshCoffeeBeans>
      </section>
    </div>
  );
}

export default App;
