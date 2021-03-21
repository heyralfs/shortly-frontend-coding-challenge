import React from "react";
import Section from "./style";
import BoostBgDesktop from "../../../images/bg-boost-desktop.svg";
import BoostBgMobile from "../../../images/bg-boost-mobile.svg";

const BoostTodaySection = () => {
  return (
    <Section bgDesktop={BoostBgDesktop} bgMobile={BoostBgMobile}>
      <div className="container">
        <h1>Boost your links today</h1>

        <button className="btn">Get Started</button>
      </div>
    </Section>
  );
};

export default BoostTodaySection;
