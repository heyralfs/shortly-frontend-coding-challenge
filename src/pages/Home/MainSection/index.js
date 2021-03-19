import React from "react";
import Section from "./style";
import MainBg from "../../../images/illustration-working.svg";

const MainSection = () => {
  return (
    <Section bg={MainBg}>
      <div className="container">
        <div>
          <h1>
            More than just <br /> shorter links
          </h1>

          <h2>
            Build your brand's recognition and get detailed <br />
            insights on how your links are performing.
          </h2>

          <button className="btn">Get Started</button>
        </div>
        <div className="main--img"></div>
      </div>
    </Section>
  );
};

export default MainSection;
