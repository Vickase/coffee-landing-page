import React from "react";
import "./text.scss";

const Text = props => {
  return (
    <section className={`text-container ${props.sizeContainer}`}>
      <header className={`header ${props.titleColor} ${props.aligment}`}>
        <h1 className={`title ${props.titleSize}`}>
          {props.title}
        </h1>
      </header>
      <p className={`paragraph ${props.infoColor}`}>{props.info}</p>
      <a className="link" href="#">
        <p className="link-p">{props.link}</p>
      </a>
    </section>
  );
};

export default Text;
