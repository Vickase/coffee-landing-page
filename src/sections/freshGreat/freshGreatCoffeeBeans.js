import React from "react";
import HalfSection from "../../components/HalfSection/HafSection";

const FreshGreat = props => {
  return (
    <section className="container">
      <HalfSection
        title={"FRESH BEANS"}
        info={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
        link={"Learn More"}
        
      ></HalfSection>
    </section>
  );
};

export default FreshGreat;
