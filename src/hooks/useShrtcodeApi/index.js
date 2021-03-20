import React from "react";

const useShrtcodeApi = () => {
  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function request(url) {
    let response;
    let json;

    try {
      setError(null);
      setIsLoading(true);

      response = await fetch(BASE_URL + url);
      json = await response.json();

      if (!json.ok)
        throw new Error(`Error code: ${json.error_code}. ${json.error}`);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setIsLoading(false);
      return json;
    }
  }

  return {
    request,
    isLoading,
    error,
    setError,
  };
};

export default useShrtcodeApi;
