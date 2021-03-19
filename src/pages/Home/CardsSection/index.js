import React from "react";
import Section from "./style";
import Card from "../../../components/Card";
import IconBrandRecognition from "../../../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../../../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../../../images/icon-fully-customizable.svg";

const CardsSection = () => {
  const cardsContent = [
    {
      icon: IconBrandRecognition,
      title: "Brand Recognition",
      text:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },

    {
      icon: IconDetailedRecords,
      title: "Detailed Records",
      text:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },

    {
      icon: IconFullyCustomizable,
      title: "Fully Customizable",
      text:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </p>
        </div>
        <div className="cards">
          {cardsContent.map((card, index) => {
            if (index < 2) {
              return (
                <>
                  <Card
                    key={`card__${index}`}
                    icon={card.icon}
                    title={card.title}
                    text={card.text}
                    index={index}
                  />
                  <div
                    key={`divisor__${index}`}
                    className="cards--divisor"
                  ></div>
                </>
              );
            } else {
              return (
                <Card
                  key={`card__${index}`}
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  index={index}
                />
              );
            }
          })}
        </div>
      </div>
    </Section>
  );
};

export default CardsSection;
