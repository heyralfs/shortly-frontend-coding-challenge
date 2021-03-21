import React from "react";
import FormContainer from "./style";
import bgDesktop from "../../images/bg-shorten-desktop.svg";
import bgMobile from "../../images/bg-shorten-mobile.svg";
import useShrtcodeApi from "../../hooks/useShrtcodeApi";
import useMediaQuery from "../../hooks/useMediaQuery";

const Shorter = ({ shortenedUrls, setShortenedUrls }) => {
  const [url, setUrl] = React.useState("");

  const { request, isLoading, error, setError } = useShrtcodeApi();

  const isMobile = useMediaQuery("(max-width: 768px");

  async function handleSubmit(event) {
    event.preventDefault();

    if (url.length > 0) {
      const response = await request(url);

      if (response && response.ok) {
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

        {error && isMobile && <span className="errorMessage">{error}</span>}

        <button disabled={isLoading} className="btn">
          {isLoading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
      {error && !isMobile && <span className="errorMessage">{error}</span>}
    </FormContainer>
  );
};

export default Shorter;
