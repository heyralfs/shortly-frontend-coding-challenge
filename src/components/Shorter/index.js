import React from "react";
import FormContainer from "./style";
import bgDesktop from "../../images/bg-shorten-desktop.svg";
import bgMobile from "../../images/bg-shorten-mobile.svg";
import useShrtcodeApi from "../../hooks/useShrtcodeApi";

const Shorter = ({ shortenedUrls, setShortenedUrls }) => {
  const [url, setUrl] = React.useState("");

  const { request, isLoading, error, setError } = useShrtcodeApi();

  async function handleSubmit(event) {
    event.preventDefault();

    if (url.length > 0) {
      const response = await request(url);

      if (response.ok) {
        setShortenedUrls([
          ...shortenedUrls,
          {
            originalLink: response.result.original_link,
            shortLink: response.result.full_short_link,
          },
        ]);
      }
    } else {
      setError("Please add a link");
    }
  }

  return (
    <FormContainer
      className="container"
      bgDesktop={bgDesktop}
      bgMobile={bgMobile}
    >
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Shorten a link here..."
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          className={error && "error"}
        />

        <button disabled={isLoading} className="btn">
          {isLoading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
      {error && <span className="errorMessage">{error}</span>}
    </FormContainer>
  );
};

export default Shorter;
