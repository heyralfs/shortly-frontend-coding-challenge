import React from "react";
import Section from "./style";
import Shorter from "../../../components/Shorter";

const ShortenSection = () => {
  const [shortenedUrls, setShortenedUrls] = React.useState([]);

  return (
    <>
      <Section>
        <Shorter
          shortenedUrls={shortenedUrls}
          setShortenedUrls={setShortenedUrls}
        />
      </Section>
    </>
  );
};

export default ShortenSection;
