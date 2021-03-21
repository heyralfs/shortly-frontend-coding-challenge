import React from "react";
import Section from "./style";
import Shorter from "../../../components/Shorter";
import ShortenedUrl from "../../../components/ShortenedUrl";

const ShortenSection = () => {
  const [shortenedUrls, setShortenedUrls] = React.useState([]);

  return (
    <Section>
      <div className="shorterWrapper">
        <Shorter
          shortenedUrls={shortenedUrls}
          setShortenedUrls={setShortenedUrls}
        />
      </div>
      <div className="resultsWrapper">
        <div className="container">
          {shortenedUrls.map((url) => (
            <ShortenedUrl original={url.originalLink} short={url.shortLink} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ShortenSection;
