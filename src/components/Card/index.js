import React from "react";
import CardBody from "./style";

const Card = ({ index, icon, title, text }) => {
  return (
    <CardBody className={`card--${index + 1}`}>
      <div className="card--icon">
        <img src={icon} />
      </div>
      <div className="card--title">
        <h1>{title}</h1>
      </div>
      <div className="card--text">
        <p>{text}</p>
      </div>
    </CardBody>
  );
};

export default Card;
