import React from "react";
import FormContainer from "./style";
import bgDesktop from "../../images/bg-shorten-desktop.svg";
import bgMobile from "../../images/bg-shorten-mobile.svg";

const Shorter = () => {
  return (
    <FormContainer
      className="container"
      bgDesktop={bgDesktop}
      bgMobile={bgMobile}
    >
      <form>
        <input placeholder="Shorten a link here..." />
        <button className="btn">Shorten It!</button>
      </form>
    </FormContainer>
  );
};

export default Shorter;
