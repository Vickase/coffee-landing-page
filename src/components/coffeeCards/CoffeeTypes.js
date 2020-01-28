import React from "react";

const CoffeeTypes = props => {
  return (
    <section className="card-section">
      <img className="imagen" src={props.imageSrc} alt="imagen de taza de café"></img>
      <article className="card-article">
        <header className="card-header">
          <h2 className="card-title">{props.title}</h2>
        </header>
        <p className="cards-info">{props.paragraph}</p>
      </article>
    </section>
  );
};
export default CoffeeTypes;