import React from "react";
import ResultBox from "./styled";

const ShortenedUrl = ({ original, short }) => {
  const [copied, setCopied] = React.useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(short);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <ResultBox className="anime">
      <div className="original">{original}</div>
      <div className="short">{short}</div>

      <button className={`btn ${copied && "copied"}`} onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </ResultBox>
  );
};

export default ShortenedUrl;
