import React from "react";
import "./App.css";
import Hero from "./sections/hero/hero";
import WeBelieve from "./sections/weBelieve/weBelieve";

function App() {
  return (
    <div className="container">
      <Hero
        title={"Portwell, Inc."}
        info={"Serving only the best since 2019"}
        link={"EXPLORE"}
      ></Hero>
      <WeBelieve
        title={"WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE"}
        info={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
        }
        link={"EXPLORE"}
      ></WeBelieve>
    </div>
  );
}

export default App;
